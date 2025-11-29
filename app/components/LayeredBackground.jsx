"use client";

export default function LayeredBackground({ index, backgrounds }) {
  return (
    <div className="layer-stack absolute inset-0">
      {backgrounds.map((bg, bgIndex) => (
        <div
          key={`${bgIndex}-${bg.slice(0, 12)}`}
          className={`bg-layer ${bgIndex === index ? "is-active" : ""}`}
          style={{ backgroundImage: bg }}
          aria-hidden
        />
      ))}
      <div className="bg-overlay" aria-hidden />
    </div>
  );
}
