const getCSV = require('../services/GetCSV');
const poi = require('../data/points-of-interest');

const TestGeocode = require('../services/TestGeocode');

exports.merge = async (req, res) => {
  const before = Date.now();
  // get csv
  const results = await getCSV(`${__dirname}/../data/events.csv`);
  // Loop on events
  const min = 0;
  let i = results.length - 1;
  for (; i >= min; i--) {
    TestGeocode(results[i], poi);
  }
  return res.status(200).json(poi);
};

