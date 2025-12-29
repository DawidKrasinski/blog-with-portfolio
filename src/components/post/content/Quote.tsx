export default function Quote({ content }: { content: string[] }) {
  return (
    <div className="p-6 bg-linear-to-br from-cyan-500/10 to-purple-500/10 border-l-4 border-pink-500 rounded-r-xl space-y-2">
      {content.map((paragraph, index) => (
        <p key={index} className="italic text-gray-200">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
