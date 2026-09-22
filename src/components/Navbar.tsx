import { Link } from "react-router";
import Avatar from "./Avatar";
import { Menu } from "lucide-react"; 

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="text-[16px] font-Inter flex justify-center items-center bg-[#1E293B] py-4 px-4 ">
        <div>
          <Link to="/">
            <Avatar />
          </Link>
        </div>

        <div className="flex">
          <div className="text-[#FAFAFF] text-base flex px-6 items-center font-thin">
            <Link to="/">
              <p className="hidden md:block px-4">Home</p>
            </Link>
            <Link to="/about">
              <p className="hidden md:block px-4">About</p>
            </Link>
            <Link to="/menus">
              <p className="hidden md:block px-4">Our Menus</p>
            </Link>
            <Link to="/teams">
              <p className="hidden md:block px-4">Management</p>
            </Link>
            <Link to="/blogpage">
              <p className="hidden md:block px-4">Articles</p>
            </Link>
          </div>
        </div>

        <Sheet>
          <SheetTrigger>
            <Button className="bg-[#1E293B] text-white hover:bg-slate-300 hover:text-[#1E293B] md:hidden">
              <Menu/>
            </Button>
          </SheetTrigger>

          <SheetContent showCloseButton={true} className="bg-[#1E293B] border-none p-4">
            <SheetHeader  >
              <SheetTitle>
                <Avatar />
              </SheetTitle>
              <SheetDescription className=" flex flex-col mt-4 space-y-5 text-white">
                <Link to="/">
                  <p >Home</p>
                </Link>
                <Link to="/about">
                  <p>About</p>
                </Link>
                <Link to="/menus">
                  <p >Our Menus</p>
                </Link>
                <Link to="/teams">
                  <p>Management</p>
                </Link>
                <Link to="/blogpage">
                  <p >Articles</p>
                </Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
export default Navbar;
