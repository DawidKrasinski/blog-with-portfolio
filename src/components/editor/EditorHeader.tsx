import { WindowControls } from "./WindowControls";

export function EditorHeader({ filename }: { filename: string }) {
  return (
    <div className="flex items-center gap-2 pb-4 border-b border-gray-700">
      <WindowControls />
      <span className="ml-4 text-gray-500">{filename}</span>
    </div>
  );
}
