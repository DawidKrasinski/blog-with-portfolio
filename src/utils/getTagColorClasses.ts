export const getTagColorClasses = (color: string) => {
  const colors = {
    cyan: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20",
    purple:
      "bg-purple-500/10 border-purple-500/30 text-purple-400 hover:bg-purple-500/20",
    pink: "bg-pink-500/10 border-pink-500/30 text-pink-400 hover:bg-pink-500/20",
  };
  return colors[color as keyof typeof colors];
};
