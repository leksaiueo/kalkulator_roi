import { InputHTMLAttributes } from "react";
import { cn, formatCurrency } from "../lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  currency?: boolean;
}

export default function InputForm({
  label,
  currency,
  className,
  onChange,
  value,
  ...props
}: InputProps) {
  const isEmpty =
    value === "" || value === undefined || value === null || value === 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.startsWith("-")) return;
    if (val === "") {
      onChange?.({ ...e, target: { ...e.target, value: "" } });
      return;
    }
    if (isNaN(Number(val))) return;
    onChange?.({
      ...e,
      target: { ...e.target, value: Number(val) },
    });
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
        className={cn(
          "w-full px-4 py-3 rounded-xl border bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all",
          isEmpty ? "border-red-500" : "border-gray-200",
          className
        )}
        value={isEmpty ? "" : value}
        onChange={handleInputChange}
        {...props}
      />

      {isEmpty && (
        <p className="text-xs text-red-500">Angka tidak boleh kosong</p>
      )}
    </div>
  );
}
