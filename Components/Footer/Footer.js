import React from 'react'
import classes from './Footer.module.css'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';


const Footer = ({ url }) => {

    const motionConfig = {
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-out',
        transitionDelay: '0s',
    };
    return (
        <footer>
            <div>
                <p>jjjjj</p>
            </div>
            <div>
                <p>Simplicity</p>
                <p>Space</p>
            </div>
            <div>
                image.pngimage.pngimage.pngimage.png
            </div>
        </footer>
    )
}

export default Footer