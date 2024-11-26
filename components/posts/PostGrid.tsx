import React from "react";
import Link from "next/link";
import DateFormatter from "./DateFormatter";
import Image from "next/image";

const PostGrid = ({ posts }: { posts: Post[] }) => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-8 my-8 md:my-16 md:grid-cols-2">
        {posts.map((post) => (
          <PostGridItem
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.$createdAt}
            slug={post.slug}
            category={post.category}
          />
        ))}
      </div>
    </section>
  );
};

export default PostGrid;

const PostGridItem = ({
  title,
  coverImage,
  date,
  slug,
  category,
}: PostGridItemProps) => {
  return (
    <div className="lg:flex">
      <Image
        className="object-cover w-full h-56 shadow-sm lg:w-64 rounded-3xl"
        src={coverImage}
        alt=""
        height={500}
        width={500}
      />

      <div className="flex flex-col justify-between py-6 lg:mx-6">
        <p className="text-sm text-blue-500 uppercase mb-1">{category}</p>
        <h3 className="text-2xl mb-3 font-semibold [text-wrap:balance]">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  );
};
