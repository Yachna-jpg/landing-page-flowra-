"use client";

import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type NavSubItem = {
  label: string;
  description: string;
  icon: React.ElementType;
  onClick?: () => void;
  href?: string;
};

export type NavSubMenu = {
  title: string;
  items: NavSubItem[];
};

export type NavItem = {
  id: number;
  label: string;
  subMenus?: NavSubMenu[];
  link?: string;
  onClick?: () => void;
};

export type Props = {
  navItems: NavItem[];
};

export function DropdownNavigation({ navItems }: Props) {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel);
  };

  const [isHover, setIsHover] = useState<number | null>(null);
  return (
    <div className="relative flex items-center justify-center">
      <ul className="relative flex items-center space-x-1">
        {navItems.map((navItem) => (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => handleHover(navItem.label)}
            onMouseLeave={() => handleHover(null)}
          >
            <button
              onClick={() => {
                if (navItem.onClick) {
                  navItem.onClick();
                  setOpenMenu(null);
                } else if (navItem.link) {
                  window.location.href = navItem.link;
                }
              }}
              className="text-sm py-1.5 px-3.5 flex cursor-pointer group transition-colors duration-200 items-center justify-center gap-1 text-slate-600 hover:text-slate-900 font-medium relative rounded-full"
              onMouseEnter={() => setIsHover(navItem.id)}
              onMouseLeave={() => setIsHover(null)}
            >
              <span className="relative z-10">{navItem.label}</span>
              {navItem.subMenus && (
                <ChevronDown
                  className={`h-4 w-4 relative z-10 group-hover:rotate-180 duration-300 transition-transform text-slate-400 group-hover:text-slate-700
                    ${openMenu === navItem.label ? "rotate-180" : ""}`}
                />
              )}
              {(isHover === navItem.id || openMenu === navItem.label) && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 size-full bg-slate-100"
                  style={{ borderRadius: 99 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </button>

            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <div className="w-auto absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12),0_0_1px_1px_rgba(0,0,0,0.05)] p-5 w-max rounded-2xl"
                  >
                    <div className="w-fit shrink-0 flex space-x-8 overflow-hidden">
                      {navItem.subMenus.map((sub) => (
                        <div className="w-full min-w-[200px]" key={sub.title}>
                          <h3 className="mb-3.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {sub.title}
                          </h3>
                          <ul className="space-y-3.5">
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.label}>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (item.onClick) {
                                        item.onClick();
                                        setOpenMenu(null);
                                      } else if (item.href) {
                                        window.location.href = item.href;
                                      }
                                    }}
                                    className="flex items-start space-x-3 group text-left w-full p-1.5 -m-1.5 rounded-xl hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
                                  >
                                    <div className="border border-slate-200/80 bg-slate-50 text-slate-700 rounded-lg flex items-center justify-center size-9 shrink-0 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-200 shadow-xs">
                                      <Icon className="h-4 w-4 flex-none" />
                                    </div>
                                    <div className="leading-5 w-max max-w-[220px]">
                                      <p className="text-sm font-semibold text-slate-900 shrink-0 group-hover:text-emerald-700 transition-colors duration-200">
                                        {item.label}
                                      </p>
                                      <p className="text-xs text-slate-500 shrink-0 line-clamp-1 mt-0.5">
                                        {item.description}
                                      </p>
                                    </div>
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
}
