const router = require("express").Router();

const products = require("../controllers/products");

router.get("/", products.getAll);
// router.get("/search", products.search);
// router.get("/:id", products.getById);
// router.post("/", products.create);


module.exports=router;

