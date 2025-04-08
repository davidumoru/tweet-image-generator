import { ArrowRight, Github } from "lucide-react";

function CTASection() {
  const handleTryItNow = () => {
    console.log("Try It Now button clicked");
    const generatorElement = document.getElementById("generator");
    if (generatorElement) {
      generatorElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStarOnGithub = () => {
    console.log("Star on GitHub button clicked");
    window.open(
      "https://github.com/davidumoru/tweet-image-generator",
      "_blank"
    );
  };

  return (
    <section className="w-full py-12 md:py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Ready to Transform Your Tweets?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Start creating beautiful tweet images instantly. No sign-up, no
              login, completely free.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              className="rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 flex items-center justify-center gap-2 cursor-pointer"
              onClick={handleTryItNow}
            >
              Try It Now
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              className="rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 flex items-center justify-center gap-2 cursor-pointer"
              onClick={handleStarOnGithub}
            >
              <Github className="h-4 w-4" />
              Star on GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
