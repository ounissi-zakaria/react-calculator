
interface ScreenParams {
  className?: string;
  equation: string;
  ans: number;
  showResult: boolean;
}
export function Screen({ className, equation, ans, showResult }: ScreenParams) {
  return (
    <div className={"relative bg-gray-100 " + className}>
      <p className={`absolute font-mono font-bold tracking-widest transition-all right-4 ${showResult ? "text-lg bottom-16" : "text-3xl bottom-4"}`} >
        {equation}
      </p>
      <p className={`absolute font-mono font-bold tracking-widest text-3xl bottom-4 right-4 ${showResult ? "transition-all visible" : "invisible"}`} >
        {ans}
      </p>
    </div>
  );
}
