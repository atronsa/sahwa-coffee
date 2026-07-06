export default function RoastStamp({ type }: { type: string }) {
  return (
    <span className="absolute right-2 top-2 sm:right-3 sm:top-3 -rotate-3 rounded-full border-2 border-dashed border-amber-800/40 bg-cream/95 px-2 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-[9px] font-semibold uppercase tracking-widest text-amber-900 shadow-sm">
      {type}
    </span>
  );
}
