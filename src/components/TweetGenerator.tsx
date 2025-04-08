import { useState, useRef } from "react";
import {
  Download,
  Copy,
  Check,
  Image,
  Palette,
  Layout,
  Type,
  X,
} from "lucide-react";
import TweetCard from "./TweetCard";
import html2canvas from "html2canvas-pro";

function TweetGenerator() {
  const [formData, setFormData] = useState({
    name: "Sarah Johnson",
    username: "@sarahjcodes",
    content:
      "Just launched our new product with @TweetSnap! The response has been incredible. So grateful for all the support from our amazing community. #ProductLaunch #Startup",
    avatar: "https://i.pravatar.cc/100?img=9",
    likes: 128,
    retweets: 42,
  });

  const [mode, setMode] = useState<"light" | "dark">("light");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("content");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "likes" || name === "retweets" ? parseInt(value) || 0 : value,
    });
  };

  const handleModeToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const handleDownload = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current);
      const link = document.createElement("a");
      link.download = "tweet.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  const handleCopy = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current);
      canvas.toBlob((blob) => {
        if (blob) {
          navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      });
    }
  };

  const handleReset = () => {
    setFormData({
      name: "Sarah Johnson",
      username: "@sarahjcodes",
      content:
        "Just launched our new product with @TweetSnap! The response has been incredible. So grateful for all the support from our amazing community. #ProductLaunch #Startup",
      avatar: "https://i.pravatar.cc/100?img=9",
      likes: 128,
      retweets: 42,
    });
  };

  return (
    <section id="generator" className="w-full py-12 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Tweet Image Generator
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Customize your tweet below and export it as a beautiful image.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Preview Section */}
          <div className="flex flex-col space-y-4">
            <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="mb-4 text-xl font-medium text-zinc-900 dark:text-white">
                Preview
              </h3>
              <div
                ref={cardRef}
                className="flex justify-center p-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg"
              >
                <TweetCard
                  mode={mode}
                  name={formData.name}
                  username={formData.username}
                  content={formData.content}
                  avatar={formData.avatar}
                  likes={formData.likes}
                  retweets={formData.retweets}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleDownload}
                className="flex items-center rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 cursor-pointer gap-2"
              >
                <Download className="h-4 w-4" />
                Download Image
              </button>
              <button
                onClick={handleCopy}
                className="flex items-center rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 cursor-pointer gap-2"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy to Clipboard
                  </>
                )}
              </button>
              <button
                onClick={handleModeToggle}
                className="flex items-center rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 cursor-pointer gap-2"
              >
                <Palette className="h-4 w-4" />
                {mode === "light" ? "Dark Mode" : "Light Mode"}
              </button>
            </div>
          </div>

          {/* Editor Section */}
          <div className="flex flex-col space-y-4">
            <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
              <div className="border-b border-zinc-200 dark:border-zinc-800 mb-4">
                <div className="flex space-x-4">
                  <button
                    onClick={() => setActiveTab("content")}
                    className={`py-2 px-1 -mb-px text-sm font-medium ${
                      activeTab === "content"
                        ? "border-b-2 border-zinc-900 text-zinc-900 dark:border-white dark:text-white"
                        : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Type className="h-4 w-4" />
                      Content
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab("appearance")}
                    className={`py-2 px-1 -mb-px text-sm font-medium ${
                      activeTab === "appearance"
                        ? "border-b-2 border-zinc-900 text-zinc-900 dark:border-white dark:text-white"
                        : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Layout className="h-4 w-4" />
                      Appearance
                    </div>
                  </button>
                </div>
              </div>

              {activeTab === "content" && (
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1 text-left"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1 text-left"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="content"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1 text-left"
                    >
                      Tweet Content
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      rows={4}
                      value={formData.content}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                    />
                  </div>
                </form>
              )}

              {activeTab === "appearance" && (
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="avatar"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1 text-left"
                    >
                      Avatar URL
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        id="avatar"
                        name="avatar"
                        value={formData.avatar}
                        onChange={handleInputChange}
                        className="flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                      />
                      <button
                        type="button"
                        className="rounded-md border border-zinc-300 bg-white p-2 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 cursor-pointer"
                      >
                        <Image className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="likes"
                        className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1 text-left"
                      >
                        Likes
                      </label>
                      <input
                        type="number"
                        id="likes"
                        name="likes"
                        min="0"
                        value={formData.likes}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="retweets"
                        className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1 text-left"
                      >
                        Retweets
                      </label>
                      <input
                        type="number"
                        id="retweets"
                        name="retweets"
                        min="0"
                        value={formData.retweets}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1 text-left">
                      Theme
                    </label>
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        onClick={() => setMode("light")}
                        className={`flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium ${
                          mode === "light"
                            ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                            : "bg-white text-zinc-900 dark:bg-zinc-800 dark:text-white"
                        } cursor-pointer`}
                      >
                        Light
                      </button>
                      <button
                        type="button"
                        onClick={() => setMode("dark")}
                        className={`flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium ${
                          mode === "dark"
                            ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                            : "bg-white text-zinc-900 dark:bg-zinc-800 dark:text-white"
                        } cursor-pointer`}
                      >
                        Dark
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleReset}
                className="flex items-center rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 cursor-pointer gap-2"
              >
                <X className="h-4 w-4" />
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TweetGenerator;
