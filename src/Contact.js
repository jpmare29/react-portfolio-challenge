import React from 'react'
import linkedin from './assets/images/LI-In-Bug.png'

export default function Contact() {
  return (
    <div id="contact">
    <div>
        <h2>Email</h2>
        <a href="mailto: jpmare29@gmail.com">jpmare29@gmail.com</a>
    </div>

    <div>
        <h2>LinkedIn</h2>
        <a href="https://www.linkedin.com/in/jpmare29/"><img src={linkedin} style={{ width: "3rem" }}/></a>
    </div>
</div>  
)
}
