import { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Slider({ className, ...props }: SliderProps) {
  return (
    <input
      type="range"
      className={cn(
        "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
        className
      )}
      {...props}
    />
  );
}
