import React from 'react'
import HomeCard from '../../features/Cards/HomeCard'
import './Home.css'

const Home = () => {
    return (
        <div className="homeMain">

            <div className="homeContent">
                <h1>פורטל לימודים</h1>
                פורום זה מאפשר לכל תלמיד להביע את דעתו, להעלות שאלות והצעות, להתייעץ, להחליף חוויות, לתת טיפים וכל מה שקשור ללימודים ועבודה ולהכנה אליה. אנחנו נשתדל לעזור לכם למצוא את התשובות לכל השאלות
            </div>
            <HomeCard />
        </div>
    )
}

export default Home
