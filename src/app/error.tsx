"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-xl font-bold md:text-2xl">مشکلی پیش آمد!</h2>
        <p className="text-xs font-light md:text-sm">در بارگذاری صفحه مشکلی پیش آمده است.</p>
      </div>

      <Button variant="outline" onClick={() => reset()}>
        بارگذاری مجدد
      </Button>
    </div>
  );
}
