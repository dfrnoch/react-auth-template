interface Props {
  width: string;
  height: string;
}

// Global Component
export default function LoadingProps({ width, height }: Props) {
  if (width === "rnd") width = `${Math.floor(Math.random() * 3) + 3}rem`;

  return (
    <div
      className={`bg-slate-700 rounded animate-pulse`}
      style={{ width: width, height: height }}
    ></div>
  );
}

LoadingProps.defaultProps = {
  width: "3rem",
  height: "1rem",
};
