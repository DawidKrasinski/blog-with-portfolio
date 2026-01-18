export default function BulletList({
  header,
  content,
  variant = "cyan",
}: {
  header?: string;
  content: string[];
  variant?: "cyan" | "purple" | "pink";
}) {
  const colors = ["#22d3ee", "#a855f7", "#ec4899"];
  const headerColors = {
    cyan: "text-cyan-400 border-cyan-500",
    purple: "text-purple-400 border-purple-500",
    pink: "text-pink-400 border-pink-500",
  };

  return (
    <div className="space-y-3">
      {header && (
        <h2 className={`text-3xl border-l-4 pl-4 ${headerColors[variant]}`}>
          {header}
        </h2>
      )}

      <ul className="space-y-3 pl-6">
        {content.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span style={{ color: colors[index % colors.length] }}>▹</span>
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
