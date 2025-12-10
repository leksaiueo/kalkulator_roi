"use client";

import { calcROI } from "../lib/calcROI";
import { History, Trash2 } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import HistoryCard from "../assets/HistoryCard";

export default function HistorySection() {
  const { history, removeFromHistory } = calcROI();

  return (
    <div className="mt-8">
      <div className="bg-sky-100 rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <History className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">
              Riwayat Perhitungan
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {history.map((item) => (
              <HistoryCard
                key={item.id}
                item={item}
                onDelete={() => removeFromHistory(item.id)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
