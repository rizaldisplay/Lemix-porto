"use client";
// import { useState } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Menu, ArrowRight } from "lucide-react";
import { navMenu } from "@/constants";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { ChevronDown } from "lucide-react";
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
// import Image from "next/image";

const Header = () => {
  // const [selectedLanguage, setSelectedLanguage] = useState("Ina");
  // const [imgLanguage, setImgLanguage] = useState("/assets/id.svg");

  return (
    <header
      id="home"
      className="sticky top-0 backdrop-blur-sm z-20 bg-background/50 border-b border-foreground/5"
    >
      <div className="mx-0 md:mx-20 lg:mx-20">
        <div className="h-14 grid grid-cols-1 items-center md:h-18 lg:h-20 ">
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
                {/* <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Image
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
                          <Image
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
                          <Image
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
                </DropdownMenu> */}

                {/* button contact us */}
                <Link
                  href="https://wa.me/6282257481032?text=Halo%20saya%20tertarik%20untuk%20konsultasi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    className="text-white bg-[#29a71a] hover:bg-[#25d366] hover:text-white"
                  >
                    {/* SVG Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="200"
                      height="200"
                      viewBox="0 0 50 50"
                      style={{ fill: "#FFFFFF" }}
                    >
                      <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                    </svg>
                    Konsultasi Gratis
                  </Button>
                </Link>
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
        </div>
        <Separator className="hidden lg:block flex-1 mx-4 border-foreground/2" />
      </div>
    </header>
  );
};

export default Header;
