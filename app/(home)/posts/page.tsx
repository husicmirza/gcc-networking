import HeroPost from "@/components/posts/HeroPost";
import MoreStories from "@/components/posts/MoreStories";
import { getPosts } from "@/lib/actions/posts.actions";

export default async function Posts() {
  // const allPosts = getAllPosts();
  // const morePosts = allPosts.slice(0, 5);
  const posts = await getPosts();
  return (
    <main className="container mx-auto px-5">
      <HeroPost
        title={posts[0].title}
        coverImage={posts[0].coverImage}
        date={posts[0].$createdAt}
        authorName={posts[0].authorName}
        authorImage={posts[0].authorImage}
        slug={posts[0].slug}
        excerpt={posts[0].excerpt}
      />
      {posts.length > 0 && <MoreStories posts={posts} />}
    </main>
  );
}
