import { IconCalendarTime } from "@tabler/icons-react";
import CoverImage from "./CoverImage";
import DateFormatter from "./DateFormatter";
import PostTitle from "./PostTitle";

const PostHeader = ({ title, coverImage, date }: PostHeaderProps) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-12 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-3xl mx-auto flex mb-6 gap-2">
        <div className="flex items-center gap-x-2 whitespace-nowrap">
          <IconCalendarTime className="text-neutral-700 h-6 w-6 flex-shrink-0" />
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};
export default PostHeader;
