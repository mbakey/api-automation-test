const newman = require("newman")

newman.run(
  {
    collection: "API-Collection-Excellence-Khintana",
    // environment: "json-env/jojo.postman_environment.json",
    reporters: ["cli", "htmlextra"],
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("File: jonathan-api.js", "Line 11:", "Running");
  }
);