"use client";
import {
  BarChart3,
  Calculator,
  DollarSign,
  TargetIcon,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import StatusForm from "../assets/StatusForm";
import { calcROI } from "../lib/calcROI";
import { formatCurrency, formatNumber } from "../lib/utils";

function hasilROI(value: number) {
  const formatROI = formatNumber(Math.abs(value));
  return value >= 0 ? `+${formatROI}%` : `-${formatROI}%`;
}

function ResultSection() {
  const {
    getResults,
    getRevenue,
    getProfit,
    getROI,
    getMarginPerResult,
    getCprTarget,
  } = calcROI();

  const roi = getROI();
  const revenue = getRevenue();
  const profit = getProfit();
  const results = getResults();
  const cprTarget = getCprTarget();
  const marginPerResult = getMarginPerResult();

  const isProfitable = profit > 0;

  return (
    <div className="bg-sky-100 rounded-2xl shadow-sm p-6">
      <div className="h-full flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Hasil Prediksi</h2>
          </div>
          <p className="text-gray-500 text-sm">
            Berdasarkan parameter kampanye Anda
          </p>
        </div>

        {/* Grafik Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-linear-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-blue-100 font-medium mb-1">
              Laba atas Investasi (ROI)
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-bold">{hasilROI(roi)}</span>
            </div>
            <p className="text-blue-100 mt-2 text-md">
              {roi < 0 ? "Perlu Optimasi" : "Kampanye Menguntungkan"}
            </p>
          </div>

          <svg
            className="absolute bottom-0 right-0 w-full h-32 opacity-20"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
          >
            <path
              d="M0 40 L0 30 Q 20 20 40 30 T 80 20 L 100 10 L 100 40 Z"
              fill="white"
            />
          </svg>
          <TrendingUp className="absolute top-6 right-6 w-6 h-6 text-white opacity-80" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <StatusForm
            icon={<DollarSign className="w-4 h-4 text-blue-600" />}
            label="Pendapatan"
            value={formatCurrency(revenue)}
          />
          <StatusForm
            icon={<TrendingUp className="text-purple-500" />}
            label="Keuntungan"
            value={formatCurrency(profit)}
            valueClassName={isProfitable ? "text-cyan-400" : "text-red-600"}
          />
          <StatusForm
            icon={<TargetIcon className="w-4 h-4 text-purple-600" />}
            label="Jumlah Results"
            value={formatNumber(Math.floor(results))}
          />
          <StatusForm
            icon={<Calculator className="w-4 h-4 text-cyan-600" />}
            label="CPR Target"
            value={formatCurrency(cprTarget)}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-2">
          <div className="flex justify-between items-center py-2 px-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">
                Pendapatan per Result
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {formatCurrency(revenue / (results || 1))}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">Margin per Result</p>
              <p
                className={`text-xl font-bold ${
                  marginPerResult >= 0 ? "text-cyan-400" : "text-red-600"
                }`}
              >
                {formatCurrency(marginPerResult)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultSection;
