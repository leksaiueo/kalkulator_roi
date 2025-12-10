"use client";

import { Save, Target } from "lucide-react";
import InputForm from "../assets/InputForm";
import SliderForm from "../assets/SliderForm";
import { calcROI } from "../store/calcROI";

export function InputSection() {
  const {
    productPrice,
    setProductPrice,
    adSpend,
    setAdSpend,
    cpr,
    setCpr,
    aov,
    setAov,
    addToHistory,
  } = calcROI();

  const handleSubmit = () => {
    addToHistory();
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full flex flex-col gap-8 overflow-hidden">
      <div className="flex flex-col gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Parameter Kampanye
            </h2>
          </div>
          <p className="text-gray-500 text-sm">
            Sesuaikan parameter kampanye Anda untuk meilhat hasil prediksi
          </p>
        </div>

        <div className="space-y-6">
          <InputForm
            label="Harga Produk"
            currency
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(Number(e.target.value))}
          />

          <div className="space-y-3">
            <SliderForm
              label="Pengeluaran Iklan Bulanan"
              min={0}
              max={50000000}
              step={1000}
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              currency
            />
          </div>

          <div className="space-y-3">
            <SliderForm
              label="Cost per Results (CPR)"
              currency
              min={0}
              max={500000}
              step={1000}
              value={cpr}
              onChange={(e) => setCpr(Number(e.target.value))}
            />
          </div>

          <InputForm
            label="Nilai Pesanan Rata-rata"
            currency
            type="number"
            value={aov}
            onChange={(e) => setAov(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="mt-auto">
        <button
          onClick={handleSubmit}
          className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-[0.98]"
        >
          <Save className="w-5 h-5" />
          Simpan Data Perhitungan
        </button>
      </div>
    </div>
  );
}

export default InputSection;
