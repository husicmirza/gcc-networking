import HeroPost from "@/components/posts/HeroPost";
import MoreStories from "@/components/posts/MoreStories";
import { getAllPosts } from "@/lib/actions/posts.api";

export default function Posts() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(0, 5);

  return (
    <main className="container mx-auto px-5">
      <HeroPost
        title={heroPost.title}
        coverImage={heroPost.coverImage}
        date={heroPost.date}
        author={heroPost.author}
        slug={heroPost.slug}
        excerpt={heroPost.excerpt}
      />
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </main>
  );
}
