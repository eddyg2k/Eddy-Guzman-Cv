"use client";

export default function Section({ id, children, className = "", sectionRef, ...props }) {
  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative flex min-h-screen items-center justify-center px-6 md:px-12 ${className}`}
      {...props}
    >
      <div className="section-shell mx-auto flex h-full items-center justify-center">{children}</div>
    </section>
  );
}
