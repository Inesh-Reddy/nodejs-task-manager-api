const notFound = (req, res) =>
  res.status(500).json({ msg: `Requested API route not found` });

module.exports = notFound;
