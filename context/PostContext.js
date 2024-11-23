import React, { createContext, useState } from 'react';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const addPost = (post) => {
        setPosts([...posts, post]);
    };

    const deletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    return (
        <PostContext.Provider value={{ posts, setPosts, addPost, deletePost }}>
            {children}
        </PostContext.Provider>
    );
};

