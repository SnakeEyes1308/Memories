import React from 'react'
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function   () {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/post/getPosts');
      const data = await response.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className=' flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className=' text-3xl font-bold lg:text-6xl'>Welcome To Memories Blog</h1>
        <p className=' text-gray-500 text-xs sm:text-sm'>This is a place where we log our memories be it of travel, lifestyle, food revisiting this place is only going to bring back those good o'l memories...</p>
        <Link className=' text-xs sm:text-sm text-teal-500 font-bold hover:underline' to='/search'>
          View All Memories
        </Link>
      </div>
      <div className=' p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>
      <div className=' max-w-8xl mx-auto p-3 flex flex-col gap-8 py-7 px-20'>
         {
          posts && posts.length > 0 && (
            <div className=' flex flex-col gap-6'>
              <h2 className=' text-2xl font-semibold text-center'>Recent Posts</h2>
              <div className=' flex flex-wrap gap-4'>
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />

           ))}
              </div>
              <Link className=' text-lg text-teal-500 hover:underline text-center' to='/search'>
                View All Posts
              </Link>
            </div>
          )
         }
      </div>
    </div>
  )
}
