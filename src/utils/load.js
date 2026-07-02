const fs = require("fs");

function loadJson(file) {
  if (!fs.existsSync(file)) {
    throw new Error(
      `Missing required configuration file: ${file}\n` +
        "Run the scraper configuration/setup before starting the scraper.",
    );
  }

  try {
    const data = JSON.parse(fs.readFileSync(file, "utf8"));

    if (
      data === null ||
      typeof data !== "object" ||
      Array.isArray(data) ||
      Object.keys(data).length === 0
    ) {
      throw new Error("File is empty.");
    }

    return data;
  } catch (err) {
    throw new Error(`Invalid JSON in ${file}: ${err.message}`);
  }
}

module.exports = loadJson;
