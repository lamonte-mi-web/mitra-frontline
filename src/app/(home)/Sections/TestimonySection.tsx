import Image from "next/image"


export default function TestimonySection() {
    return (
        <section className="relative w-full min-h-[700px] my-10">
            <Image
                src="/assets/img/bg-testimony.png"
                alt="Lamonte Logo"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-white/40 z-10" />
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-4">
                <h2 className="text-[3rem] upppercase font-bold text-white mb-3 max-w-3xl">
                    Sukses Bersama Mitra Lamonte
                </h2>
                <video
                    className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
                    controls
                >
                    <source src="/assets/video/video-testimony.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>
        </section>
    )
}