import { Github } from "lucide-react";
import TweetCard from "./TweetCard";

function Hero() {
  const handleGenerateNow = () => {
    console.log("Generate Now button clicked");
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
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-zinc-900 dark:text-white">
                Transform Your Tweets into Beautiful Shareable Images
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-[600px]">
                Create stunning, branded tweet images in seconds. Completely
                free, no sign-up required.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                className="rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 cursor-pointer"
                onClick={handleGenerateNow}
              >
                Generate Now
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
          <div className="mx-auto max-w-lg lg:mx-0 lg:max-w-none">
            <div className="relative">
              <TweetCard
                mode="light"
                name="Sarah Johnson"
                username="@sarahjcodes"
                content="Just launched our new product with @TweetSnap! The response has been incredible. So grateful for all the support from our amazing community. #ProductLaunch #Startup"
                avatar="https://i.pravatar.cc/100?img=9"
                likes={128}
                retweets={42}
              />
              <div className="absolute -bottom-6 -left-6 w-full max-w-[600px] -rotate-2 transition-all duration-500 hover:rotate-0 z-10">
                <TweetCard
                  mode="dark"
                  name="Alex Rivera"
                  username="@alexrdev"
                  content="TweetSnap is a game-changer for content creators. I've increased my engagement by 43% since I started using it for my newsletter highlights! Highly recommend giving it a try."
                  avatar="https://i.pravatar.cc/100?img=10"
                  likes={256}
                  retweets={84}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
