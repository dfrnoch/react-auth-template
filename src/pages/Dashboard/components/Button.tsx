interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

// Page specific Component
export default function Button(props: Props) {
  const { children, onClick } = props;
  return (
    <button onClick={onClick} className="mt-2 rounded px-3 py-2 text-white">
      {children}
    </button>
  );
}
