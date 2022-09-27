const mongoose=require("mongoose");

const { schema } = mongoose;

const ProductsSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
        maxLengh: 50,
        required: true,
        unique: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Products", ProductsSchema)