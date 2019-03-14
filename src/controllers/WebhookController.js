const getCSV = require('../services/GetCSV');

const TestGeocode = require('../services/TestGeocode');

exports.merge = async (req, res) => {
  const json = req.body;
  // get csv
  const results = await getCSV(`${__dirname}/../data/events.csv`);
  // Loop on events
  const min = 0;
  let i = results.length - 1;
  for (; i >= min; i--) {
    TestGeocode(results[i], json);
  }
  return res.status(200).json(json);
};

