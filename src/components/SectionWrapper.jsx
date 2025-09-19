import { useEffect, useState } from "react";

export default function SectionWrapper({
  children,
  parallax = false,
  speed = 0.3,
}) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    if (!parallax) return;
    const handleScroll = () => setOffsetY(window.scrollY * speed);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallax, speed]);

  return (
    <div
      className="animate-fadeSlideUp"
      style={parallax ? { transform: `translateY(${offsetY}px)` } : {}}
    >
      {children}
    </div>
  );
}
