import React, { createContext } from 'react';

const BlogContext = createContext();

export const BLogProvider = ({ children }) => {
  const blogPosts = [{ title: 'Blog Post1' }, { title: 'Blog Post2' }];
  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
