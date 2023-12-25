import React from 'react';
import styles from './Blog.module.css'

const Blog = () => {
    return (
        <div>
            <p className={`${styles.title} text-6xl font-bold`}>this is blog</p>
        </div>
    );
};

export default Blog;