export default function Section({
  variant = "cyan",
}: {
  variant?: "cyan" | "purple" | "pink";
}) {
  const colors = {
    cyan: "text-cyan-400 border-cyan-500",
    purple: "text-purple-400 border-purple-500",
    pink: "text-pink-400 border-pink-500",
  };

  return (
    <div className="space-y-4 pt-8">
      <h2 className={`text-3xl border-l-4 pl-4 ${colors[variant]}`}>
        {"{section title}"}
      </h2>
      <p className="text-gray-300 leading-relaxed">{"{section paragraph}"}</p>
    </div>
  );
}
