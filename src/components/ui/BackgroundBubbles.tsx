import { MovingBubble } from "./Bubble";

const bubbles1 = [
  {
    startProgress: 10,
    className: "top-[15%] w-[30rem] h-[30rem] bg-purple-500/20",
  },
  {
    startProgress: 25,
    className: "top-[60%] w-80 h-80 bg-cyan-500/20",
  },
  {
    startProgress: 40,
    className: "top-[8%] w-96 h-96 bg-cyan-500/20",
  },
  {
    startProgress: 55,
    className: "top-[48%] w-[28rem] h-[28rem] bg-purple-500/20",
  },
  {
    startProgress: 70,
    className: "top-[22%] w-80 h-80 bg-purple-500/20",
  },
  {
    startProgress: 85,
    className: "top-[70%] w-[32rem] h-[32rem] bg-cyan-500/20",
  },
];

const bubbles2 = [
  {
    startProgress: 10,
    className: "top-[15%] w-[30rem] h-[30rem] bg-purple-500/20",
  },
  {
    startProgress: 30,
    className: "top-[60%] w-80 h-80 bg-cyan-500/20",
  },
  {
    startProgress: 50,
    className: "top-[8%] w-96 h-96 bg-purple-500/20",
  },
  {
    startProgress: 70,
    className: "top-[48%] w-[28rem] h-[28rem] bg-cyan-500/20",
  },
  {
    startProgress: 90,
    className: "top-[30%] w-72 h-72 bg-purple-500/20",
  },
];

export function BackgroundBubbles1() {
  return (
    <>
      {bubbles1.map((bubble, index) => (
        <MovingBubble
          key={index}
          startProgress={bubble.startProgress}
          className={`
              absolute
              ${bubble.className}
              rounded-full
              blur-3xl
            `}
        />
      ))}
    </>
  );
}

export function BackgroundBubbles2() {
  return (
    <>
      {bubbles2.map((bubble, index) => (
        <MovingBubble
          key={index}
          startProgress={bubble.startProgress}
          className={`
              absolute
              ${bubble.className}
              rounded-full
              blur-3xl
            `}
        />
      ))}
    </>
  );
}
