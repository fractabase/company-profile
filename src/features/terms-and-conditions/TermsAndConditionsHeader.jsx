import { Icons } from "../../components/common/Icons";
import { Heading } from "../../components/common/Heading";
import { termsAndConditionsMeta } from "../../data/termsAndConditionsData";

export default function TermsAndConditionsHeader() {
  return (
    <>
      <div className="relative mb-12 md:mb-16">
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            <Icons.ShieldCheck className="h-3.5 w-3.5" />
            Dokumen Legal
          </div>

          <p className="mb-2 flex items-center gap-2 text-xs text-secondary-color/60">
            <Icons.Time className="h-4 w-4" />
            Terakhir diperbarui: {termsAndConditionsMeta.lastUpdated}
          </p>

          <Heading
            title={termsAndConditionsMeta.title}
            paragraph={termsAndConditionsMeta.intro}
            paragraphClass="mt-4 text-base leading-relaxed text-secondary-color md:text-lg"
          />
        </div>
      </div>
    </>
  );
}
