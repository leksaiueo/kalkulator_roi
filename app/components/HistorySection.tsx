"use client";

import { calcROI } from "../lib/calcROI";
import { History, Trash2 } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import HistoryCard from "../assets/HistoryCard";

export default function HistorySection() {
  const { history, clearHistory } = calcROI();

  if (history.length === 0) {
    return null;
  }

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
          <button
            onClick={clearHistory}
            className="bg-white rounded-2xl text-sm text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors p-3"
          >
            <Trash2 className="w-4 h-4" />
            Hapus Riwayat Seluruhnya
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {history.map((item) => (
              <HistoryCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
