import { Icons } from "../../components/common/Icons";
import { Heading } from "../../components/common/Heading";
import { privacyPolicyMeta } from "../../data/privacyPolicyData";

export default function PrivacyPolicyHeader() {
  return (
    <>
      <div className="mb-10 md:mb-14">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
          <Icons.ShieldCheck className="h-3.5 w-3.5" />
          Dokumen Legal
        </div>

        <p className="mb-2 flex items-center gap-2 text-xs text-secondary-color/60">
          <Icons.Time className="h-4 w-4" />
          Terakhir diperbarui: {privacyPolicyMeta.lastUpdated}
        </p>

        <Heading
          title={privacyPolicyMeta.title}
          paragraph={privacyPolicyMeta.intro}
          titleClass="max-w-3xl"
          paragraphClass="mt-4 text-base leading-relaxed text-secondary-color md:text-lg"
        />
      </div>
    </>
  );
}
