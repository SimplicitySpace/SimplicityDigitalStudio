import React, { useEffect, useState } from 'react'
import classes from './Blog.module.css'
import { Link } from 'react-router-dom'

import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';



const Blog = ({ list }) => {
    const [useStyles, setUseStyles] = useState(true)


    const styles = {
        borderBottom: '1px solid black',
        display: 'inline-block'
    }






    return (
        <section className={classes.blogSection}>

            <div className={classes.blogHeader}>
                <h3 style={useStyles ? styles : {}} onMouseEnter={() => setUseStyles(false)} onMouseLeave={() => setUseStyles(true)} className={classes.test}>Blogs</h3>
            </div>


            <div className={classes.newsBlock}>


                {list.map((items) => {
                    return (
                        <Link className={classes.link} to={`/blog/${items.id}`}>
                            <CustomCursor
                                targets={['.link', '.your-css-selector']}
                                customClass='custom-cursor'
                                dimensions={80}
                                fill='#B26C2E'
                                smoothness={{
                                    movement: 0.6,
                                    scale: 1.8,
                                    opacity: 0.8,
                                }}
                                targetOpacity={0.5}
                            />
                            <div key={items.id} className={classes.newsBox}>
                                <img src={items.img} alt='' />
                                <p>{items.title}</p>
                            </div>


                        </Link>
                    )
                })}
            </div>

        </section>
    )
}

export default Blog