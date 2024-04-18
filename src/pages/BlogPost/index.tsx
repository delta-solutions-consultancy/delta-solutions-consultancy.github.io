import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Container from "../../common/Container";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

interface BlogPostData {
  title: string;
  date: string;
  content: string;
  [key: string]: string;
}

const BlogPostWrapper = styled.div`
  padding: 2rem 0;
`;

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = importBlogPost(slug);

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <Container>
      <BlogPostWrapper>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </BlogPostWrapper>
    </Container>
  );
};

function importBlogPost(slug: string): BlogPostData | null {
  try {
    const content = require(`../../posts/${slug}.md`).default;
    const { data, content: markdownContent } = matter(content);
    return {
      ...data,
      content: markdownContent,
    } as BlogPostData;
  } catch (error) {
    console.error(`Blog post not found: ${slug}`);
    return null;
  }
}

export default BlogPost;