import { useState } from "react";
import PageHeader from "../components/PageHeader";
import DisclaimerBanner from "../components/DisclaimerBanner";
import { pipelineStages, dataContracts, flowDiagram } from "../data/pipeline";

export default function HowItWorks() {
  const [activeContract, setActiveContract] = useState(0);

  return (
    <div>
      <PageHeader
        eyebrow="Architecture"
        title="How it works"
        subtitle="Four stages turn raw intake into a scored, explainable triage recommendation. AI/ML models only ever translate — they never decide."
      >
        <div className="mt-6 max-w-2xl">
          <DisclaimerBanner compact />
        </div>
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <ol className="space-y-4">
          {pipelineStages.map((stage, i) => (
            <li
              key={stage.id}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="text-sm font-mono text-teal-300/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="text-lg font-semibold text-white">{stage.title}</h2>
                    <span className="text-sm text-amber-300/90">{stage.tagline}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{stage.description}</p>
                  <p className="mt-3 text-sm italic leading-relaxed text-teal-200/70">
                    {stage.detail}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="text-xl font-semibold text-white">End-to-end flow</h2>
        <p className="mt-2 text-sm text-slate-400">
          Every stage feeds the next in one deterministic pipeline — no step is skipped or
          reordered.
        </p>
        <pre className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-5 text-xs leading-relaxed text-teal-200/90">
          {flowDiagram}
        </pre>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <h2 className="text-xl font-semibold text-white">Data contracts</h2>
        <p className="mt-2 text-sm text-slate-400">
          The shapes each stage passes to the next — useful if you want to see exactly what
          "structured" means here.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {dataContracts.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setActiveContract(i)}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                activeContract === i
                  ? "bg-teal-400/15 text-teal-300"
                  : "border border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-5 text-xs leading-relaxed text-slate-200">
          {dataContracts[activeContract].shape}
        </pre>
      </section>
    </div>
  );
}
