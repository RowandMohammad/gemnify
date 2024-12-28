import { SidebarProvider } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Sidebarlayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <main className="m-2 w-full">
        <div className="border-sidebar-border bg-sidebar flex items-center gap-2 rounded-md border p-2 px-4 shadow">
          <div className="ml-auto"></div>
          <UserButton />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default Sidebarlayout;
