import MultiStepForm from "./components/MultiStepForm";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Pendaftaran Mitra Lamonte
                </h1>
                <MultiStepForm />
            </div>
        </main>
    );
}
