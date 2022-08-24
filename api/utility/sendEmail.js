import nodemailer from 'nodemailer'

const sendEmail = async (to,subject,text)=>{

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: 'ruvel9143@gmail.com', 
          pass: 'czqsjdjjfnshyrql',
        },
      });

      await transporter.sendMail({
        from: 'ruvel9143@gmail.com', 
        to: to,
        subject: subject,
        text: text, 
      })

}


export default sendEmail
