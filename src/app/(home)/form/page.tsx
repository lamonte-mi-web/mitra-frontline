// /form/page.tsx
import Image from "next/image";
import MultiStepForm from "./components/MultiStepForm";
import { supabaseAdmin } from "@/lib/supabaseAdmin";


export default async function MitraForm() {
  const supabase = supabaseAdmin();
  const { data: mitraTypes, error: mitraError } = await supabase.from("mitra_type").select("id, name, level, description_id, description_en").order('level', { ascending: true });
  const { data: companies, error: companiesError } = await supabase.from("jenis_perusahaan").select("id, name");
  const { data: csStaff, error: csStaffError } = await supabase.from("cs_staff").select("id, name, phone, mitra_type_id"); // Added mitra_type_id
  const { data: channels, error: channelsError } = await supabase.from("lead_channel").select("id, name, description_id, description_en");
  const { data: sources, error: sourcesError } = await supabase.from("lead_source").select("id, name, channel_id, description_id, description_en");

  // console.log("mitraTypes", mitraTypes, mitraError);
  // console.log("agama", agama, agamaError);
  // console.log("banks", banks, banksError);
  // console.log("companies", companies, companiesError);
  // console.log("csStaff", csStaff, csStaffError);
  // console.log("channels", channels, channelsError);
  // console.log("sources", sources, sourcesError);
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-200 to-white pb-12">
      <div className="relative min-h-[500px]">

        <Image
          src="/assets/img/bg-cta.png"
          alt="Background CTA Section"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-amber-500/80 z-10" />
        <header className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-6xl font-bold capitalize text-[#3B1F0B] mb-3 max-w-5xl leading-tight">
            Pendaftaran Mitra Lamonte
          </h1>
          <p className="text-[#3B1F0B] font-semibold text-xl max-w-5xl mb-6">
            Isi formulir berikut dengan data yang lengkap dan benar untuk memulai kemitraan bersama Lamonte.
          </p>
        </header>
      </div>
      <div className="flex justify-center my-10">
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
          {/* Form */}
          <MultiStepForm
            mitraTypes={mitraTypes ?? []}
            companies={companies ?? []}
            csStaff={csStaff ?? []}
            channels={channels ?? []}
            leadSources={sources ?? []}
          />
        </div>
      </div>
    </main>
  );
}
