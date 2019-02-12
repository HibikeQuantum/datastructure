const fs = require("fs");
const readline = require("readline");
const { exec } = require("child_process");
const https = require("https");
const rl = readline.createInterface({
  input: fs.createReadStream("REVIEW.md")
});

let studentInfo = require("../student.json");
let { theClass, student, sprint } = studentInfo;

let review = {
  sprint: sprint,
  class: theClass,
  name: student,
  "objectives-achevied": "",
  "objectives-failed": "",
  improvements: [],
  "improvements-comments": "",
  "others-comments": ""
};

let section;

rl.on("line", line => {
  if (line.includes(":")) {
    getAnswerFromQuestion(line);
  }
  if (line.includes("-")) {
    getAnswerFromChocies(line);
  }
  if (line.includes("#")) {
    if (line.includes("##")) {
      let text = getTextFromLine(line, "#");
      section = text;
      console.log(section);
    }
  }
}).on("close", function() {
  console.log(review);

  let data = {
    fields: review
  };

  console.log(data);

  exec('echo "$airtable_api_key"', (err, apikey) => {
    if (err) {
      console.log(err);
      throw new Error("echo command did not work right");
    }

    if (apikey === "\n") {
      throw new Error("There is not the airtable_api_key");
    }

    const options = {
      hostname: "api.airtable.com",
      path: "/v0/app8kEq9wXlsuffDy/Sprint%20Review",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: " Bearer " + apikey.trim()
      }
    };

    console.log(JSON.stringify(options.headers));

    const req = https.request(options, res => {
      let data;
      res.on("data", chunk => {
        data += chunk;
        // callback(null, result);
      });
      res.on("end", () => {
        console.log(data);
        if (data.includes("error")) {
          throw new Error("There is an error on response from airtable.");
        }
      });
    });

    req.on("error", e => {
      console.log(e);
      throw new Error("data did not send to airtable correctly");
      // callback(new Error('failure'));
    });

    // send the request
    req.write(JSON.stringify(data));
    req.end();
  });
});

const getTextFromLine = (line, character) => {
  let text = line
    .split(character)
    .pop()
    .trim();
  return text;
};

const getAnswerFromQuestion = line => {
  if (line.includes("Comments:")) {
    if (section === "Improvements") {
      let text = getTextFromLine(line, ":");
      review["improvements-comments"] = text;
    }
    if (section === "Others") {
      let text = getTextFromLine(line, ":");
      review["others-comments"] = text;
    }
  }
};

const getAnswerFromChocies = line => {
  if (section === "Objectives") {
    if (line.includes("- [ ]") || line.includes("- []")) {
      let text = getTextFromLine(line, "]");
      review["objectives-failed"] = review["objectives-failed"] + text + "\n";
    }
    if (line.includes("- [x]")) {
      let text = getTextFromLine(line, "]");
      review["objectives-achevied"] =
        review["objectives-achevied"] + text + "\n";
    }
  }
  if (section === "Improvements") {
    if (line.includes("- [x]")) {
      let text = getTextFromLine(line, "]");
      review["improvements"].push(text);
    }
  }
};