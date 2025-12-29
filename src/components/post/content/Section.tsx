export default function Section({
  variant = "cyan",
  header,
  content,
}: {
  variant?: "cyan" | "purple" | "pink";
  header: string;
  content: string[];
}) {
  const colors = {
    cyan: "text-cyan-400 border-cyan-500",
    purple: "text-purple-400 border-purple-500",
    pink: "text-pink-400 border-pink-500",
  };

  return (
    <div className="space-y-4 pt-8">
      <h2 className={`text-3xl border-l-4 pl-4 ${colors[variant]}`}>
        {header}
      </h2>

      <div className="space-y-3">
        {content.map((paragraph, index) => (
          <p key={index} className="text-gray-300 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
