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
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-3xl mx-auto flex justify-between items-center mb-6">
        <div className="text-lg">
          <DateFormatter dateString={date} />
        </div>
        <Avatar name={authorName} picture={authorImage} />
      </div>
    </>
  );
};
export default PostHeader;
