const newman = require("newman")

newman.run({
    collection: "API-Collection-Excellence-Khintana",
    // environment: "json-env/jojo.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
