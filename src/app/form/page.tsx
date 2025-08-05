import MultiStepForm from "./components/MultiStepForm";

export default function MitraForm() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-200 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Pendaftaran Mitra <span className="text-orange-300">Lamonte</span>
        </h1>
        <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
          Isi formulir berikut dengan data yang lengkap dan benar untuk memulai kemitraan bersama Lamonte.
        </p>
        <MultiStepForm />
      </div>
    </main>
  );
}
