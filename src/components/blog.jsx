import React from "react";
import Title from "./Title";
import blogPicOne from '../assets/blog-pic.jpg';

  const blogs = [
    {
      id: 1,
      title: "Top 10 Fall Fashion Trends in 2025",
      description:
        "Discover the latest styles and must-have pieces that will dominate this season’s wardrobes.",
      image:
        blogPicOne,
      category: "Fashion",
      date: "Sept 12, 2025",
    },
    {
      id: 2,
      title: "How to Style Casual Wear Like a Pro",
      description:
        "Learn how to make casual outfits look effortlessly stylish with these tips.",
      image:
        "https://images.pexels.com/photos/1386897/pexels-photo-1386897.jpeg",
      category: "Style Guide",
      date: "Sept 10, 2025",
    },
    {
      id: 3,
      title: "Accessorizing 101: Simple Ways to Elevate Your Look",
      description:
        "The right accessories can completely transform your outfit. Here’s how.",
      image:
        "https://images.pexels.com/photos/2221149/pexels-photo-2221149.jpeg",
      category: "Tips",
      date: "Sept 5, 2025",
    },
    // {
    //   id: 4,
    //   title: "Why Sustainable Fashion is the Future",
    //   description:
    //     "Explore why eco-friendly fabrics and conscious shopping are becoming essential.",
    //   image:
    //     "https://images.unsplash.com/photo-1544441893-675973e3198a?auto=format&fit=crop&w=800&q=80",
    //   category: "Sustainability",
    //   date: "Sept 1, 2025",
    // },
  ];

const Blog = () => {


  const [featured, ...rest] = blogs;

  return (
    <div className="my-10 ">
      <div className="text-center py-8 text-3xl">
        <Title text1={"STYLE"} text2={"JOURNAL"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover the latest fashion trends, styling tips, and
          behind-the-scenes looks from our collection.
        </p>
      </div>

     
      {/* Featured + Side Grid */}
      <div className="grid lg:grid-cols-2 gap-8 w-full  xl:w-9/12 my-8 pb-6 mx-auto ">
        {/* Featured Post (Left big card) */}
        <div className=" relative rounded-lg overflow-hidden shadow-lg group h-[800px]">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
            <div className="p-6 text-white">
              <span className="text-sm uppercase tracking-wide text-slate-200 font-medium">
                {featured.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {featured.title}
              </h3>
              <p className="text-gray-200 mb-4">{featured.description}</p>
              <button className="mt-4 px-6 py-3 bg-gold text-slate-200  font-medium text-[0.9rem] hover:bg-primary-blue transition">
                Read More →
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Small Blogs */}
        <div className="flex flex-col gap-8">
          {rest.map((blog) => (
            <div
              key={blog.id}
              className="rounded-xl overflow-hidden border shadow hover:shadow-lg transition group bg-white flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[250px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs uppercase tracking-wide text-yellow-500 font-medium">
                  {blog.category}
                </span>
                <h3 className="mt-2 text-lg font-bold text-gray-800">
                  {blog.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm line-clamp-3 flex-1">
                  {blog.description}
                </p>
                <p className="mt-3 text-xs text-gray-400">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      

    </div>
  );
};

export default Blog;
