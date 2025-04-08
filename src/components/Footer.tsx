function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 py-6 dark:border-zinc-800">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-900 dark:text-white">
              TweetSnap
            </span>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} TweetSnap. Open source & free to use.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              Privacy
            </a>
            <a
              href="https://github.com/davidumoru/tweet-image-generator"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
