"use client";

import { LogOutIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuth } from "@/context/auth-context";

export const LogoutButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <Button variant="destructive" onClick={() => setIsOpen(true)}>
        خروج از حساب
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>آیا از خروج از حساب خود مطمئن هستید؟</DialogTitle>
          <DialogDescription>برای ورود دوباره به حساب کاربری، باید از طریق صفحه ورود اقدام کنید.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button size="lg" onClick={() => setIsOpen(false)}>
            لفو
          </Button>
          <Button size="lg" variant="ghost" onClick={logout}>
            <LogOutIcon />
            خروج
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
