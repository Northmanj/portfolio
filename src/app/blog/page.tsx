// app/blog/page.tsx (App Router)
// OR pages/blog.tsx (Pages Router)
'use client';

import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';

type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
};

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const parser = new Parser();
    const fetchBlogPosts = async () => {
      try {
        const feed = await parser.parseURL('https://cleardroptech.blogspot.com/feeds/posts/default?alt=rss');
        setPosts(feed.items.slice(0, 5) as BlogPost[]);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="min-h-screen px-6 py-12 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">📝 My Blog Posts</h1>
      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post, index) => (
            <div key={index} className="p-6 border border-gray-700 rounded-lg bg-white/5">
              <h2 className="text-xl font-semibold text-blue-300">{post.title}</h2>
              <p className="text-sm text-gray-300">{new Date(post.pubDate).toLocaleDateString()}</p>
              <p className="mt-2 text-gray-100">{post.contentSnippet}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-500 hover:underline"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
