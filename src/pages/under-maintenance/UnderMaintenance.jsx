import { useEffect } from "react";
import UnderMaintenanceSection from "../../features/under-maintenance/UnderMaintenanceSection";

/**
 * UnderMaintenance Page
 *
 * Halaman placeholder untuk rute yang sudah direncanakan namun masih dalam tahap pengembangan.
 * Bukan halaman error/404 — tone: "sedang kami bangun", bukan "ada yang rusak".
 *
 * Mengikuti pola semua halaman lain di project ini:
 *   - Merender <main> dengan isolasi stacking context
 *   - Menyusun section penyusun (UnderMaintenanceSection)
 *   - Memiliki scroll-to-top effect saat dimuat
 */
export default function UnderMaintenance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative isolate flex w-full flex-col overflow-hidden">
      <UnderMaintenanceSection />
    </main>
  );
}
