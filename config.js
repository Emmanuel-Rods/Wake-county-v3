const base = "https://wakecountync-energovpub.tylerhost.net/apps"; // No trailing slash

const dateOffset = 1; // 1 = yesterday

// statuses that need to pulled using daily.js
const requiredStatuses = [
  "Issued",
  "In Review",
  "Stop Work Order",
  "On Hold",
  "Complete",
];

// permit types
const requiredSecondaryData = [
  "Residential - New One- and Two-Family Dwelling",
  "Commercial New Multi Family",
  "Commercial New Building or Addition",
  "Residential Addition",
];

//status that need be updated
const updateStatuses = ["Issued", "In Review"];

// exports
module.exports = {
  base,
  dateOffset,
  requiredStatuses,
  requiredSecondaryData,
  updateStatuses,
};
