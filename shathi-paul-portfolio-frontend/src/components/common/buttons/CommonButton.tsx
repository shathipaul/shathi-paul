interface ICommonButton {
  text: string;
  onClick?: () => void;
}

const CommonButton = ({ text, onClick }: ICommonButton) => {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden text-sm font-medium shadow-md rounded-md bg-secondary text-primary border-2 border-primary py-2 px-3 lg:px-6 duration-700 z-30"
    >
      <span className="relative md:inline-flex items-center">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="duration-700 group-hover:[transform:rotateY(360deg)]"
            style={{ transitionDelay: `${index * 0.02}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </button>
  );
};

export default CommonButton;
