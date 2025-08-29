export default function HomeTestimonySection() {
    return (
        <section className="max-w-6xl mx-auto p-6 my-10">
            <div className="flex flex-col justify-center items-center text-center p-4">
                <h2 className="text-4xl capitalize font-bold text-[#FF9000] mb-3 max-w-3xl">
                    Lihat Sendiri Perubahan yang Kami Hadirkan
                </h2>
                <p className="mb-4 text-lg max-w-4xl text-[#166534]">
                    Dari pemula hingga pebisnis sukses, mitra Lamonte membagikan kisah nyata
                    bagaimana mereka mengubah impian menjadi penghasilan.
                </p>
                <p className="mb-4 text-lg max-w-4xl text-[#166534]">
                    Tonton bagaimana sistem dan dukungan kami membantu mereka naik level
                    di bisnis fashion anak.
                </p>

                {/* YouTube embed responsive */}
                <div className="w-full max-w-4xl aspect-video rounded-lg shadow-lg overflow-hidden">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/eCr-ey5_4Y4?si=8yOjS-OMTt0k9M_s"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
