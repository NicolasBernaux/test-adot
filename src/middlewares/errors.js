exports.catchErrors = fn => {
  return function(req, res, next) {
    fn(req, res, next).catch(err => {
      if (process.env.NODE_ENV !== 'production') {
        res.status(500).json({
          message: 'An error occured',
          error: err.message
        });
      } else {
        res.status(500).json({
          message: 'An error occured'
        });
      }
    });
  };
};

exports.notFound = (req, res) => {
  res.status(404).json({
    message: 'Nothing found'
  });
};

exports.productionErrors = (err, req, res) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
};
