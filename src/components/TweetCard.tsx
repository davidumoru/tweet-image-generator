import { Heart, MessageCircle, Share2 } from "lucide-react";

interface TweetCardProps {
  mode?: "light" | "dark";
  name: string;
  username: string;
  content: string;
  avatar: string;
  likes: number;
  retweets: number;
}

function TweetCard({
  mode = "light",
  name,
  username,
  content,
  avatar,
  likes,
  retweets,
}: TweetCardProps) {
  return (
    <div
      className={`w-full overflow-hidden transition-all duration-300 rounded-lg border shadow-sm ${
        mode === "dark"
          ? "bg-zinc-900 text-white border-zinc-800"
          : "bg-white text-zinc-900 border-zinc-200"
      }`}
    >
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <img
              src={avatar || "/placeholder.svg"}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-1">
              <p className="font-semibold">{name}</p>
              <p
                className={`text-sm ${
                  mode === "dark" ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                {username}
              </p>
            </div>
            <p className="text-base leading-relaxed">{content}</p>
            <div className="flex items-center pt-2 space-x-6">
              <div className="flex items-center space-x-1">
                <Heart
                  className={`h-4 w-4 ${
                    mode === "dark" ? "text-zinc-400" : "text-zinc-500"
                  }`}
                />
                <span
                  className={`text-xs ${
                    mode === "dark" ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  {likes}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle
                  className={`h-4 w-4 ${
                    mode === "dark" ? "text-zinc-400" : "text-zinc-500"
                  }`}
                />
                <span
                  className={`text-xs ${
                    mode === "dark" ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  {retweets}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Share2
                  className={`h-4 w-4 ${
                    mode === "dark" ? "text-zinc-400" : "text-zinc-500"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
