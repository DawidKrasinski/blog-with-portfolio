export function EditorWindow({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-linear-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
      {children}
    </div>
  );
}
