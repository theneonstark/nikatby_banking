import React, { useState } from 'react';
import { SidebarTrigger } from './ui/sidebar';
import { Separator } from '@radix-ui/react-separator';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';
import { NavUser } from './nav-user';
import { data } from '@/types';
import { MyWallet } from './myWallet';
import { MenuIcon } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex h-16 items-center gap-2 px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      {/* Sidebar Trigger and Breadcrumb */}
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        {/* <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb> */}
      </div>

      {/* Right Section */}
      <div className="ml-auto flex items-center gap-4">
        {/* Show Icon on Small Screens */}
        <button
          onClick={toggleMenu}
          className="block md:hidden p-2 rounded-full hover:bg-gray-200"
        >
          <MenuIcon size={20} />
        </button>

        {/* Show Components on Larger Screens */}
        <div className="hidden md:grid grid-cols-2 gap-4">
          <MyWallet />
          <NavUser user={data.user} isNavbar className="" />
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 w-48 bg-white shadow-md rounded-md p-4 grid gap-4 md:hidden">
          <MyWallet />
          <NavUser user={data.user} isNavbar className="" />
        </div>
      )}
    </header>
  );
}

export default Navbar;
