const fs = require("fs");
const path = require("path");

// Import your functions from the other files in the same directory
const { fetchSecondaryData } = require("./secondary.data.js");
const { fetchStatusIds } = require("./status.ids.js");

async function initHashes(base) {
  // Define paths to the target files (Up two levels to root, then site.data)
  const siteDataDir = path.join(__dirname, "..", "..", "site.data");
  const secondaryDataPath = path.join(siteDataDir, "secondary.data.json");
  const statusIdsPath = path.join(siteDataDir, "status.ids.json");

  console.log("Checking for required site data hashes...");

  // Check secondary.data.json
  if (!fs.existsSync(secondaryDataPath)) {
    console.log(" -> secondary.data.json is missing. Fetching now...");
    await fetchSecondaryData(base);
  } else {
    console.log(" -> secondary.data.json already exists. Skipping.");
  }

  // Check status.ids.json
  if (!fs.existsSync(statusIdsPath)) {
    console.log(" -> status.ids.json is missing. Fetching now...");
    await fetchStatusIds(base);
  } else {
    console.log(" -> status.ids.json already exists. Skipping.");
  }

  console.log("Site data check complete.");
}

module.exports = { initHashes };
