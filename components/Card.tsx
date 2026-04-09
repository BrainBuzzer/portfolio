import Link from "next/link";
import { cn } from "../utils/cn";

function ChevronRightIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Card<T extends React.ElementType = "div">({
  as,
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, "as" | "className"> & {
  as?: T;
  className?: string;
}) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "group relative flex flex-col items-start shadow-sm transition-transform transition-shadow duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

Card.Link = function CardLink({ children, ...props }: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 rounded-2xl bg-zinc-50 opacity-0 transition duration-200 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
};

Card.Title = function CardTitle<T extends React.ElementType = "h2">({
  as,
  href,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, "as" | "href"> & {
  as?: T;
  href?: string;
}) {
  const Component = as ?? "h2";

  return (
    <Component
      className="font-display text-base font-medium tracking-tight text-zinc-900 dark:text-zinc-100"
      {...props}
    >
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

Card.Description = function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{children}</p>;
};

Card.Cta = function CardCta({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-600 dark:text-teal-400"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-0.5" />
    </div>
  );
};

Card.Eyebrow = function CardEyebrow<T extends React.ElementType = "p">({
  as,
  decorate = false,
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, "as"> & {
  as?: T;
  decorate?: boolean;
}) {
  const Component = as ?? "p";

  return (
    <Component
      className={cn(
        "relative z-10 order-first mb-3 flex items-center font-mono text-[0.72rem] tracking-[0.12em] text-zinc-400 tabular-nums dark:text-zinc-400",
        decorate && "pl-3.5",
        className,
      )}
      {...props}
    >
      {decorate ? (
        <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
          <span className="h-4 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-500" />
        </span>
      ) : null}
      {children}
    </Component>
  );
};
