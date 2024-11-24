import Avatar from "./Avatar";
import CoverImage from "./CoverImage";
import DateFormatter from "./DateFormatter";
import PostTitle from "./PostTitle";

type PostHeaderProps = {
  title: string;
  coverImage: string;
  date: string;
  authorName: string;
  authorImage: string;
};

const PostHeader = ({
  title,
  coverImage,
  date,
  authorName,
  authorImage,
}: PostHeaderProps) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={authorName} picture={authorImage} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={authorName} picture={authorImage} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};
export default PostHeader;
