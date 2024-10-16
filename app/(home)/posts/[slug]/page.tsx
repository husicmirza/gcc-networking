import PostBody from "@/components/posts/PostBody";
import PostHeader from "@/components/posts/PostHeader";
import { getAllPosts, getPostBySlug } from "@/lib/actions/posts.api";
import markdownToHtml from "@/lib/utils";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export default async function Post({ params: { slug } }: SearchParamProps) {
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main className="container mx-auto px-5">
      <article className="mb-32">
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <PostBody content={content} />
      </article>
    </main>
  );
}

export function generateMetadata({
  params: { slug },
}: SearchParamProps): Metadata {
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Gcc Networking`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
