import React from "react";
import { motion } from "framer-motion";
import { calcROI, HistoryItem } from "../lib/calcROI";
import { formatCurrency, formatNumber } from "../lib/utils";

export default function HistoryCard({ item }: { item: HistoryItem }) {
  const isProfitable = item.results.profit > 0;

  const {history, clearHistory} = calcROI();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-4 h-full bg-white rounded-2xl hover:shadow-md transition-shadow border border-gray-100">
        <div className="flex justify-between items-start mb-3">
          <span
            className={`text-xs font-bold px-2 py-1 rounded-full ${
              isProfitable
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            ROI {formatNumber(item.results.roi)}%
          </span>
          <button>

          </button>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Pendapatan</span>
            <span className="font-medium">
              {formatCurrency(item.results.revenue)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Keuntungan</span>
            <span
              className={`font-medium ${
                isProfitable ? "text-green-600" : "text-red-600"
              }`}
            >
              {formatCurrency(item.results.profit)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Ad Spend</span>
            <span className="font-medium">
              {formatCurrency(item.inputs.adSpend)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
