export function InsightForm({ text }: { text: string }) {
  return (
    <div className="flex gap-3 p-3 bg-blue-50 rounded-lg">
      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}
