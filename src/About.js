import React from 'react'
import profileImg from './assets/images/profile.jpg'

export default function About() {
  return (
    <section id="about-me" className="container">
    <div className="row">
        <div className="col-9">
        <h2>About Me</h2>
        <br />
            <p>
                Full Stack Web Developer and graduate of the Columbia University 
                Coding Boot Camp with hands-on experience using HTML, CSS, JavaScript, 
                SQL, and React to build interactive user-focused websites and apps. 
                Experienced in training team members, troubleshooting technical 
                problems, and helping streamline daily procedures from a background 
                in the pharmacy industry. Worked in several groups throughout boot 
                camp to build a variety of web applications, including front end 
                and full stack projects. Leveraged strength with JavaScript and 
                knowledge of ORMs in a full stack project to handle an important 
                part of the backend and assisted partners with linking frontend 
                logic. Strong communicator with a highly logical mind, able to 
                think creatively and adapt new skills quickly.
            </p>
        </div>
        <div className="col-3">
            <img src={profileImg} style= {{ width: "12rem"}}alt="profile picture" />
        </div>
    </div>
</section>  
)
}
