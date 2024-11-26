import { ReactNode } from "react";

const PostTitle = ({ children }: { children?: ReactNode }) => {
  return (
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12">
      {children}
    </h1>
  );
};
export default PostTitle;
