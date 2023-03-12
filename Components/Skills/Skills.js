import React, { useState, useEffect, useRef } from 'react'
import classes from './Skils.module.css'
const Skills = () => {


    const [scrollPosition, setScrollPosition] = useState(0);
    const [usestyles, setUsestyles] = useState(false)
    const [firstDiv, setFirstDiv] = useState(true)
    const [secondDiv, setsecondDiv] = useState(true)


    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        if (scrollPosition > 1998 && scrollPosition < 3152) {
            setUsestyles(true)
            setsecondDiv(false)


        }
        else if (scrollPosition < 1998) {
            setUsestyles(false)
            // setsecondDiv(false)
            // setFirstDiv(true)
        }

        if (scrollPosition > 3152) {
            setUsestyles(false)
            // setsecondDiv(true)
            setsecondDiv(true)

        }

        // if (usestyles === true) {
        //     setFirstDiv(false)
        // }







        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);



    const styles = {
        position: 'fixed',
        top: '0',
        marginLeft: '80px',
        left: '0',

    }


    return (
        <section className={classes.skillsSection}>
            <div className={classes.leftBox}>

                {firstDiv && <div style={usestyles ? styles : {}} className={classes.leftBoxFlex1} >
                    <h3>Discuss your project idea with me </h3>
                    {/* <div>
                        <button> BOOK A FREE KICK-OFF CALL </button>
                    </div> */}
                    <button className={classes.btn}>Get In Touch</button>
                </div>}
                {secondDiv && <div className={classes.leftBoxFlex2} >
                    <h3>Discuss your project idea with me </h3>
                    <button className={classes.btn}>Get In Touch</button>
                </div>}

            </div>
            <div className={classes.rightBox} >

                <div className={classes.individualBox1}>
                    <h4>Web Designing  {scrollPosition}</h4>
                    <p>First impressions matter, and your website is often the first interaction customers have with your business. Let me help you create a beautiful and visually appealing website that captures your brand and engages your audience. From color palettes to typography, I'll work with you to ensure your website stands out from the crowd. Contact me today to learn more about my web design services.</p>
                </div>
                <div className={classes.individualBox}>
                    <h4>Web Development</h4>
                    <p>Looking for a web developer who can create a fast, responsive, and modern website using ReactJS? You've come to the right place! With my expertise in ReactJS and web development, I can help you build a website that looks great on any device and provides a seamless user experience. From front-end development to server-side programming, I have the skills and knowledge to create a powerful and reliable website that meets your business needs. Contact me today to learn more about my ReactJS web development services.</p>
                </div>
                <div className={classes.individualBox}>
                    <h4>Mobile Development</h4>
                    <p>
                        Effective communication and collaboration are key to any successful project. Whether you're a small business or a large organization, I can work with your team to ensure a seamless and efficient workflow. From project management tools to regular check-ins, I'll keep you updated every step of the way. Let's work together to achieve your goals - contact me today to learn more.
                    </p>
                </div>
                <div className={classes.individualBox}>
                    <h4>Mobile Development {scrollPosition}</h4>
                    <p>Need a mobile app that stands out from the competition? Look no further! With expertise in mobile development and a focus on Flutter, I have the skills and knowledge to build a beautiful and engaging mobile app that your customers will love. From designing intuitive user interfaces to implementing complex features, I can help bring your vision to life. Contact me today to learn more about my Flutter mobile development services.</p>
                </div>
                <div className={classes.individualBox}>
                    <h4>Collaboration</h4>
                    <p>Effective communication and collaboration are key to any successful project. Whether you're a small business or a large organization, I can work with your team to ensure a seamless and efficient workflow. From project management tools to regular check-ins, I'll keep you updated every step of the way. Let's work together to achieve your goals - contact me today to learn more.

                        {scrollPosition}
                    </p>
                </div>
            </div>

        </section >
    )

}

export default Skills