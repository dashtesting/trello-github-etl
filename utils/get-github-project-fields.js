"use strict";

let gh = require("../lib/gh.js");

async function main() {
  let fields = await gh.projects.getCustomFields();
  fields.forEach(function (field) {
    console.info(`"${field.id}": "${field.name}"`);
  });
}

main();
