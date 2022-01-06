module.exports = {
  "/": {
		"bypass": function(req, res, opts) {
      console.log('bypass');
			res.setHeader("x-your-header", "value");
		}
	}
};

console.log('PRRRRROOOXXXXYYYY INIT');