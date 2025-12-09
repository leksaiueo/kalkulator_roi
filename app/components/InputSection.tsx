import { Target } from "lucide-react";
import InputForm from "../assets/InputForm";
import SliderForm from "../assets/SliderForm";

export function InputSection() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full">
      <div className="h-full flex flex-col gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-bold text-gray-900">
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
            value={100000}
          />

          <div className="space-y-3">
            <InputForm
              label="Pengeluaran Iklan Bulanan"
              currency
              type="number"
              value={5000000}
            />
            <SliderForm min={0} max={10000000} step={200000} value={200000} />
          </div>

          <div className="space-y-3">
            <InputForm
              label="Cost per Results (CPR)"
              currency
              type="number"
              value={100000}
            />
            <SliderForm min={0} max={10000000} step={500000} value={500000} />
          </div>

          <InputForm
            label="Harga Produk"
            currency
            type="number"
            value={500000}
          />
        </div>
      </div>
    </div>
  );
}

export default InputSection;
