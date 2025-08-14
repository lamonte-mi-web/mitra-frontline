export default function TestimonySection() {
    return (
        <section className="max-w-6xl mx-auto p-6 my-10">
            <div className="flex flex-col justify-center items-center text-center p-4">
                <h2 className="text-4xl uppercase font-bold text-gray-800 mb-3 max-w-3xl">
                    Kisah Sukses Para Mitra Lamonte
                </h2>
                <p className="mb-4 text-xl max-w-5xl text-gray-600">
                    Dengarkan langsung dari mereka yang telah membuktikan kesuksesan bermitra dengan Lamonte. Dari distributor hingga reseller, lihat transformasi bisnis mereka setelah bergabung dengan kami.
                </p>
                <p className="mb-4 text-xl max-w-5xl text-gray-600">
                    Testimoni video ini menampilkan perjalanan nyata mitra kami dari awal memulai hingga meraih omzet signifikan. Saksikan perbedaan "sebelum dan sesudah" bergabung dengan Lamonte dan bagaimana sistem kami mengubah bisnis fashion anak mereka.
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
