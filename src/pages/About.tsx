import PageHeader from "../components/PageHeader";
import DisclaimerBanner from "../components/DisclaimerBanner";

export default function About() {
  return (
    <div>
      <PageHeader eyebrow="Context" title="About & team" />

      <section className="mx-auto max-w-3xl px-5 pb-24">
        <DisclaimerBanner />

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-slate-400">
          <p>
            MET-Agent is a prototype built during a 24-hour hackathon. It explores whether a
            multimodal intake pipeline — spoken audio, an uploaded image or lab document, and
            vital signs — can be turned into an Emergency Severity Index score with a fully
            explainable, graph-grounded reasoning trace.
          </p>
          <p>
            The guiding design decision, repeated throughout this site, is that AI/ML models are
            used only to translate unstructured input into structured data. They never make the
            clinical decision themselves — that comes from a deterministic knowledge-graph lookup
            and hard-coded safety thresholds.
          </p>
          <p>
            This website is a separate, informational companion to the product. It does not run
            the product's real backend: the local vision-language model, local speech-to-text, and
            in-memory knowledge graph all require a GPU-backed machine and are not deployed here.
            Everything interactive on this site — the workflow simulation in particular — replays
            real, already-computed, independently reviewed outputs rather than calling a live
            model.
          </p>
          <p>
            MET-Agent has not undergone clinical validation, has no regulatory clearance, and has
            never been used in a real-world deployment. It is a hackathon prototype, not
            validated clinical software.
          </p>
        </div>
      </section>
    </div>
  );
}
