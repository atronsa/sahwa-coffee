import { COFFEES } from "@/data/products";
import ProductDetail from "@/components/product-detail/ProductDetail";

export function generateStaticParams() {
  return COFFEES.map((coffee) => ({
    slug: coffee.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  // Handle both Next.js 15 (Promise) and Next.js 14 (plain object)
  const slug = params instanceof Promise ? (await params).slug : params.slug;

  return <ProductDetail slug={slug} />;
}
