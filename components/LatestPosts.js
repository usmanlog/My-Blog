import Post from "./Post";

export default function LatestPosts({ posts }) {
  return (
    <section className="font-poppins sm:w-full w-[96%] sm:max-w-screen-xl shadow-lg shadow-gray-500 rounded my-16 pb-10 mx-auto transition-all ease-in duration-300">
      <p className="sm:text-3xl text-2xl ml-6 font-bold">
        Latest Blog Posts<span className="tracking-widest">...</span>
      </p>

      <div className="flex flex-col lg:flex-row flex-wrap sm:p-10 items-center lg:items-start px-1">
        {posts.map((post, idx) => (
          <Post
            key={idx}
            title={post.frontMatter.title}
            category={post.frontMatter.category}
            date={post.frontMatter.date}
            description={post.frontMatter.excerpt}
            image={post.frontMatter.cover_image}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
}
