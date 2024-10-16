import Link from "next/link";
import CoverImage from "./CoverImage";
import DateFormatter from "./DateFormatter";
import Avatar from "./Avatar";
import { IconArrowRight } from "@tabler/icons-react";

type HeroPostProps = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: HeroPostProps) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <div className="flex justify-between items-end">
            <Avatar name={author.name} picture={author.picture} />
            <Link
              href={`/posts/${slug}`}
              className="underline flex items-center pb-2 pr-1 hover:text-neutral-500"
            >
              See More
              <IconArrowRight className="ml-1" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroPost;
