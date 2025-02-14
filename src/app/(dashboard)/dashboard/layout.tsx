import AuthButton from "@/components/auth/auth-button";
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
    <div className="h-screen flex flex-col">
      {/* header */}
      <header className="sticky top-0 z-40 border-b bg-background px-4">
        <div className="flex items-center h-16 mx-auto w-full">
          <MobileNav />
          <div className="flex w-full">
            <Link href={"/"}>
              <h1 className="text-lg">AI Image Generator</h1>
            </Link>
            <div className="ml-auto hidden md:block">
              <AuthButton />
            </div>
          </div>
        </div>
      </header>

      {/* dashboard */}
      <div className="flex flex-1">
        {/* sidebar */}
        <aside className="hidden md:block md:w-56 lg:w-60 border-r h-[calc(100vh-4rem)]">
          <div className="py-6 px-2 lg:py-8">
            <DashBoardNav />
          </div>
        </aside>

        {/* main contents */}
        <main className="flex-1 flex flex-col p-4">{children}</main>
      </div>

      <Toaster />
    </div>
  );
}
