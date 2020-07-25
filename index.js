const express = require('express');
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv/config");


const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.get('/', ()=>{
    res.send('welcome to my forma');
})

app.post('/api/forma', (req,res)=>{

let data=req.body;

let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
})


let mailOptions = {
    from: data.email,
    to: process.env.EMAIL_TO_SEND,
    subject: `${data.subject}`,
    html: `    
        <h3>Informacje o nadawcy</h3>
            <ul>
                <li>Imię lub nazwa firmy: ${data.name}</li>
                <li>Telefon: ${data.phone}</li>
                <li>Email: ${data.email}</li>    
            </ul> 
        <h3>Wiadomość</h3> 
            <p>${data.text}</p>      
`
};

smtpTransport.sendMail(mailOptions, (error, response)=>{
  
    if(error){
        res.send(error)
    }
    else{
        res.send('Success')
    }

    smtpTransport.close();
})





})


const PORT = process.env.PORT||3001;

app.listen(PORT,()=>{
    console.log(`server listening at port ${PORT}`);
    
})