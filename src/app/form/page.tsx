// /form/page.tsx
import Image from "next/image";
import MultiStepForm from "./components/MultiStepForm";
import { supabaseClient } from "@/lib/supabase";


export default async function MitraForm() {
  const { data: mitraTypes, error: mitraError } = await supabaseClient.from("mitra_type").select("id, name");
  const { data: agama, error: agamaError } = await supabaseClient.from("agama").select("id, name");
  const { data: banks, error: banksError } = await supabaseClient.from("bank_list").select("id, name");
  const { data: companies, error: companiesError } = await supabaseClient.from("jenis_perusahaan").select("id, name");
  const { data: csStaff, error: csStaffError } = await supabaseClient.from("cs_staff").select("id, name, phone");
  const { data: channels, error: channelsError } = await supabaseClient.from("lead_channel").select("id, name");
  const { data: sources, error: sourcesError } = await supabaseClient.from("lead_source").select("id, name, channel_id");

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
            agama={agama ?? []}
            banks={banks ?? []}
            companies={companies ?? []}
            csStaff={csStaff ?? []}
            channels={channels ?? []}
            sources={sources ?? []}
          />
        </div>
      </div>
    </main>
  );
}
