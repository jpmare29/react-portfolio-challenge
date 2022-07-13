import React from 'react'
import resume from './assets/files/Justin_Mare_Fullstack.pdf'

export default function Resume() {
  return (
    <div>
        <a className='btn btn-primary' href={resume} download>
            Download Resume
        </a>
    </div>
  )
}
