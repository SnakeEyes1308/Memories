import React from 'react'

export default function About() {
  return (
    <div className=' min-h-screen flex items-center justify-center'>
      <div className=' max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className=' text-3xl font-semibold text-center my-7'>About Memories Blog</h1>
          <div className=' text-md text-gray-500 flex flex-col gap-6'>
          <p>Memories Blog is a full-stack web application that allows users to create, read, update, and delete blog posts. The front-end is built with React and Tailwind CSS, and the back-end is built with Node.js, Express, and MongoDB. The application is deployed on Heroku and MongoDB Atlas.</p>
          <p> Paragraph-2</p>
          <p>Paragraph-3</p>
          </div>
        </div>
      </div>
    </div>
  )
}
