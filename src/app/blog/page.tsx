import Link from 'next/link';
import blogs from './../data/blogs';

export default function BlogList() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Umrah and Hajj Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className="mb-4">
            <Link href={`/blog/${blog.id}`} className="text-blue-600 underline">
              {blog.title}
            </Link>
            <p>{blog.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
