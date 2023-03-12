import React from 'react'
import classes from './MyWork.module.css'

const MyWork = ({ list }) => {
    return (
        <section className={classes.myWork}>
            <h2>My Work</h2>
            <div className={classes.myWorkBlock}>
                {list.map((items) => {
                    return (
                        <div className={classes.myWorkbox}>
                            <img src={items.img} alt='' />
                            <div className={classes.titleBlock}>
                                <h4>{items.title}</h4>
                                <button>{items.type}</button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default MyWork