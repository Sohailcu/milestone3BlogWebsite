"use client";

import { use, useState } from "react";
import blogs from "./../../data/blogs";
import { notFound } from "next/navigation";

export default function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap the params using `use`
  const { id } = use(params);

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    notFound();
  }

  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleDeleteComment = (index: number) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-gray-100"
      style={{
        backgroundImage: "url('/Images/BG-Makkahb.png')", // Replace with your background image
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen">
        <div className="container mx-auto p-6">
          {/* Blog Title */}
          <h1 className="text-4xl font-extrabold text-center mb-6 text-emerald-400 animate-fade-in">
            {blog.title}
          </h1>

          {/* Blog Content */}
          <p className="text-lg leading-relaxed text-gray-200 bg-gray-800 p-6 rounded-md shadow-md mb-10">
            {blog.content}
          </p>

          {/* Comments Section */}
          <div className="bg-gray-900 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-300">
              Comments
            </h2>

            {/* Add Comment Input */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Add a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="border border-gray-600 rounded-md p-2 w-full bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button
                onClick={handleAddComment}
                className="bg-emerald-500 text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-emerald-600 transition-all duration-300"
              >
                Submit
              </button>
            </div>

            {/* Comments List */}
            <ul className="space-y-4">
              {comments.map((comment, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-800 p-4 rounded-md shadow-md"
                >
                  <span className="text-gray-200">{comment}</span>
                  <button
                    onClick={() => handleDeleteComment(index)}
                    className="text-red-400 hover:text-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
