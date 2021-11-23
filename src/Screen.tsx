
interface ScreenParams {
  children: string;
  className?: string;
}
export function Screen({ children, className }: ScreenParams) {
  return (
    <div className={"relative bg-gray-100 " + className}>
      <p className="absolute font-mono text-3xl font-bold tracking-widest right-4 bottom-4">
        {children}
      </p>
    </div>
  );
}
