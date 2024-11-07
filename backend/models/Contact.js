const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
    data:{
        type: Object,
        required: true,
    }
})
module.exports = mongoose.model("ContactSchema", contactSchema);