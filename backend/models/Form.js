const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    data:{
        type: Object,
        required: true,
    }

})
module.exports = mongoose.model("Formschema", formSchema);