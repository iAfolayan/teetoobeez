import type {NextApiRequest, NextApiResponse} from 'next'
import nodemailer from 'nodemailer'

const sendEmailHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {input, subject, body} = req.body

  const transporter = nodemailer.createTransport({
    port: 465,
    service: 'Gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  try {
    const mailOptions = {
      from: input,
      to: 'teetoobeez@gmail.com',
      //to: 'iafolayanibikunle@gmail.com',
      subject,
      text: body,
      html: body,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    res.status(200).json({message: 'Email sent successfully!'})
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({message: 'Failed to send email>>>>.'})
  } finally {
    transporter.close()
  }
}

export default sendEmailHandler
