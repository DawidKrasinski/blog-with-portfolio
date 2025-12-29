export default function Quote({ content }: { content: string }) {
  return (
    <div className="p-6 bg-linear-to-br from-cyan-500/10 to-purple-500/10 border-l-4 border-pink-500 rounded-r-xl">
      <p className="italic text-gray-200">{content}</p>
    </div>
  );
}
