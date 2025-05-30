"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Menu, ArrowRight } from "lucide-react";
import { navMenu } from "@/constants";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Ina");
  const [imgLanguage, setImgLanguage] = useState("/assets/id.svg");

  return (
    <div className="mx-0 md:mx-20 lg:mx-20">
      <header className="h-14 grid grid-cols-1 items-center md:h-18 lg:h-20">
        <div className="container flex justify-between lg:gap-4 items-center h-full">
          <Logo variant="default" />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu />
              </Button>
            </PopoverTrigger>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="gap-1">
                {navMenu.map(({ href, label, submenu }, index) => (
                  <NavigationMenuItem key={`nav-item-${index}`}>
                    {submenu ? (
                      <>
                        <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium hover:text-foreground/80 text-foreground/60 hover:bg-gray-100/50 dark:hover:bg-white/5 rounded-lg transition-all duration-150 ease-out hover:ease-in">
                          {label}
                        </NavigationMenuTrigger>

                        <NavigationMenuContent className="absolute left-0 w-full sm:w-[580px] md:w-[650px] lg:w-[800px] p-4">
                          <div className="bg-background-black backdrop-blur-lg rounded-xl shadow-lg overflow-hidden">
                            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-1 p-2">
                              {submenu.map(
                                (
                                  {
                                    href,
                                    icon,
                                    label,
                                    desc,
                                  }: {
                                    href: string;
                                    icon: React.ReactNode;
                                    label: string;
                                    desc: string;
                                  },
                                  subIndex: number
                                ) => (
                                  <li key={`submenu-${index}-${subIndex}`}>
                                    <NavigationMenuLink asChild>
                                      <a
                                        href={href}
                                        className="flex flex-row items-start gap-3 p-3 rounded-lg transition-all hover:bg-gray-100/50 dark:hover:bg-white/5 hover:shadow-sm"
                                      >
                                        <div className="p-2 rounded-md bg-black/5 dark:bg-white/10">
                                          {icon}
                                        </div>
                                        <div className="space-y-1">
                                          <h4 className="text-sm font-medium leading-tight">
                                            {label}
                                          </h4>
                                          <p className="text-sm text-muted-foreground line-clamp-2">
                                            {desc}
                                          </p>
                                        </div>
                                      </a>
                                    </NavigationMenuLink>
                                  </li>
                                )
                              )}
                            </ul>
                            {index === navMenu.length - 1 && (
                              <div className="border-t p-3 bg-gray-50/50 dark:bg-white/5">
                                <a
                                  href="/all-features"
                                  className="text-sm font-medium hover:underline flex items-center gap-1"
                                >
                                  View all features{" "}
                                  <ArrowRight className="h-4 w-4" />
                                </a>
                              </div>
                            )}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={href}
                          className={cn(
                            "text-foreground/60 px-3 py-2 text-sm font-medium hover:text-foreground/80 hover:bg-gray-100/100 dark:hover:bg-white/5 rounded-lg transition-colors",
                            { "text-blue-600": label === "Home" }
                          )}
                        >
                          {label}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-2 justify-end max-lg:hidden">
              {/* menu language */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <img
                      src={imgLanguage}
                      alt="img flag"
                      width={24}
                      height={24}
                      className="rounded-full"
                      style={{ aspectRatio: "24/24", objectFit: "cover" }}
                    />
                    <span className="font-medium">{selectedLanguage}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuLabel>Select Language</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem
                      onClick={() => [
                        setSelectedLanguage("Ina"),
                        setImgLanguage(`/assets/id.svg`),
                      ]}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={`/assets/id.svg`}
                          alt="Indonesia Flag"
                          width={24}
                          height={24}
                          className="rounded-full"
                          style={{ aspectRatio: "24/24", objectFit: "cover" }}
                        />
                        <span>Ina</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => [
                        setSelectedLanguage("Eng"),
                        setImgLanguage(`/assets/gb.svg`),
                      ]}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={`assets/gb.svg`}
                          alt="England Flag"
                          width={24}
                          height={24}
                          className="rounded-full"
                          style={{ aspectRatio: "24/24", objectFit: "cover" }}
                        />
                        <span>Eng</span>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* button contact us */}
              <Button
                variant="ghost"
                className=" text-white bg-[#3176f7] hover:bg-[#3176f7]"
              >
                Contact Us
              </Button>
            </div>

            <PopoverContent
              align="end"
              className="bg-background/50 
          backdrop-blur-3xl border-foreground/5 
          border-x-0 border-b-0 rounded-lg overflow-hidden"
            >
              <MobileMenu navMenu={navMenu} />
            </PopoverContent>
          </Popover>
        </div>
      </header>
      <Separator className="hidden lg:block flex-1 mx-4 border-foreground/2" />
    </div>
  );
};

export default Header;
