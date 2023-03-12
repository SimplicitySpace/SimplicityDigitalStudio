import React, { useEffect } from 'react'
import classes from './Hero.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {

    useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);

    return (
        <section className={classes.hero}>
            <div className={classes.heroBox}>
                <h1 data-aos="fade-left" data-aos-duration='2500' data-aos-delay='500' className={classes.firstChild}>SIMPLICITY</h1>
                <h1 data-aos="fade-left" data-aos-duration='2800' data-aos-delay='700' className={classes.secondChild}>DIGITAL</h1>
                <h1 data-aos="fade-left" data-aos-duration='2500' data-aos-delay='500' className={classes.thirdChild}>STUDIO</h1>
            </div>
        </section>


    )
}

export default Hero