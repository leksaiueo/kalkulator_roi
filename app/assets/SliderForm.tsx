import { InputHTMLAttributes } from "react";
import { cn, formatCurrency } from "../lib/utils";

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  currency?: boolean;
}

export default function SliderForm({
  currency,
  value,
  label,
  className,
  onChange,
  min = 0,
  max = 100,
  ...props
}: SliderProps) {
  const isEmpty =
    value === "" || value === null || value === undefined || value === 0;

  const numericValue = isEmpty ? 0 : Number(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.startsWith("-")) return;
    if (val === "") {
      onChange?.({ ...e, target: { ...e.target, value: "" } });
      return;
    }
    if (isNaN(Number(val))) return;
    onChange?.({
      target: { value: String(Number(val)) },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numeric = Number(e.target.value);
    onChange?.({ ...e, target: { ...e.target, value: String(numeric) } });
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center">
        <label className="text-sm font-semibold text-gray-700">{label}</label>

        {currency && !isEmpty && typeof value === "number" && (
          <span className="text-sm font-semibold text-purple-600">
            {formatCurrency(value)}
          </span>
        )}
      </div>

      <input
        type="range"
        className={cn(
          "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600",
          className
        )}
        value={numericValue.toString()}
        onChange={handleSliderChange}
        min={min}
        max={max}
        {...props}
      />

      <input
        className={cn(
          "w-full px-4 py-3 rounded-xl border bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all",
          isEmpty ? "border-red-500" : "border-gray-200",
          className
        )}
        value={isEmpty ? "" : String(value)}
        onChange={handleInputChange}
      />

      {isEmpty && (
        <p className="text-xs text-red-500">Angka tidak boleh kosong</p>
      )}
    </div>
  );
}
