import { useState } from "react";
import PageHeader from "../components/PageHeader";
import DisclaimerBanner from "../components/DisclaimerBanner";
import { simCases, ocrExample, type SimCase } from "../data/cases";

const severityStyles: Record<SimCase["severity"], { badge: string; ring: string; dot: string }> = {
  critical: {
    badge: "bg-red-500/15 text-red-300 border-red-500/30",
    ring: "border-red-500/30",
    dot: "bg-red-400 shadow-[0_0_10px_2px_rgba(248,113,113,0.6)]",
  },
  urgent: {
    badge: "bg-orange-500/15 text-orange-300 border-orange-500/30",
    ring: "border-orange-500/30",
    dot: "bg-orange-400 shadow-[0_0_10px_2px_rgba(251,146,60,0.6)]",
  },
  moderate: {
    badge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    ring: "border-amber-500/30",
    dot: "bg-amber-400 shadow-[0_0_10px_2px_rgba(245,166,35,0.6)]",
  },
  low: {
    badge: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    ring: "border-teal-500/30",
    dot: "bg-teal-400 shadow-[0_0_10px_2px_rgba(45,212,191,0.6)]",
  },
  minimal: {
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    ring: "border-emerald-500/30",
    dot: "bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.6)]",
  },
};

function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.98;
  window.speechSynthesis.speak(utter);
}

export default function Simulation() {
  const [activeId, setActiveId] = useState(simCases[0].id);
  const active = simCases.find((c) => c.id === activeId)!;
  const style = severityStyles[active.severity];

  return (
    <div>
      <PageHeader
        eyebrow="Interactive"
        title="Workflow simulation"
        subtitle="A scripted replay of real, independently reviewed pipeline outputs — not a live model call. Pick a case to step through what the system actually produced."
      >
        <div className="mt-6 max-w-2xl">
          <DisclaimerBanner compact />
        </div>
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
          {/* Case picker */}
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {simCases.map((c) => {
              const s = severityStyles[c.severity];
              const isActive = c.id === activeId;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveId(c.id)}
                  className={`flex flex-shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors lg:flex-shrink ${
                    isActive
                      ? "border-white/20 bg-white/[0.06] text-white"
                      : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-slate-200"
                  }`}
                >
                  <span className={`h-2 w-2 flex-shrink-0 rounded-full ${s.dot}`} />
                  <span className="whitespace-nowrap lg:whitespace-normal">
                    <span className="block font-medium">{c.label}</span>
                    <span className="text-xs text-slate-500">ESI {c.esi} · {c.esiName}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className={`rounded-2xl border bg-white/[0.03] p-6 sm:p-8 ${style.ring}`}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-semibold ${style.badge}`}>
                  <span className={`h-2 w-2 rounded-full ${style.dot}`} />
                  ESI {active.esi} — {active.esiName}
                </span>
                {active.hardOverride && (
                  <span className="ml-2 inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-300">
                    Hard override: {active.hardOverride}
                  </span>
                )}
              </div>
              <button
                onClick={() => speak(active.narration)}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-teal-400/50 hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M4 8v4h3l4 4V4L7 8H4z" fill="currentColor" className="text-teal-300" />
                </svg>
                Play narration
              </button>
            </div>

            {/* Inputs */}
            {(active.transcriptSample || active.imageFinding || active.vitalsNote) && (
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {active.transcriptSample && (
                  <InputCard label="Transcript sample" value={active.transcriptSample} />
                )}
                {active.imageFinding && (
                  <InputCard
                    label={`${active.imageFinding.modality} finding`}
                    value={active.imageFinding.finding}
                    sub={`concerning: ${active.imageFinding.concerning} · confidence ${active.imageFinding.confidence}`}
                  />
                )}
                {active.vitalsNote && <InputCard label="Vitals" value={active.vitalsNote} />}
              </div>
            )}

            {/* Reasoning trace */}
            <div className="mt-6 space-y-4">
              <TraceRow
                label="Graph signal"
                value={active.graphSignal ?? "No graph matches contributed to this triage."}
              />
              <TraceRow
                label="Narration"
                value={active.narration}
                emphasize
              />
              <TraceRow label="Counterfactual — what would need to change" value={active.counterfactual} />
            </div>
          </div>
        </div>

        {/* OCR example */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <p className="text-sm font-semibold text-white">Also verified: OCR red-flag path</p>
          <p className="mt-2 text-sm text-slate-400">
            {ocrExample.source} containing {ocrExample.extracted} → extracted text triggers a
            red-flag keyword match → concerning: {String(ocrExample.concerning)}, confidence{" "}
            {ocrExample.confidence}.
          </p>
        </div>
      </section>
    </div>
  );
}

function InputCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1.5 text-sm text-slate-200">{value}</p>
      {sub && <p className="mt-1 text-xs text-slate-500">{sub}</p>}
    </div>
  );
}

function TraceRow({ label, value, emphasize }: { label: string; value: string; emphasize?: boolean }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-teal-300/70">{label}</p>
      <p
        className={`mt-1.5 text-sm leading-relaxed ${
          emphasize ? "text-slate-100" : "text-slate-400"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
