import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start space-y-3 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-800">
      <div className="rounded-md bg-zinc-100 p-2 dark:bg-zinc-700">{icon}</div>
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
}

export default FeatureCard;
