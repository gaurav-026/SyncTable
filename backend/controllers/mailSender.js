require("dotenv").config();
const nodemailer = require("nodemailer");

exports.mailSender = async(req, res)=>{
    
    try{
        
        //get data from req.body
        const data = req.body;
        console.log("Data for sending mail is:", data);
        const rowsHtml = data.map(row => `
            <tr>
                <td>${row.id}</td>
                <td>${row.name}</td>
                <td>${row.phone}</td>
                <td>${row.email}</td>
                <td>${row.hobbies}</td>
            </tr>
        `).join('');

        const htmlContent = `
        <h2>Details of your selected rows</h2>
        <table border="1" cellpadding="5" cellspacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Hobbies</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHtml}
            </tbody>
        </table>
    `;

    
        //mailsend kr do 
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        })
        let info = await transporter.sendMail({
            from:"SyncTable: Gaurav Chakrawarti",
            to:"info@redpositive.in",
            subject:`Table Details`,
            html: htmlContent,
        })
        console.log("Info is", info);
        return  res.status(200).json({
            success: true,
            message:"Mail sent successfully",
        });
        


    }catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message:"Error while sending email"
        })

    }
    

    
}