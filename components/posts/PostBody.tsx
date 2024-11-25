const PostBody = ({ content }: { content: string }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
export default PostBody;
