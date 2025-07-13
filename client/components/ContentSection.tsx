import React from "react";
import { LucideIcon } from "lucide-react";

interface ContentSectionProps {
  title: string;
  icon?: LucideIcon;
  iconColor?: string;
  children: React.ReactNode;
  className?: string;
}

export function ContentSection({
  title,
  icon: Icon,
  iconColor = "text-neon-blue",
  children,
  className = "space-y-4",
}: ContentSectionProps) {
  return (
    <div className={className}>
      <h2 className="text-2xl font-semibold text-foreground flex items-center">
        {Icon && <Icon className={`mr-2 h-5 w-5 ${iconColor}`} />}
        {title}
      </h2>
      {children}
    </div>
  );
}
