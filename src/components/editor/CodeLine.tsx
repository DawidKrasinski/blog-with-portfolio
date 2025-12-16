interface CodeLineProps {
  number: number;
  indent?: boolean;
  children: React.ReactNode;
}

export function CodeLine({ number, indent, children }: CodeLineProps) {
  return (
    <div className="flex gap-4">
      <span className="text-gray-600">{number}</span>
      <span className={indent ? "pl-4" : ""}>{children}</span>
    </div>
  );
}
