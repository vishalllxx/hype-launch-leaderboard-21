
import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const MainNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-3 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/c9853b66-e783-4b56-bc39-9fac0b2296e5.png" 
            alt="NEFTIT" 
            className="h-4 w-auto"
          />
        </div>

        {/* Menu Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 p-1.5 h-7 w-7"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-black/90 backdrop-blur-sm border border-white/20 min-w-[80px]"
          >
            <DropdownMenuItem className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer text-xs">
              Waitlist
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer text-xs">
              Docs
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default MainNav;
