import { formatDate } from "../utils/dateUtils";

export const BlogCard = ({ blog }) => (
  <div className="flex flex-col sm:flex-row gap-6 items-center bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
    {/* Blog rasm */}
    <img
      src={blog.image}
      alt={blog.title}
      className="w-full  h-auto sm:w-48 sm:h-32 object-cover"
    />
    
    {/* Blog tafsilotlari */}
    <div className="flex flex-col pr-6">
      {/* Blog sarlavha */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {blog.title}
      </h3>

      {/* Blog qisqacha ma'lumot */}
      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
        {blog.description}
      </p>

      {/* Qo'shimcha ma'lumot */}
      <div className="flex items-center gap-4">
        {/* Sana */}
        <span className="text-gray-500 text-sm">
          {formatDate(blog.date)}
        </span>

        {/* O'qish vaqti (agar mavjud bo'lsa) */}
        {blog.readTime && (
          <span className="text-gray-500 text-sm">
            {blog.readTime} read
          </span>
        )}
      </div>
    </div>
  </div>
);

export default BlogCard;
