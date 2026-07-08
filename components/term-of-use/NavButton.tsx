const NavButton = ({
  num,
  title,
  isActive,
  onClick,
}: {
  num: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="w-full flex items-baseline gap-2 text-left group cursor-pointer min-w-0 px-4 sm:px-6 md:px-8 sm:pt-2 md:pt-0"
  >
    <span
      className={`text-xs leading-6 font-mono transition-colors duration-200 shrink-0 ${
        isActive
          ? "font-semibold text-stamp"
          : "text-muted group-hover:text-stamp"
      }`}
    >
      {num}
    </span>
    <span
      className={`text-xs leading-6 transition-colors duration-200 truncate ${
        isActive ? "font-semibold" : "group-hover:text-ink"
      }`}
    >
      {title}
    </span>
  </button>
);

export default NavButton;
