const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "cxRw2BjK#hhE9CQE6SPqjo7P8Esc9LycUrIXjQW3-SRlietAg9Gk",
  MONGODB: process.env.MONGODB || "mongodb://mongo:zSvJuKfbTAVKsGUcJdddCLujEhkCfNlc@shinkansen.proxy.rlwy.net:49840",
  OWNER_NUM: process.env.OWNER_NUM || "94724610079",
};
