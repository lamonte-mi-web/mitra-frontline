import { OrangeDivider } from "@/components/OrangeDivider";

export default function DeliverySection() {
    return (
        <section className="max-w-6xl mx-auto p-6 my-10">
            <div className="flex flex-col items-center justify-center mb-6">
                <h2 className="text-[2.5rem] font-bold uppercase text-gray-800 leading-snug text-center flex-shrink-0 mb-2">
                    PENGIRIMAN CEPAT keseluruh Indonesia!
                </h2>
                <OrangeDivider className="mb-4" />
                <p className="max-w-3xl text-center text-gray-700 mb-8 px-4 md:px-0">
                    Kami telah bekerjasama dengan berbagai Expedisi untuk memastikan pesanan kamu terkirim dengan cepat dan hemat.
                    <br />
                    <br />
                    Melayani pengiriman ke seluruh Indonesia!
                </p>
            </div>

            {/* Video iframe below the text */}
            <div className="flex justify-center">
                <iframe
                    width="1120"
                    height="630"
                    src="https://www.youtube.com/embed/DwMpK4z11_I"
                    title="Pengiriman Satu Customer Grosir Baju Anak Import Lamonte.id"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="max-w-full"
                ></iframe>
            </div>
        </section>
    );
}
