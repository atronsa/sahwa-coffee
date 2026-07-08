import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT, type BodyItem } from "@/data/terms-sections";

const BodyContent = ({ item }: { item: BodyItem }) => {
  if (item.type === "contact") {
    const contactLinks = [
      {
        Icon: Mail,
        value: CONTACT.email,
        href: CONTACT.emailHref,
        external: false,
      },
      {
        Icon: Phone,
        value: CONTACT.phone,
        href: CONTACT.phoneHref,
        external: false,
      },
      {
        Icon: MapPin,
        value: CONTACT.address,
        href: CONTACT.addressHref,
        external: true,
      },
    ];

    return (
      <div className="grid sm:flex sm:flex-wrap items-center gap-4 sm:gap-6 pt-2">
        {contactLinks.map(({ Icon, value, href, external }, i) => (
          <Link
            key={i}
            href={href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className="flex items-center gap-2 text-sm font-medium hover:text-amber-400 transition-colors"
          >
            <Icon size={15} strokeWidth={2.5} className="text-cargo shrink-0" />
            <span className="break-all">{value}</span>
          </Link>
        ))}
      </div>
    );
  }

  if (item.type === "list") {
    return (
      <div className="flex gap-3 text-[13px] leading-6 sm:text-sm">
        <span className="text-stamp font-mono shrink-0">—</span>
        <span>{item.content}</span>
      </div>
    );
  }

  return (
    <p
      className={`text-[13px] leading-6 sm:text-sm ${item.muted ? "text-muted italic" : ""}`}
    >
      {item.content}
    </p>
  );
};

export default BodyContent;
