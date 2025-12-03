import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatRiskScore(score: number): string {
  if (score < 30) return "Low Risk";
  if (score < 50) return "Medium Risk";
  if (score < 75) return "High Risk";
  return "Critical Risk";
}

export function getRiskColor(score: number): string {
  if (score < 30) return "text-green-400";
  if (score < 50) return "text-yellow-400";
  if (score < 75) return "text-orange-400";
  return "text-red-400";
}

export function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString();
}

export function truncateAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
