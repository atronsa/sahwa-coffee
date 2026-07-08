import { type Section } from "@/data/privacy-sections";
import BodyContent from "@/components/privacy-policy/BodyContent";

const SectionCard = ({
  section,
  sectionRef,
}: {
  section: Section;
  sectionRef: (el: HTMLElement | null) => void;
}) => (
  <section
    ref={sectionRef}
    id={`sec-${section.num}`}
    data-num={section.num}
    className="px-4 sm:px-6 md:px-8 py-4 scroll-mt-24 lg:scroll-mt-0"
  >
    <div className="flex items-baseline gap-3 mb-4">
      <span className="font-montserrat text-base sm:text-lg lg:text-xl font-medium shrink-0">
        {section.num}
      </span>
      <h2 className="font-montserrat text-base sm:text-lg lg:text-xl font-medium">
        {section.title}
      </h2>
    </div>
    <div className="space-y-3">
      {section.body.map((item, i) => (
        <BodyContent key={i} item={item} />
      ))}
    </div>
  </section>
);

export default SectionCard;
