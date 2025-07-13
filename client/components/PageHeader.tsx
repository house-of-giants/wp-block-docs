import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
  title: string;
  description: string;
  badges: {
    text: string;
    variant?: "default" | "secondary" | "outline" | "destructive";
    className?: string;
  }[];
  showSeparator?: boolean;
}

export function PageHeader({
  icon: Icon,
  iconColor = "text-neon-blue",
  iconBgColor = "bg-neon-blue/20",
  title,
  description,
  badges,
  showSeparator = true,
}: PageHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <div className={`p-2 rounded-lg ${iconBgColor}`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-0">{title}</h1>
      </div>

      <p className="text-xl text-muted-foreground">{description}</p>

      <div className="flex flex-wrap gap-2">
        {badges.map((badge, index) => (
          <Badge
            key={index}
            variant={badge.variant || "outline"}
            className={badge.className}
          >
            {badge.text}
          </Badge>
        ))}
      </div>

      {showSeparator && <Separator />}
    </div>
  );
}
