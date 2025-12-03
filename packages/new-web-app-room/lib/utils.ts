import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatAddress(address: string): string {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatRiskScore(score: number): {
  level: "Low" | "Medium" | "High" | "Critical";
  color: string;
  bgColor: string;
} {
  if (score < 30) {
    return {
      level: "Low",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    };
  }
  if (score < 50) {
    return {
      level: "Medium",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
    };
  }
  if (score < 75) {
    return {
      level: "High",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
    };
  }
  return {
    level: "Critical",
    color: "text-red-400",
    bgColor: "bg-red-500/20",
  };
}

export function getSeverityColor(severity: string): string {
  switch (severity.toLowerCase()) {
    case "critical":
      return "text-red-400 bg-red-500/20 border-red-500/30";
    case "high":
      return "text-orange-400 bg-orange-500/20 border-orange-500/30";
    case "medium":
      return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30";
    case "low":
      return "text-blue-400 bg-blue-500/20 border-blue-500/30";
    default:
      return "text-gray-400 bg-gray-500/20 border-gray-500/30";
  }
}
