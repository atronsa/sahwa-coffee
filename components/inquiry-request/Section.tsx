export default function Section({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl border border-stone-200 p-4 sm:p-5 md:p-6 lg:p-8 transition-all">
      <div className="flex items-center gap-2 sm:gap-2.5 text-sm sm:text-base lg:text-base font-semibold text-stone-900 mb-4 sm:mb-5 md:mb-8">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-100/50 flex items-center justify-center shrink-0">
          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-700" />
        </div>
        {title}
      </div>
      {children}
    </div>
  );
}
