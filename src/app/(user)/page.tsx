import React from 'react';
import Hero from '@/components/Hero';
import { client } from '../../../sanity/lib/client';
import { groq } from 'next-sanity';
import BlogContent from '@/components/BlogContent';

const query = groq`
  *[_type == 'post']{
  ...,
  author->,
    categories[]->
} | order(_createdAt asc)`;

export default async function Home() {
  const posts = await client.fetch(query);
  return (
    <div>
      <Hero />
      <BlogContent posts={posts} />
    </div>
  );
}
