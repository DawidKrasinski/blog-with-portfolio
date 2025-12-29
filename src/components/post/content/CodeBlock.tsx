export default function CodeBlock({ content }: { content: string }) {
  return (
    <div className="bg-linear-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-cyan-500/30 shadow-2xl">
      <pre className="font-mono text-sm overflow-x-auto text-gray-300">
        <code>{content}</code>
      </pre>
    </div>
  );
}
