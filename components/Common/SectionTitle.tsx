const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: '920px', marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-[rgba(51,65,85,1)] md:text-lg px-8 md:px-20">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
