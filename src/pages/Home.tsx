import { Link } from "react-router-dom";
import DisclaimerBanner from "../components/DisclaimerBanner";

const pillars = [
  {
    title: "Multimodal intake",
    body: "Spoken audio, an uploaded image or lab document, and vital signs — merged into one structured picture of the patient.",
  },
  {
    title: "Graph-grounded reasoning",
    body: "Severity comes from a deterministic lookup against a hand-curated clinical knowledge graph, never a free-form model guess.",
  },
  {
    title: "Hard safety overrides",
    body: "Critical vital-sign thresholds are checked with rule-based logic that can force the correct ESI — never a probabilistic model call.",
  },
  {
    title: "Explainable, spoken output",
    body: "Every score ships with a graph trace, a computed counterfactual, and a grounded narration read aloud in-browser.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-1/4 h-[380px] w-[380px] rounded-full bg-amber-500/10 blur-[110px]"
        />

        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 text-center sm:pt-28">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-teal-300/80">
            Multimodal emergency triage decision support
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            AI translates. <span className="text-amber-300">A graph decides.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            MET-Agent turns spoken conversation, an uploaded image or lab document, and vital
            signs into an Emergency Severity Index score — with a full explainable reasoning
            trace behind every number.
          </p>

          <div className="mx-auto mt-8 max-w-xl">
            <DisclaimerBanner />
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/simulation"
              className="rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-[#0B0E14] shadow-[0_0_30px_-6px_rgba(245,166,35,0.6)] transition-transform hover:scale-[1.02]"
            >
              Launch simulation
            </Link>
            <Link
              to="/how-it-works"
              className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-teal-400/50 hover:text-white"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-teal-400/30"
            >
              <h3 className="text-base font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8">
          <h2 className="text-xl font-semibold text-white">The core design philosophy</h2>
          <p className="mt-3 max-w-3xl text-slate-400">
            AI/ML models only ever translate unstructured input into structured data. They never
            make the clinical decision themselves. The severity score comes from a deterministic
            graph lookup and hard-coded safety thresholds — never a free-form model guess.
          </p>
        </div>
      </section>
    </div>
  );
}
