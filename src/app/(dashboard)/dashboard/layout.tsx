import MobileNav from "@/components/dashboard/mobile-nav";
import DashBoardNav from "@/components/dashboard/nav";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* header */}
      <header className="sticky top-0 z-40 border-b bg-background px-4">
        <div className="flex items-center h-16 max-w-screen-xl mx-auto w-full">
          <MobileNav />
          <Link href={"/"}>
            <h1 className="text-lg">AI Image Generator</h1>
          </Link>
        </div>
      </header>

      {/* dashboard */}
      <div className="mx-auto w-full max-w-screen-xl md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        {/* sidebar */}
        <aside className="md:sticky top-16 z-30 hidden md:block border-r h-[calc(100vh-4rem)]">
          <div className="py-6 px-2 lg:py-8">
            <DashBoardNav />
          </div>
        </aside>

        {/* main contents */}
        <main className="flex w-full flex-col p-4">{children}</main>
      </div>

      <Toaster />
    </div>
  );
}
