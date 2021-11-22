interface ButtonParams {
  children: string;
  className?: string;
  onClick: () => void;
}
export function Button({ children, className, onClick }: ButtonParams) {
  return (
    <button className={"font-bold bg-gray-200 hover:bg-gray-300 " + className} onClick={onClick}>
      {children}
    </button>
  );
}
