import Layout from '@/components/Layout'
import Image from 'next/image'
import React from 'react'
import {useForm} from 'react-hook-form'

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data) // Handle form submission
  }

  return (
    <Layout>
      <div className="flex flex-col md:flex-row w-full md:w-3/4 md:gap-4 mx-auto my-6 justify-between rounded">
        <div className="md:w-1/4 h-[350px] place-items-center md:m-10 md:ml-20 flex relative justify-center rounded-md shadow">
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
              />
              {errors.email && <p className="text-red-500">Valid email is required</p>}
            </div>
            <div className="flex flex-col">
              <label className="font-bold mb-1">Message</label>
              <textarea
                {...register('message', {required: true})}
                placeholder="Message"
                className="border p-2 h-32 rounded resize-none"
              ></textarea>
              {errors.message && <p className="text-red-500">Message is required</p>}
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
