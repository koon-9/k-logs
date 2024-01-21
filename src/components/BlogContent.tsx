import React from 'react';
import { Post } from '../../types';
import Container from './Container';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../sanity/lib/client';

interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
  return (
    <Container className="bg-gray-100 py-20 px-10 flex flex-col gap-10">
      {/* {posts.map((post) => (
        <Link href={'/'} key={post?._id}>
          <div>
            <Image src={urlFor(post?.mainImage).url()} width={500} height={500} alt='blog post image' className='absolute top-0 left-0 bg-black w-full h-full group-hover:hidden duration-200' />
          </div>
        </Link>
      ))} */}
    </Container>
  );
};

export default BlogContent;
