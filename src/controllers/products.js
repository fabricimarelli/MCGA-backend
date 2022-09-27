const products = require("../models/products");

const getAll = (req, res) => {
    products.find({ isDeletd: false })
        .then((data) => res.json({ data }))
        .catch((err) => res.status[500].json({ msg: 'Error: ${err}' }));
};

module.exports = { getAll }