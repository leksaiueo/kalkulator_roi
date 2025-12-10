import InputSection from "./components/InputSection";
import ResultSection from "./components/ResultSection";
import CountSection from "./components/CountSection";
import HistorySection from "./components/HistorySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 font-sans items-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <InputSection />
          </div>

          <div className="lg:col-span-7 gap-4 flex flex-col">
            <ResultSection />
            <CountSection />
          </div>
        </div>
        <HistorySection />
      </div>
    </div>
  );
}
