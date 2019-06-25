const { override, addLessLoader, addBabelPreset } = require("customize-cra");

module.exports = override(
  addBabelPreset("rsuite"),
  addLessLoader({
    javascriptEnabled: true
  })
);
