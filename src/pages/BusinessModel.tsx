import PageHeader from "../components/PageHeader";
import { bmcBlocks } from "../data/bmc";

// Standard 9-block BMC grid placement (CSS grid areas for the classic layout)
const layout = [
  "partnerships partnerships activities value value relationships relationships segments segments",
  "partnerships partnerships resources value value channels channels segments segments",
  "costs costs costs costs costs revenue revenue revenue revenue",
];

export default function BusinessModel() {
  const byId = Object.fromEntries(bmcBlocks.map((b) => [b.id, b]));

  return (
    <div>
      <PageHeader
        eyebrow="Strategy"
        title="Business Model Canvas"
        subtitle="Structure only — most blocks await team input. Nothing here is finalized pricing, partnerships, or market sizing."
      />

      <section className="mx-auto max-w-6xl px-5 pb-24">
        {/* Desktop grid */}
        <div
          className="hidden gap-3 md:grid"
          style={{
            gridTemplateColumns: "repeat(9, minmax(0, 1fr))",
            gridTemplateRows: "repeat(3, auto)",
            gridTemplateAreas: layout.map((row) => `"${row}"`).join(" "),
          }}
        >
          {bmcBlocks.map((b) => (
            <div key={b.id} style={{ gridArea: b.id }}>
              <BmcCell block={byId[b.id]} />
            </div>
          ))}
        </div>

        {/* Mobile stacked */}
        <div className="grid grid-cols-1 gap-3 md:hidden">
          {bmcBlocks.map((b) => (
            <BmcCell key={b.id} block={b} />
          ))}
        </div>
      </section>
    </div>
  );
}

function BmcCell({ block }: { block: (typeof bmcBlocks)[number] }) {
  return (
    <div className="flex h-full min-h-[150px] flex-col rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <h3 className="text-sm font-semibold text-amber-300">{block.title}</h3>
      {block.content ? (
        <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
          {block.content.map((line) => (
            <li key={line} className="leading-snug">
              {line}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm italic text-slate-500">Needs team input.</p>
      )}
      {block.seedNote && (
        <p className="mt-auto pt-3 text-xs leading-snug text-teal-300/60">{block.seedNote}</p>
      )}
    </div>
  );
}
