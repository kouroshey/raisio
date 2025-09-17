"use client";

import { RandomLogo } from "../logo";
import { ThemeSwitch } from "../theme-switch";

export const Header = () => {
  return (
    <header className="border-accent mb-4 flex items-center justify-between border-b py-2">
      <div className="flex items-center gap-4">
        <RandomLogo className="h-12 w-12" />
        <span className="font-semibold">داشبورد کاربری</span>
      </div>
      <ThemeSwitch />
    </header>
  );
};
