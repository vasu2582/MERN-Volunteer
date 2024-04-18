import React from "react";
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <section className="hero">
            <div className="banner">
                <h1>Volunteers</h1>
                <h3>Needed</h3>
                <p>
                    Join us in creating positive change. Your donation matters. Together, let's empower communities, support causes, and make a lasting impact. Give now and transform lives for a brighter tomorrow.
                </p>
                <Link to={"/donate"} className="btn">Donate Now</Link>
            </div>
            <div className="banner">
                <img src="/hero.png" alt="hero" />
            </div>
        </section>
    );
}

export default Hero;