import { useId } from "react";

export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const id = useId();

  return (
    <section aria-labelledby={id} className="md:border-l md:border-zinc-200 md:pl-6 md:dark:border-zinc-700/40">
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2
          id={id}
          className="font-pixel text-[0.72rem] uppercase leading-none tracking-[0.04em] text-zinc-900 sm:text-[0.78rem] dark:text-zinc-100"
        >
          {title}
        </h2>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  );
}
