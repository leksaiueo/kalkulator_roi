import InputSection from "./components/InputSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg-grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <InputSection />
          </div>
        </div>
      </div>
    </div>
  );
}
