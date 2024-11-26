import Link from "next/link";
import DateFormatter from "./DateFormatter";
import Avatar from "./Avatar";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

type HeroPostProps = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  authorName: string;
  authorImage: string;
  slug: string;
};

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  authorName,
  authorImage,
  slug,
}: HeroPostProps) => {
  return (
    <section>
      <div className="py-10 mx-auto">
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <Image
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            src={coverImage}
            width={1300}
            height={630}
            alt="hero-post"
          />
          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <p className="text-sm text-blue-500 uppercase mb-1">Category</p>
            <h1 className="mt-4 text-2xl font-semibold [text-wrap:balance]">
              <Link href={`/posts/${slug}`} className="hover:underline ">
                {title}
              </Link>
            </h1>
            <p className="my-3 text-sm text-neutral-700  md:text-lg leading-relaxed [text-wrap:balance]">
              {excerpt.length > 258 ? `${excerpt.slice(0, 258)}..` : excerpt}
            </p>
            <div className="flex justify-between items-center">
              <DateFormatter dateString={date} />
              <Link
                href={`/posts/${slug}`}
                className="underline flex items-center pb-2 pr-1 hover:text-neutral-500"
              >
                See More
                <IconArrowRight className="ml-1" size={20} />
              </Link>
            </div>
            <div className="mt-4">
              <Avatar name={authorName} picture={authorImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroPost;
