
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mt-8 self-center max-w-[66%] bg-opacity-10 bg-color-secondary rounded-3xl p-7">
      <h1 className="text-3xl font-bold font-mono text-color-primary">{title}</h1>
      {children}
    </section>
  )
}
