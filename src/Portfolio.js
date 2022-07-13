import React from 'react'
import image1 from './assets/images/project1.jpg'
import image2 from './assets/images/project3.png'
import image3 from './assets/images/project2.jpg'


export default function Portfolio() {
  return (
    <section className="container" id='portfolio'>
            <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image1} alt="" style={{ height: "8rem" }}/>
        <div className="card-body">
            <h5 className="card-title">Recipe Search</h5>
            <p className="card-text">Search for dish or by ingredient available for a variety of recipes.</p>
            <a href="https://jpmare29.github.io/project-1-group-8-columbia/" className="btn">Deployed Site</a>
            <a href="https://github.com/jpmare29/project-1-group-8-columbia" className="btn">Github Repo</a>
          </div>
    </div>
    <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image2} alt="generic texture" style={{ height: "8rem" }}/>
        <div className="card-body">
            <h5 className="card-title">Bibli Studios</h5>
            <p className="card-text">Add movies to your digital collection and find other users with similar tastes.</p>
            <a href="https://desolate-brushlands-50031.herokuapp.com" className="btn">Deployed Site</a>
            <a href="https://github.com/jpmare29/Bibli-Studios" className="btn">Github Repo</a>
          </div>
    </div>
    <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image3} alt="generic texture" style={{ height: "8rem" }} />
        <div className="card-body">
            <h5 className="card-title">Weather Search</h5>
            <p className="card-text">Get the forecast for the week in your city with UV index included.</p>
            <a href="https://jpmare29.github.io/weather-dashboard-api-challenge/" className="btn">Deployed Site</a>
            <a href="https://github.com/jpmare29/weather-dashboard-api-challenge" className="btn">Github Repo</a>
        </div>
    </div>

    </section>  
)
}
