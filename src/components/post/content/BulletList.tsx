export default function BulletList() {
  return (
    <ul className="space-y-3 pl-6">
      <li className="text-gray-300 before:content-['▹'] before:text-cyan-400">
        {"{bullet point}"}
      </li>
      <li className="text-gray-300 before:content-['▹'] before:text-purple-400">
        {"{bullet point}"}
      </li>
      <li className="text-gray-300 before:content-['▹'] before:text-pink-400">
        {"{bullet point}"}
      </li>
    </ul>
  );
}
