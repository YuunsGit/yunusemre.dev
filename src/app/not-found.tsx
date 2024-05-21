import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center px-4 py-8 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-prose text-center">
        <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-skeptic-950 lg:text-9xl">
          404
        </h1>
        <p className="mb-4 text-3xl font-bold tracking-tight text-skeptic-950 md:text-4xl">
          Are You Lost?
        </p>
        <p className="mb-4 text-lg font-light text-skeptic-950">
          Looks like you&apos;ve followed a broken link or entered a URL that
          doesn&apos;t exist on this site.
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "default" }),
            "bg-skeptic-500 hover:bg-skeptic-400",
          )}
        >
          Take Me Home
        </Link>
      </div>
    </div>
  );
}
