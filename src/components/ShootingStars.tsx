export function ShootingStars() {
  return (
    <div className="cosmic-sky" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, index) => (
        <span
          className="shooting-star"
          key={index}
          style={
            {
              "--delay": `${index * 1.45}s`,
              "--duration": `${6.6 + (index % 3) * 1.2}s`,
              "--top": `${8 + ((index * 17) % 66)}%`,
              "--left": `${7 + ((index * 23) % 80)}%`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
