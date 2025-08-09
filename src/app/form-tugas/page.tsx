import FormTugas from "./components/formTugas";


export default function MitraForm() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-200 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Form Kepuasan Pelanggan <span className="text-orange-300">Lamonte</span>
        </h1>
        <FormTugas/>
      </div>
    </main>
  );
}
