import { PenTool, Palette, Download } from "lucide-react";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Why Choose TweetSnap?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Everything you need to create beautiful tweet images that stand
              out
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <FeatureCard
            icon={<PenTool className="h-6 w-6 text-zinc-900 dark:text-white" />}
            title="Custom Templates"
            description="Choose from dozens of professionally designed templates or create your own to match your brand."
          />
          <FeatureCard
            icon={<Palette className="h-6 w-6 text-zinc-900 dark:text-white" />}
            title="Brand Colors"
            description="Apply your brand colors with one click. Save color palettes for consistent branding across all your content."
          />
          <FeatureCard
            icon={
              <Download className="h-6 w-6 text-zinc-900 dark:text-white" />
            }
            title="One-Click Export"
            description="Export your images in multiple formats and sizes, optimized for each social platform."
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
