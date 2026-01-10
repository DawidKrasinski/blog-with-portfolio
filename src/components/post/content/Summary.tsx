export default function Summary({ summary }: { summary: string }) {
  return (
    <div className="pt-8 border-t border-gray-800">
      <h2 className="text-3xl text-cyan-400 border-l-4 border-cyan-500 pl-4">
        {"Summary"}
      </h2>
      <p className="text-gray-300 text-lg mt-4">{summary}</p>
    </div>
  );
}
