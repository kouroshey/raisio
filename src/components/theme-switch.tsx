"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useIsMounted } from "@/hooks/use-is-mounted";

interface ThemeSwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const isMounted = useIsMounted();
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <Button size="lg" className={className} variant="ghost" onClick={toggleTheme}>
      <MoonIcon
        className="fade-in spin-in !h-6 !w-6 data-[active=true]:animate-in data-[active=false]:hidden"
        data-active={isMounted && resolvedTheme === "dark"}
      />
      <SunIcon
        className="fade-in spin-in !h-6 !w-6 data-[active=true]:animate-in data-[active=false]:hidden"
        data-active={isMounted && resolvedTheme === "light"}
      />
    </Button>
  );
};
