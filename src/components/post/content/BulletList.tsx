export default function BulletList({ content }: { content: string[] }) {
  const colors = ["#22d3ee", "#a855f7", "#ec4899"];

  return (
    <ul className="space-y-3 pl-6">
      {content.map((item, index) => (
        <div key={index} className="flex gap-2">
          <span
            style={{
              color: colors[index % colors.length],
            }}
          >
            ▹
          </span>
          <span key={index} className={`text-gray-300`}>
            {item}
          </span>
        </div>
      ))}
    </ul>
  );
}
