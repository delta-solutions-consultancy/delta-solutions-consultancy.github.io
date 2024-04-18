import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../../common/Container";
import matter from "gray-matter";


const BlogWrapper = styled.div`
  padding: 2rem 0;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const BlogList = styled.ul`
  list-style: none;
  padding: 0;
`;

const BlogItem = styled.li`
  margin-bottom: 1.5rem;
`;

const BlogLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 1.8rem;
  transition: color 0.2s;

  &:hover {
    color: #0070f3;
  }
`;

const BlogDate = styled.p`
  color: #666;
  font-size: 1.4rem;
  margin-top: 0.5rem;
`;

const Blog = () => {
  const blogPosts = importBlogPosts();

  return (
    <Container>
      <BlogWrapper>
        <BlogTitle>Blog</BlogTitle>
        <BlogList>
          {blogPosts.map((post) => (
            <BlogItem key={post.slug}>
              <BlogLink to={`/blog/${post.slug}`}>{post.title}</BlogLink>
              <BlogDate>{post.date}</BlogDate>
            </BlogItem>
          ))}
        </BlogList>
      </BlogWrapper>
    </Container>
  );
};
interface BlogPost {
  title: string;
  date: string;
  slug: string;
  [key: string]: string;
}

function importBlogPosts(): BlogPost[] {
  const context = require.context("../../posts", false, /\.md$/) as __WebpackModuleApi.RequireContext;
  const posts = context.keys().map((key: string) => {
    const content = context(key).default;
    const { data } = matter(content);
    const slug = key.replace(/^.*[\\/]/, "").slice(0, -3);
    return {
      ...data,
      slug,
    } as BlogPost;
  });
  return posts;
}

export default Blog;