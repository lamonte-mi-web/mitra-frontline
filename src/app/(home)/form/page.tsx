// /form/page.tsx
import Image from "next/image";
import MultiStepForm from "./components/MultiStepForm";
import { supabaseAdmin } from "@/lib/supabaseAdmin"; // Corrected import
import { Database, Tables } from "@/types/database.types"; // Import Database and Tables types


export default async function MitraForm() {
  const supabase = supabaseAdmin(); // Corrected usage

  type MitraTypeRow = Tables<'mitra_type'>; // Removed ['Row']
  type JenisPerusahaanRow = Tables<'jenis_perusahaan'>; // Removed ['Row']
  type LeadChannelRow = Tables<'lead_channel'>; // Removed ['Row']
  type LeadSourceRow = Tables<'lead_source'>; // Removed ['Row']
  type CsRow = Tables<'cs'>; // Removed ['Row']

  const { data: mitraTypes, error: mitraError } = await supabase.from("mitra_type").select("id, name, level, description_id, description_en").order('level', { ascending: true });
  const { data: companies, error: companiesError } = await supabase.from("jenis_perusahaan").select("id, name");
  
  // Updated CS Staff fetching
  const { data: rawCsStaff, error: csStaffError } = await supabase
    .from("mitra_type_cs")
    .select(`
      mitra_type_id,
      cs (
        id,
        name,
        number
      )
    `);

  console.log("Raw CS Staff Data:", rawCsStaff); // Log raw data for debugging

  type RawCsStaffItem = {
    mitra_type_id: string;
    cs: CsRow | null; // Explicitly type cs as CsRow or null
  };

  const csStaff: { id: string, name: string, phone: string, mitra_type_id: string }[] = (rawCsStaff as RawCsStaffItem[])?.map(item => ({
    id: item.cs?.id || '', // Access cs object directly
    name: item.cs?.name || '', // Access cs object directly
    phone: item.cs?.number ? String(item.cs.number) : '', // Access cs object directly
    mitra_type_id: item.mitra_type_id,
  })) ?? [];

  console.log("csStaff:", csStaff); // Log raw data for debugging

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
