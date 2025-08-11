'use client'
import CountUp from "react-countup";

export default function StatisticSection() {
    return (
        <section className="relative w-full min-h-[210px] flex items-center justify-center p-4">
            <div className="grid grid-cols-1 max-w-6xl md:grid-cols-4 gap-6 w-full">
                {/* Stat Item 1 */}
                <div className="p-6 bg-white border-2 border-[#FF9000] border-dashed shadow rounded flex flex-col justify-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                    <CountUp
                        end={500000}
                        duration={3}
                        scrollSpyOnce
                        enableScrollSpy
                        suffix="+"
                        className="text-4xl text-[#FF9000] font-bold text-center"
                    />
                    <p className="mt-2 text-gray-600 font-semibold text-center">
                        Produk Terjual
                    </p>
                </div>

                {/* Stat Item 2 */}
                <div className="p-6 bg-white border-2 border-[#FF9000] border-dashed shadow rounded flex flex-col justify-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                    <CountUp
                        end={12}
                        duration={3}
                        enableScrollSpy
                        scrollSpyOnce
                        suffix="+"
                        className="text-4xl text-[#FF9000] font-bold text-center"
                    />
                    <p className="mt-2 text-gray-600 font-semibold text-center">
                        Tahun Pengalaman
                    </p>
                </div>

                {/* Stat Item 3 */}
                <div className="p-6 bg-white border-2 border-[#FF9000] border-dashed shadow rounded flex flex-col justify-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                    <CountUp
                        end={99}
                        duration={3}
                        enableScrollSpy
                        scrollSpyOnce
                        suffix="%"
                        className="text-4xl text-[#FF9000] font-bold text-center"
                    />
                    <p className="mt-2 text-gray-600 font-semibold text-center">
                        Mitra Sukses
                    </p>
                </div>

                {/* Stat Item 4 */}
                <div className="p-6 bg-white border-2 border-[#FF9000] border-dashed shadow rounded flex flex-col justify-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                    <CountUp
                        end={700}
                        duration={3}
                        enableScrollSpy
                        scrollSpyOnce
                        suffix="+"
                        className="text-4xl text-[#FF9000] font-bold text-center"
                    />
                    <p className="mt-2 text-gray-600 font-semibold text-center">
                        Anggota Kemitraan
                    </p>
                </div>
            </div>
        </section>
    );
}
