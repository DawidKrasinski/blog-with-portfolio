import { LucideIcon } from "lucide-react";

export function FloatingIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="absolute -top-4 -right-4 bg-cyan-500 text-gray-900 px-4 py-2 rounded-lg shadow-lg shadow-cyan-500/50 animate-bounce">
      <Icon className="w-6 h-6" />
    </div>
  );
}
