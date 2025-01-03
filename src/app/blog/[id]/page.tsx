"use client";

import { use, useState } from "react"; // Import `use` for unwrapping
import Image from "next/image"; // Use next/image for optimization
import blogs from "./../../data/blogs";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";

export default function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap the params using `use`
  const { id } = use(params);

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    notFound(); // Redirect to 404 page if blog is not found
  }

  // State for managing comments
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");
  const [editCommentIndex, setEditCommentIndex] = useState<number | null>(null);
  const [editCommentText, setEditCommentText] = useState("");

  // Add new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment(""); // Reset the input
    }
  };

  // Delete comment
  const handleDeleteComment = (index: number) => {
    setComments((prevComments) => prevComments.filter((_, i) => i !== index));
  };

  // Edit comment
  const handleEditComment = (index: number) => {
    setEditCommentIndex(index);
    setEditCommentText(comments[index]);
  };

  // Update comment
  const handleUpdateComment = () => {
    if (editCommentText.trim()) {
      const updatedComments = [...comments];
      updatedComments[editCommentIndex!] = editCommentText; // Update the edited comment
      setComments(updatedComments);
      setEditCommentIndex(null);
      setEditCommentText(""); // Reset input field
    }
  };

  return (
    <>
    <Navbar />
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-gray-100"
      style={{
        backgroundImage: "url('/Images/BG-Makkahb.png')", // Replace with your background image
      }}
    >
      <div className="bg-black bg-opacity-25 min-h-screen">
        <div className="container mx-auto p-6">
          {/* Blog Title */}
          <h1 className="text-3xl font-extrabold text-center mb-6 text-emerald-400 animate-fade-in underline">
            {blog.title}
          </h1>

          {/* Blog Image with next/image for optimization */}
          <div className="flex justify-center mb-6">
            <Image
              src={blog.pic || "/images/default-blog-image.jpg"} // Use a default image if not available
              alt={blog.title}
              width={800} // Ensure width is defined for optimization
              height={450} // Define height to maintain aspect ratio
              className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg" />
          </div>

          {/* Blog Date */}
          <div className="mb-6">
            <p className="text-red-600 font-bold">
              <strong>Published on:</strong> {new Date(blog.updateDate).toLocaleDateString()}
            </p>
            <p className="text-green-600 font-bold">
              <strong>Updated on:</strong> {new Date(blog.updateDate).toLocaleDateString()}
            </p>
          </div>

          {/* Blog Description */}
          <p className="text-lg leading-relaxed text-gray-200 bg-gray-700 p-6 rounded-md shadow-md mb-10">
            <strong>Description:</strong> {blog.description}
          </p>

          {/* Blog Content */}
          <div className="bg-gray-700 p-6 text-lg rounded-md shadow-md mb-10">
            <strong>Content:</strong>
            <ul className="list-disc pl-6 mt-2 text-gray-200 space-y-4">
              {blog.content.split("\n").map((point, index) => (
                <li key={index} className="text-sm">{point}</li>
              ))}
            </ul>
          </div>

          {/* Comments Section */}
          <div className="bg-gray-700 p-6 rounded-md shadow-md mb-4">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-300">Comments</h2>

            {/* Add Comment Input */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Add a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="border border-gray-600 rounded-md p-2 w-full bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
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
                  className="flex justify-between items-center bg-slate-800 p-4 rounded-md shadow-md"
                >
                  <span className="text-gray-200">{comment}</span>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleEditComment(index)}
                      className="text-yellow-400 hover:text-yellow-500 transition duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteComment(index)}
                      className="text-red-400 hover:text-red-600 transition duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Edit Comment Section */}
          {editCommentIndex !== null && (
            <div className="mt-6 bg-gray-800 p-6 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-emerald-300">Edit Comment</h2>
              <input
                type="text"
                value={editCommentText}
                onChange={(e) => setEditCommentText(e.target.value)}
                className="border border-gray-600 rounded-md p-2 w-full bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              <button
                onClick={handleUpdateComment}
                className="bg-emerald-500 text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-emerald-600 transition-all duration-300"
              >
                Update Comment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
