import { create } from "zustand";

interface ROIState {
  productPrice: number;
  adSpend: number;
  cpr: number;
  aov: number; // Nilai Pesanan Rata-rata

  // Actions
  setProductPrice: (value: number) => void;
  setAdSpend: (value: number) => void;
  setCpr: (value: number) => void;
  setAov: (value: number) => void;

  // Computed (helper functions to get values)
  getResults: () => number;
  getRevenue: () => number;
  getProfit: () => number;
  getROI: () => number;
  getMarginPerResult: () => number;
  getCprTarget: () => number; // Assuming 30% of product price as per image hint
}

export const calcROI = create<ROIState>((set, get) => ({
  productPrice: 50000,
  adSpend: 1500000,
  cpr: 235000,
  aov: 10000,

  setProductPrice: (value) => set({ productPrice: value }),
  setAdSpend: (value) => set({ adSpend: value }),
  setCpr: (value) => set({ cpr: value }),
  setAov: (value) => set({ aov: value }),

  getResults: () => {
    const { adSpend, cpr } = get();
    if (cpr === 0) return 0;
    return adSpend / cpr;
  },

  getRevenue: () => {
    const results = get().getResults();
    const { aov } = get();
    return results * aov;
  },

  getProfit: () => {
    const revenue = get().getRevenue();
    const { adSpend } = get();
    return revenue - adSpend;
  },

  getROI: () => {
    const profit = get().getProfit();
    const { adSpend } = get();
    if (adSpend === 0) return 0;
    return (profit / adSpend) * 100;
  },

  getMarginPerResult: () => {
    const profit = get().getProfit();
    const results = get().getResults();
    if (results === 0) return 0;
    return profit / results;
  },

  getCprTarget: () => {
    const { productPrice } = get();
    // "Target CPR sebaiknya sekitar 30% dari harga produk" based on image text
    return productPrice * 0.3;
  },
}));
