const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EwYC0bRL#Xnb-F0ZaQ_k2MNsUL6028La8KggQv6PkAz7-g7P9JKs",
  MONGODB: process.env.MONGODB || "mongodb://mongo:zSvJuKfbTAVKsGUcJdddCLujEhkCfNlc@shinkansen.proxy.rlwy.net:49840",
  OWNER_NUM: process.env.OWNER_NUM || "94724610079",
};
