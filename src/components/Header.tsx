"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import type { Locale } from "@/i18n/dictionaries";
import type { Dictionary, NavDropdown } from "@/i18n/types";

function DropdownMenu({
  dropdown,
  lang,
  pathname,
  onNavigate,
}: {
  dropdown: NavDropdown;
  lang: Locale;
  pathname: string;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isGroupActive = dropdown.items.some((item) =>
    pathname.startsWith(`/${lang}${item.href}`)
  );

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
          isGroupActive
            ? "bg-slate-700 text-white"
            : "text-slate-300 hover:bg-slate-700 hover:text-white"
        }`}
      >
        {dropdown.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-slate-700 rounded-md shadow-lg py-1 z-50">
          {dropdown.items.map((item) => (
            <Link
              key={item.href}
              href={`/${lang}${item.href}`}
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
              className={`block px-4 py-2 text-sm transition-colors ${
                pathname.startsWith(`/${lang}${item.href}`)
                  ? "bg-slate-600 text-white"
                  : "text-slate-200 hover:bg-slate-600 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileDropdown({
  dropdown,
  lang,
  pathname,
  onNavigate,
}: {
  dropdown: NavDropdown;
  lang: Locale;
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white"
      >
        {dropdown.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="pl-4 space-y-1">
          {dropdown.items.map((item) => (
            <Link
              key={item.href}
              href={`/${lang}${item.href}`}
              onClick={onNavigate}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                pathname.startsWith(`/${lang}${item.href}`)
                  ? "bg-slate-700 text-white"
                  : "text-slate-400 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLocale = lang === "en" ? "zh-TW" : "en";
  const switchLabel = lang === "en" ? "中文" : "English";
  const switchPath = pathname.replace(/^\/(en|zh-TW)/, `/${switchLocale}`);

  const dropdowns: NavDropdown[] = [
    dict.nav.about,
    dict.nav.course,
    dict.nav.emi_teaching,
    dict.nav.observation,
  ];

  return (
    <header className="bg-slate-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <span className="text-xl font-bold">CPO</span>
            <span className="hidden sm:inline text-sm text-slate-300">
              {dict.site.subtitle}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href={`/${lang}`}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === `/${lang}`
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {dict.nav.home}
            </Link>
            {dropdowns.map((dropdown) => (
              <DropdownMenu
                key={dropdown.label}
                dropdown={dropdown}
                lang={lang}
                pathname={pathname}
              />
            ))}
            <Link
              href={switchPath}
              className="ml-3 px-3 py-1.5 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-500 transition-colors"
            >
              {switchLabel}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 space-y-1">
            <Link
              href={`/${lang}`}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                pathname === `/${lang}`
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {dict.nav.home}
            </Link>
            {dropdowns.map((dropdown) => (
              <MobileDropdown
                key={dropdown.label}
                dropdown={dropdown}
                lang={lang}
                pathname={pathname}
                onNavigate={() => setMenuOpen(false)}
              />
            ))}
            <Link
              href={switchPath}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-500"
            >
              {switchLabel}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
