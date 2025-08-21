import MultiStepForm from "./components/MultiStepForm";

export default function MitraForm() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-200 to-white px-4 pt-[80px] pb-12 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Pendaftaran Mitra <span className="text-orange-300">Lamonte</span>
          </h1>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Isi formulir berikut dengan data yang lengkap dan benar untuk memulai kemitraan bersama Lamonte.
          </p>
        </header>

        {/* Form */}
        <MultiStepForm />
      </div>
    </main>
  );
}
