export default function StatusForm({
  icon,
  label,
  value,
  valueClassName = "text-gray-900",
}: {
  icon: any;
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-2">
      <div className="px-4 py-2">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <span className="text-sm font-medium text-gray-500">{label}</span>
        </div>
        <p className={`text-2xl font-bold ${valueClassName}`}>{value}</p>
      </div>
    </div>
  );
}
