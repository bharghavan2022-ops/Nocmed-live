import PageHeader from "../components/PageHeader";
import DisclaimerBanner from "../components/DisclaimerBanner";
import { techStack, builtFeatures, notBuiltFeatures, evaluationTargets } from "../data/features";

export default function Features() {
  return (
    <div>
      <PageHeader
        eyebrow="What's real"
        title="Features"
        subtitle="An accurate accounting of what was actually built and tested — no overclaiming."
      >
        <div className="mt-6 max-w-2xl">
          <DisclaimerBanner compact />
        </div>
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="text-xl font-semibold text-white">Confirmed working, tested against real inputs</h2>
        <ul className="mt-5 space-y-3">
          {builtFeatures.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 rounded-xl border border-teal-400/20 bg-teal-400/[0.04] p-4 text-sm text-slate-300"
            >
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-300"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4 10l4 4 8-8"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="text-xl font-semibold text-white">Explicitly not built</h2>
        <ul className="mt-5 space-y-3">
          {notBuiltFeatures.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-400"
            >
              <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-500" viewBox="0 0 20 20" fill="none">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="text-xl font-semibold text-white">Tech stack</h2>
        <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <tbody>
              {techStack.map((row, i) => (
                <tr
                  key={row.layer}
                  className={i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}
                >
                  <td className="w-1/3 border-b border-white/5 px-5 py-3 font-medium text-slate-200">
                    {row.layer}
                  </td>
                  <td className="border-b border-white/5 px-5 py-3 text-slate-400">{row.tech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <h2 className="text-xl font-semibold text-white">Evaluation targets</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          These were the original spec's aspirational goals. None of them were formally measured
          during the build — they are shown here as targets only, never as achieved results.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {evaluationTargets.map((t) => (
            <div key={t.metric} className="rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-4">
              <p className="text-sm text-slate-300">{t.metric}</p>
              <p className="mt-1 text-lg font-semibold text-amber-300">{t.target}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-amber-200/60">{t.note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
