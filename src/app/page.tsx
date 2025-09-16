import { RandomLogo } from "@/components/logo";

export default async function HomePage() {
  return (
    <div className="my-12 flex flex-col gap-y-16 lg:my-28 lg:gap-y-44">
      Welcome to home Page <RandomLogo className="text-white" />
    </div>
  );
}
