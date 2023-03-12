import React from 'react'
import { useParams } from 'react-router-dom'
import classes from './Blog.module.css'

const BlogContent = ({ lists }) => {

    const { id } = useParams();

    const list = lists.find((blog) => blog.id === id);

    return (
        <section className={classes.blogSection}>
            <div className={classes.blogBox}>
                <h2>{list.title}</h2>
                <div className={classes.imgBox}>
                    <img className={classes.blogImg} src={list.img} alt='' />
                    <div>
                        <h3>{list.sections[0].heading}</h3>
                        <p>{list.sections[0].content}</p>
                    </div>
                    <div>
                        <h3>{list.sections[1].heading}</h3>
                        <p>{list.sections[1].content}</p>
                    </div>
                    <div>
                        <h3>{list.sections[2].heading}</h3>
                        <p>{list.sections[2].content}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogContent