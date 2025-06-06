import { getPost } from "@/lib/actions/posts.actions";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Suspense } from "react";
import PostWrapper from "@/components/posts/PostWrapper";
import { ArticleSkeleton } from "@/components/skeletons/ArticleSkeleton";

export default async function Post({ params }: { params: { slug: string } }) {
  const serializedSearchParams = JSON.stringify(params.slug);
  return (
    <main className="max-w-5xl 2xl:max-w-7xl mx-auto px-5">
      <Suspense key={serializedSearchParams} fallback={<ArticleSkeleton />}>
        <PostWrapper params={params} />
      </Suspense>
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
