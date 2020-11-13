const path = require("path");

module.exports = function(app) {
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};

module.exports = function(app) {
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
  };

  module.exports = function(app) {
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
  };