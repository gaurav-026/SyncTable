const Form = require('../models/Form');


//post all the data to db
exports.postFormData = async (req, res) => {
    try {
        //fetch data
        const dataObject = req.body;
        if (!dataObject) {
            return res.status(403).json({
                success: false,
                message: "No object found",
            })
        }
        await Form.create(dataObject);
        console.log(dataObject);
        return res.status(200).json({
            success: true,
            message: "New Data saved successfully!",
            object: dataObject,
        })


    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error while saving form in Db"
        })
    }
}

//get all the data from database
exports.getAllFormData = async (req, res) => {
    try {
        //fetch the data
        const fetchedData = await Form.find({});
        if (!fetchedData) {
            return res.status(400).json({
                success: false,
                message: "No submission found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Form data is fetched successfully",
            object: fetchedData,
        })

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error while fetchinn form data in Db"
        })
    }
}
