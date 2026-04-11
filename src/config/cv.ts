/**
 * Konfigurasi file CV untuk tombol Download CV.
 *
 * Cara ganti file CV:
 * 1. Letakkan file CV (PDF) ke dalam folder: /public/cv/
 * 2. Ubah nilai `file` di bawah sesuai nama file yang ingin didownload.
 *
 * Contoh: jika file ada di /public/cv/Rangga_CV_2025.pdf
 * maka isi file: "Rangga_CV_2025.pdf"
 */
export const CV_CONFIG = {
  /** Nama file CV di folder /public/cv/ */
  file: "cv.pdf",

  /** Nama file saat didownload oleh pengguna */
  downloadAs: "Rangga_Putra_CV.pdf",
};
