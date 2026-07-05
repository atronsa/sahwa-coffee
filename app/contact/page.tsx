import Hero from "@/components/contact/Hero";
import Method from "@/components/contact/Method";
import Form from "@/components/contact/Form";
import Map from "@/components/contact/Map";

export default function Page() {
  return (
    <>
      <Hero />
      <main className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 py-8 sm:py-8 md:py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-start">
          <Method />
          <div className="flex justify-center lg:justify-end w-full">
            <Form />
          </div>
        </div>
      </main>
      <Map />
    </>
  );
}
