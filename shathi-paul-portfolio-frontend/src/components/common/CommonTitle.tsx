const CommonTitle = ({ text }: { text: string }) => {
  return (
    <h3
      className={
        "text-3xl md:text-4xl lg:text-5xl text-center tracking-wider mb-6 md:mb-8 lg:mb-16"
      }
    >
      {text}
    </h3>
  );
};

export default CommonTitle;
