import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface HistoryItem {
  id: string;
  date: string;
  inputs: {
    productPrice: number;
    adSpend: number;
    cpr: number;
    aov: number;
  };
  results: {
    roi: number;
    revenue: number;
    profit: number;
    results: number;
  };
}

interface ROIState {
  productPrice: number;
  adSpend: number;
  cpr: number;
  aov: number;
  history: HistoryItem[];

  setProductPrice: (value: number) => void;
  setAdSpend: (value: number) => void;
  setCpr: (value: number) => void;
  setAov: (value: number) => void;
  addToHistory: () => void;
  removeFromHistory: (id: string) => void;

  getResults: () => number;
  getRevenue: () => number;
  getProfit: () => number;
  getROI: () => number;
  getMarginPerResult: () => number;
  getCprTarget: () => number;
}

export const calcROI = create<ROIState>()(
  persist(
    (set, get) => ({
      productPrice: 1000,
      adSpend: 1000,
      cpr: 1000,
      aov: 1000,
      history: [],

      setProductPrice: (value) => set({ productPrice: value }),
      setAdSpend: (value) => set({ adSpend: value }),
      setCpr: (value) => set({ cpr: value }),
      setAov: (value) => set({ aov: value }),

      addToHistory: () => {
        const state = get();
        const newItem: HistoryItem = {
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
          inputs: {
            productPrice: state.productPrice,
            adSpend: state.adSpend,
            cpr: state.cpr,
            aov: state.aov,
          },
          results: {
            roi: state.getROI(),
            revenue: state.getRevenue(),
            profit: state.getProfit(),
            results: state.getResults(),
          },
        };
        set((state) => ({ history: [newItem, ...state.history] }));
      },

      removeFromHistory: (id) => {
        set((state) => ({
          history: state.history.filter((item) => item.id !== id),
        }));
      },

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
        const { adSpend, productPrice } = get();
        const results = get().getResults();
        const totalProductCost = productPrice * results;

        return revenue - adSpend - totalProductCost;
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
        return productPrice * 0.3;
      },
    }),
    {
      name: "roi-calculator-storage",
      partialize: (state) => ({ history: state.history }), // Only persist history
    }
  )
);
