"use client";

import { calcROI } from "../lib/calcROI";
import { formatCurrency, formatNumber, formatRupiah } from "../lib/utils";
import { InsightForm } from "../assets/InsightForm";

export default function CountSection() {
  const {
    getROI,
    getCprTarget,
    cpr,
    adSpend,
    getResults,
    productPrice,
    aov,
    getMarginPerResult,
  } = calcROI();

  const roi = getROI();
  const cprTarget = getCprTarget();
  const results = getResults();
  const marginPerResult = getMarginPerResult();

  const isInputEmpty =
    productPrice === 0 || adSpend === 0 || cpr === 0 || aov === 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full">
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-gray-900">Wawasan Utama</h3>
        <div className="space-y-3">
          {!isInputEmpty && (
            <>
              <InsightForm
                text={
                  roi < 0
                    ? "Kampanye perlu optimasi. Fokus pada pengurangan CPR atau peningkatan nilai pesanan."
                    : "ROI sangat baik! Kampanye Anda sangat menguntungkan"
                }
              />
              <InsightForm
                text={
                  cprTarget < cpr
                    ? `Pertimbangkan untuk menurunkan CPR Anda untuk meningkatkan profitabilitas. Target CPR sebaiknya sekitar ${Math.floor(
                        (productPrice / cprTarget) * 10
                      )}% dari harga produk.`
                    : ` CPR Anda berada dalam kisaran sehat (${Math.floor(
                        (productPrice / cprTarget) * 10
                      )}% dari harga produk).`
                }
              />
              <InsightForm
                text={`Dengan budget ${formatRupiah(
                  adSpend
                )}, Anda dapat menghasilkan sekitar ${Math.floor(
                  results
                )} results. Setiap result dapat menghasilkan margin ${formatCurrency(
                  marginPerResult
                )}`}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
