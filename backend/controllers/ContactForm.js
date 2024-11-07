const Contact = require('../models/Contact');

exports.contactForm = async(req, res)=>{
    try{
        const object = req.body;
        if(!object){
            return res.status(500).json({
                success: false,
                message:"Data is missing"
            })
        }

        await Contact.create({data: object});
        console.log(object);
            return res.status(200).json({
            success: true,
            message:object,
        });

    } catch(error){
        console.log(error);
        return res.status(501).json({
            success: false,
            message:"Error while storing data"
        })
    }
};