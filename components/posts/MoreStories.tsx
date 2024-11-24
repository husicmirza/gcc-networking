import { Card, Carousel } from "../ui/carousel-cards";
import PostPreview from "./PostPreview";

const MoreStories = ({ posts }: { posts: Post[] }) => {
  const renderPostPreview = (post: Post) => (
    <PostPreview
      title={post.title}
      coverImage={post.coverImage}
      date={post.$createdAt}
      authorName={post.authorName}
      authorImage={post.authorImage}
      slug={post.slug}
      excerpt={post.excerpt}
    />
  );
  const carouselItems = posts.map((post, index) => (
    <Card index={index} key={post.slug}>
      {renderPostPreview(post)}
    </Card>
  ));
  return (
    <section>
      <div className="py-10">
        <h2 className="mb-4 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
          Latest Blog Posts
        </h2>
        <div className="mb-32 hidden sm:block">
          <Carousel items={carouselItems} />
        </div>
        <div className="mb-32 sm:hidden gap-y-20 grid grid-cols-1">
          {posts.map((post) => (
            <div key={post.slug}>{renderPostPreview(post)}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MoreStories;
