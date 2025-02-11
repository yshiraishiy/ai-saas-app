import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import DashBoardNav from "./nav";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          className="mr-2 px-0 text-base hover:bg-transparent md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">メニューを開く</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="pl-1 pr-0">
        <SheetHeader className="py-3 px-10">
          <SheetTitle>メニュー</SheetTitle>
        </SheetHeader>
        <div className="px-7">
          <DashBoardNav />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
