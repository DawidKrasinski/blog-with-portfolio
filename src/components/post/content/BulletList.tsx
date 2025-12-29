export default function BulletList({ content }: { content: string[] }) {
  const colors = ["#22d3ee", "#a855f7", "#ec4899"];

  return (
    <ul className="space-y-3 pl-6">
      {content.map((item, index) => (
        <>
          <span
            style={{
              color: colors[index % colors.length],
              lineHeight: "1",
            }}
          >
            ▹
          </span>
          <li key={index} className={`text-gray-300`}>
            {item}
          </li>
        </>
      ))}
    </ul>
  );
}
