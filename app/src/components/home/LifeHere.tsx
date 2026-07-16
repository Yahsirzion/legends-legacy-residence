import { LaurelIcon, ShieldIcon, KeyIcon } from "../site/icons";

const CARDS = [
  {
    title: "Community",
    body: "Neighbors who understand the walk you've been on. Shared spaces built for connection, not isolation.",
    Icon: LaurelIcon,
    offset: "md:mt-0",
    size: "md:col-span-5",
  },
  {
    title: "Comfort",
    body: "A furnished home of your own. Utilities, Wi-Fi, and climate control included, no surprises.",
    Icon: ShieldIcon,
    offset: "md:mt-10",
    size: "md:col-span-4",
  },
  {
    title: "Care",
    body: "Housing stability support and help connecting with VA and community resources, whenever you need it.",
    Icon: KeyIcon,
    offset: "md:mt-20",
    size: "md:col-span-3",
  },
] as const;

export function LifeHere() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1140px] px-6 py-24">
        <h2 className="font-display text-3xl text-navy md:text-4xl">Life Here</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
          {CARDS.map(({ title, body, Icon, offset, size }) => (
            <div
              key={title}
              className={`border border-gold/50 p-8 ${offset} ${size}`}
            >
              <Icon className="h-9 w-9 text-gold" />
              <h3 className="mt-5 font-display text-xl text-navy">{title}</h3>
              <p className="mt-3 text-[0.98rem] text-navy/80">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
