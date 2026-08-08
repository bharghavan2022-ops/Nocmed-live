interface DisclaimerBannerProps {
  compact?: boolean;
}

export default function DisclaimerBanner({ compact = false }: DisclaimerBannerProps) {
  if (compact) {
    return (
      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
        <span className="font-semibold text-amber-300">Hackathon prototype</span> — not validated
        clinical software.
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-5 py-4 shadow-[0_0_24px_-8px_rgba(245,166,35,0.35)]">
      <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
        Hackathon prototype — not validated clinical software
      </p>
      <p className="mt-1 text-sm text-amber-100/80">
        MET-Agent was built in a 24-hour hackathon. It has not undergone clinical validation, has
        no FDA clearance, and has never been used in a real-world deployment. Nothing on this site
        is medical advice.
      </p>
    </div>
  );
}
