export const getTagColorClasses = (color: string, withHover = false) => {
  const colors = {
    cyan: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
    purple: "bg-purple-500/10 border-purple-500/30 text-purple-400",
    pink: "bg-pink-500/10 border-pink-500/30 text-pink-400",
  };
  if (!withHover) return colors[color as keyof typeof colors];

  const colorsWithHover = {
    cyan: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20",
    purple:
      "bg-purple-500/10 border-purple-500/30 text-purple-400 hover:bg-purple-500/20",
    pink: "bg-pink-500/10 border-pink-500/30 text-pink-400 hover:bg-pink-500/20",
  };
  return colorsWithHover[color as keyof typeof colorsWithHover];
};
