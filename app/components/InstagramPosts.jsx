"use client";

import { useEffect, useState } from "react";

export default function InstagramPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api");

        const data = await response.json();

        if (response.ok) {
          setPosts(data.data || []);
        }
      } catch (error) {
        console.error("Failed to fetch Instagram posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="aspect-square animate-pulse rounded-xl bg-gray-200"
            />
          ))}
        </div>
      </section>
    );
  }

  if (!posts.length) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black">
            Follow Us on Instagram
          </h2>

          <p className="mt-2 text-gray-500">
            Check out our latest posts.
          </p>  
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {posts.map((post) => (
            <a
              key={post._id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100"
            >
              <img
                src={post.imageUrl}
                alt="Instagram post"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/40">
                <span className="scale-75 rounded-full bg-white px-4 py-2 text-sm font-medium text-black opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                  View Post
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}