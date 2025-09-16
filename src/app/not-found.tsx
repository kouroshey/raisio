import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-xl font-bold md:text-2xl">صفحه پیدا نشد!</h2>
        <p className="text-xs font-light md:text-sm">برای بازگشت به صفحه اصلی، روی دکمه زیر کلیک کنید</p>
      </div>

      <Button asChild variant="outline">
        <Link href="/">خانه</Link>
      </Button>
    </div>
  );
}
