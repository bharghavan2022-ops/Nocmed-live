import PageHeader from "../components/PageHeader";
import DisclaimerBanner from "../components/DisclaimerBanner";
import VideoEmbed from "../components/VideoEmbed";

export default function Video() {
  return (
    <div>
      <PageHeader
        eyebrow="Watch"
        title="Demo video"
        subtitle="A walkthrough of the real MET-Agent prototype running locally."
      >
        <div className="mt-6 max-w-2xl">
          <DisclaimerBanner compact />
        </div>
      </PageHeader>

      <section className="mx-auto max-w-4xl px-5 pb-24">
        <VideoEmbed src="/demo.mp4" />
      </section>
    </div>
  );
}
