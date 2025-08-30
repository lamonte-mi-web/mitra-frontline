/**
 * This function translates raw Supabase/Postgres errors into user-friendly
 * Indonesian messages.
 * @param {any} error - The error object from Supabase.
 * @returns {string} A user-friendly error message in Bahasa Indonesia.
 */
export function translateSupabaseError(error: any): string {
    // Get the core error message string.
    const errorMessage = error?.message || "Terjadi kesalahan yang tidak diketahui.";

    // --- Handle Unique Constraint Violations ---
    // This is for errors like "duplicate key value violates unique constraint".
    if (errorMessage.includes("violates unique constraint")) {
        if (errorMessage.includes('"mitra_personal_no_wa_key"')) {
            return "Nomor WhatsApp ini sudah terdaftar. Silakan gunakan nomor lain atau hubungi CS kami.";
        }
        if (errorMessage.includes('"mitra_personal_email_key"')) {
            return "Alamat email ini sudah terdaftar. Silakan gunakan email lain.";
        }
        if (errorMessage.includes('"mitra_personal_nik_ktp_key"')) {
            return "NIK KTP ini sudah terdaftar di sistem kami.";
        }
        // A general fallback for other duplicate data errors.
        return "Data yang Anda masukkan sudah ada di sistem kami. Harap periksa kembali isian Anda.";
    }

    // --- Handle Function Not Found Errors ---
    // This handles the error we troubleshooted earlier.
    if (errorMessage.includes("Could not find the function")) {
        return "Terjadi kesalahan pada sistem [Kode: FNF]. Tim kami sedang memperbaiki. Mohon coba beberapa saat lagi.";
    }

    // You can add more specific checks for other errors here.
    // ...

    // --- Default Fallback Message ---
    // If the error doesn't match any of the above, show a generic message.
    return "Terjadi kesalahan pada server. Silakan coba lagi nanti atau hubungi customer service jika masalah berlanjut.";
}