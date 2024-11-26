const ContentBody = ({ content }: { content: string }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div
        className="content-body"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
export default ContentBody;
