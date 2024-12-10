import { BlogCard } from './BlogCard';
import { formatDate } from '../utils/dateUtils';



export const BlogSection = ({ blogs = [] }) => {

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-start md:items-center mb-4 md:mb-8">
                    <h2 className="md:text-3xl font-bold text-gray-900">Our Blogs</h2>
                    <a
                        href="/blogs"
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                        View all                    </a>
                </div>

                <div className="">
                    <div className='flex flex-col md:flex-row justify-center gap-4 md:h-[40vh] '>
                        <div className="flex w-full md:w-[40%] flex-col gap-6 items-center bg-white rounded-lg  hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={blogs[0].image}
                                alt={blogs[0].title}
                                className="w-full max-h-[60%] object-cover"
                            />

                            <div className="flex-1 pr-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {blogs[0].title}
                                </h3>

                                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                                    {blogs[0].description}
                                </p>

                                <div className="flex items-center gap-4">
                                    <span className="text-gray-500 text-sm">
                                        {formatDate(blogs[0].date)}
                                    </span>

                                    {/* O'qish vaqti (agar mavjud bo'lsa) */}
                                    {blogs[0].readTime && (
                                        <span className="text-gray-500 text-sm">
                                            {blogs[0].readTime} read
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='flex md:w-[60%] flex-col gap-4 '>
                            <BlogCard blog={blogs[1]} />
                            <BlogCard blog={blogs[2]} />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};