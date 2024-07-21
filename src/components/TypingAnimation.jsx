import { TypeAnimation } from "react-type-animation";

export default function MyTypingAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "I'm a Frontend Software Engineer",
        3000,
        "I'm a proud Woman in Tech",
        3000,
      ]}
      wrapper="span"
      speed={20}
      style={{
        fontFamily: "'Chivo Mono', serif",
        fontSize: "2rem",
        fontWeight: 400,
        display: "inline-block",
      }}
      repeat={Infinity}
    />
  );
}
