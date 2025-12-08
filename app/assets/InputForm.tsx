import { InputHTMLAttributes } from "react";
import { cn, formatCurrency } from "../lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  subLabel?: string;
  currency?: boolean;
}

export default function InputForm({
  label,
  subLabel,
  currency,
  className,
  value,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center">
        <label className="text-sm font-semibold text-gray-700">{label}</label>
        {currency && typeof value === "number" && (
          <span className="text-sm font-semibold text-purple-600">
            {formatCurrency(value)}
          </span>
        )}
      </div>
      <input
        className={cn(
          "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
          className
        )}
        value={value}
        {...props}
      />
      {subLabel && <p className="text-xs text-gray-500">{subLabel}</p>}
    </div>
  );
}
