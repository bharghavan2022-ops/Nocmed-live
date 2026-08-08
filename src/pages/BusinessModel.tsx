import PageHeader from "../components/PageHeader";
import DisclaimerBanner from "../components/DisclaimerBanner";
import { bmcBlocks, bmcMission, bmcSubtitle, type BmcBlock } from "../data/bmc";

export default function BusinessModel() {
  const wideBlocks = bmcBlocks.filter((b) => b.wide);
  const gridBlocks = bmcBlocks.filter((b) => !b.wide);

  return (
    <div>
      <PageHeader eyebrow="Strategy" title="Business Model Canvas" subtitle={bmcSubtitle}>
        <div className="mt-6 max-w-2xl">
          <DisclaimerBanner compact />
        </div>
      </PageHeader>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gridBlocks.map((b) => (
            <BmcCard key={b.id} block={b} />
          ))}
        </div>

        {wideBlocks.map((b) => (
          <div key={b.id} className="mt-4">
            <BmcCard block={b} />
          </div>
        ))}

        <p className="mt-10 text-center text-sm italic text-slate-400">
          Our mission: {bmcMission}
        </p>
      </section>
    </div>
  );
}

function BmcCard({ block }: { block: BmcBlock }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-baseline gap-2">
        <span className="text-xs font-mono text-teal-300/60">
          {String(block.number).padStart(2, "0")}
        </span>
        <h3 className="text-sm font-semibold text-amber-300">{block.title}</h3>
      </div>

      {block.intro && (
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{block.intro}</p>
      )}

      <div
        className={
          block.wide
            ? "mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
            : "mt-4 space-y-4"
        }
      >
        {block.sections.map((section, i) => (
          <div key={section.heading ?? i}>
            {section.heading && (
              <p className="text-xs font-medium uppercase tracking-wide text-teal-300/70">
                {section.heading}
              </p>
            )}
            <ul className={`space-y-1.5 text-sm text-slate-300 ${section.heading ? "mt-2" : ""}`}>
              {section.items.map((item) => (
                <li key={item} className="leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
