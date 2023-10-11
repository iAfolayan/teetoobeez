import Layout from '@/components/Layout'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'

const Contact = () => {
  const [emailMessage, setEmailMessage] = useState<string>('')
  const [sending, SetSending] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm()

  useEffect(() => {
    if (emailMessage) {
      const timeout = setTimeout(() => {
        setEmailMessage('')
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [emailMessage])

  const onSubmit = async (data: any) => {
    console.log(data) // Handle form submission
    /* send mail */
    const {name, email, message } = data;
      try {
        SetSending(true)
        const subject = `${name}, contact you from Teetoobeez`
        const input = email
        const body = `
          <p style="display:flex; padding: 5px; text-align: justify">
            ${message}
          </p>`

        // Make a POST request to the serverless function
        await axios.post('/api/sendMail', {input, subject, body})
        setEmailMessage('Email sent successfully!')
        // Clear the form values
        reset() // Reset the form
        SetSending(false)
      } catch (error) {
        console.error('Failed to send email:', error)
        setEmailMessage('Failed to send email')
        SetSending(false)
      } finally {
        SetSending(false)
      }
    }

  return (
    <Layout>
      <div className="flex flex-col md:flex-row w-full md:w-3/4 md:gap-4 mx-auto my-6 justify-between rounded">
        <div className="md:w-2/4 h-[350px] bg-gray-400 place-items-center md:m-10 md:ml-20 flex relative justify-center rounded-md shadow">
          {/* Image column */}
          <Image
            src="/hero-banner.jpg"
            className="object-center shadow p-2"
            fill
            sizes="true"
            priority
            alt="Contact Us"
          />
        </div>
        <div className="w-full md:w-2/4 p-6">
          {/* Form column */}
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col">
              <label className="font-bold mb-1">Name</label>
              <input
                type="text"
                disabled={sending}
                {...register('name', {required: true})}
                className="border p-2 rounded"
              />
              {errors.name && <p className="text-red-500">Name is required</p>}
            </div>
            <div className="flex flex-col">
              <label className="font-bold mb-1">Email</label>
              <input
                type="email"
                {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
                className="border p-2 rounded"
                disabled={sending}
              />
              {errors.email && <p className="text-red-500">Valid email is required</p>}
            </div>
            <div className="flex flex-col">
              <label className="font-bold mb-1">Message</label>
              <textarea
                {...register('message', {required: true})}
                placeholder="Message"
                disabled={sending}
                className='border p-2 h-32 rounded resize-none'
              ></textarea>
              {errors.message && <p className="text-red-500">Message is required</p>}
            </div>
            <div className="flex gap-x-2 items-center">
              <button
                type="submit"
                disabled={sending}
                className='bg-blue-400 hover:bg-blue-700 disabled:cursor-progress text-white px-4 py-2 rounded'
              >
                {sending ? (
                  <span className="flex gap-x-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 animate-spin"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg> Sending...
                  </span>
                ) : (
                  'Get in touch'
                )}
              </button>
                <span className="text-center font-bold">{emailMessage}</span>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
