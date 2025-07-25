
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../apidata.json')));
  const code = req.query.code || '91';
  const result = data.call[code] || data.call.multi;

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ error: "Not found" });
  }
};
