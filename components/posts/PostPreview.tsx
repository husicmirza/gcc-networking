import Link from "next/link";
import CoverImage from "./CoverImage";
import DateFormatter from "./DateFormatter";
import Avatar from "./Avatar";
import { IconArrowRight } from "@tabler/icons-react";

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  authorName,
  authorImage,
  slug,
}: PostPreviewProps) => {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-2xl mb-3 font-semibold [text-wrap:balance]">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-sm md:text-lg leading-relaxed mb-4 flex-grow [text-wrap:balance]">
        {excerpt.length > 258 ? `${excerpt.slice(0, 258)}..` : excerpt}
      </p>
      <div className="flex justify-between items-end mt-auto">
        <Avatar name={authorName} picture={authorImage} />
        <Link
          href={`/posts/${slug}`}
          className="underline flex items-center pb-2 pr-1 hover:text-neutral-500"
        >
          See More
          <IconArrowRight className="ml-1" size={20} />
        </Link>
      </div>
    </div>
  );
};
export default PostPreview;
