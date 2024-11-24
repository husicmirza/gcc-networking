import PostBody from "@/components/posts/PostBody";
import PostHeader from "@/components/posts/PostHeader";
import { getPost } from "@/lib/actions/posts.api";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export default async function Post({ params: { slug } }: SearchParamProps) {
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className="container mx-auto px-5">
      <article className="mb-32">
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.$createdAt}
          authorName={post.authorName}
          authorImage={post.authorImage}
        />
        <PostBody content={post.content} />
      </article>
    </main>
  );
}

export async function generateMetadata({
  params: { slug },
}: SearchParamProps): Promise<Metadata> {
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Gcc Networking`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage],
    },
  };
}
