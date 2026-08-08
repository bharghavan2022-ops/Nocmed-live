interface VideoEmbedProps {
  src?: string;
  poster?: string;
  title?: string;
}

/**
 * Accepts an .mp4 `src` once the team supplies the demo video.
 * Renders a placeholder card until then — no external/live dependency.
 */
export default function VideoEmbed({ src, poster, title = "MET-Agent demo" }: VideoEmbedProps) {
  if (!src) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.03] text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-teal-400/40 bg-teal-400/10">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M8 5v14l11-7-11-7z" fill="currentColor" className="text-teal-300" />
          </svg>
        </div>
        <p className="text-sm text-slate-400">
          Demo video coming soon — drop an <code className="text-teal-300">.mp4</code> in and pass
          it as <code className="text-teal-300">src</code>.
        </p>
      </div>
    );
  }

  return (
    <video
      className="aspect-video w-full rounded-2xl border border-white/10 bg-black"
      controls
      poster={poster}
      title={title}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
