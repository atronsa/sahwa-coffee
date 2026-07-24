import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  const [subscribers, messages, inquiries] = await Promise.all([
    prisma.newsletterSubscriber.findMany({
      orderBy: { subscribedAt: "desc" },
    }),
    prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    }),
    prisma.inquiry.findMany({
      orderBy: { createdAt: "desc" },
    }),
  ]);

  return (
    <AdminDashboard
      subscribers={JSON.parse(JSON.stringify(subscribers))}
      messages={JSON.parse(JSON.stringify(messages))}
      inquiries={JSON.parse(JSON.stringify(inquiries))}
    />
  );
}
