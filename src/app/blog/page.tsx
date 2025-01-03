/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image"; // Import next/image
import blogs from "./../data/blogs";

export default function BlogList() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Umrah and Hajj Blogs</h1>

      <ul className="space-y-6">
        {blogs.map((blog) => (
          <li key={blog.id} className="border-b pb-6">
            <Link href={`/blog/${blog.id}`}>
              <a className="text-blue-600 text-xl font-semibold hover:underline">{blog.title}</a>
            </Link>

            <p className="text-gray-700 mt-2">{blog.description}</p>

            {/* Display content in a point-wise manner */}
            <ul className="list-disc pl-6 mt-4 text-gray-700">
              {blog.content.split("\n").map((point, index) => (
                <li key={index} className="mt-2">{point}</li>
              ))}
            </ul>

            {/* Display the update date */}
            <p className="text-gray-500 text-sm mt-4">Last updated: {blog.updateDate}</p>

            {/* Image size control and optimization using next/image */}
            <div className="mt-4">
              <Image
                src={blog.pic}
                alt={blog.title}
                width={800} // Set width
                height={450} // Set height
                className="w-full md:w-1/2 mx-auto rounded-lg shadow-md"
                style={{ objectFit: "cover" }} // Ensure cover image behavior
                priority={false} // You can toggle this for specific use cases
              />
            </div>

            <div className="mt-4">
              <Link href={`/blog/${blog.id}`}>
                <a className="text-blue-500 font-semibold hover:underline">Read more...</a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
