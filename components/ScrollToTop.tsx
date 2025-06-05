"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import clsx from "clsx";

const ScrollToTop = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      href="#home"
      aria-label="Scroll to top"
      className={clsx(
        "fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full",
        "bg-slate-800 text-white flex items-center justify-center",
        "hover:bg-slate-700 transition-opacity duration-300 shadow-md",
        scrolling ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <ChevronUp className="w-6 h-6" />
    </Link>
  );
};

export default ScrollToTop;
