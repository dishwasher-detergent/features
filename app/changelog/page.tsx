import { Button } from "@/components/ui/button";
import { Article } from "@/components/ui/changelog/article";
import { Input } from "@/components/ui/input";
import { LucideBell, LucideFilter, LucideSearch } from "lucide-react";

export default function Changelog() {
  return (
    <>
      <section className="max-w-4xl px-4 mx-auto">
        <header className="space-y-3 border-b py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold">Changelog</h2>
          <p className="text-secondary-foreground text-sm">
            Follow new updates and improvments to XYZ
          </p>
          <div className="flex flex-row justify-between gap-2 items-center">
            <Button>
              <LucideBell className="size-4 mr-2" />
              Subscribe to updates
            </Button>
            <div className="hidden md:flex flex-row gap-2 items-center">
              <Button variant="outline" size="icon" className="flex-none">
                <LucideFilter className="size-4 text-muted-foreground" />
              </Button>
              <div className="relative">
                <LucideSearch className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  className="flex-1 pl-8"
                  placeholder="Search entries..."
                />
              </div>
            </div>
          </div>
        </header>
      </section>
      <section className="max-w-4xl px-4 mx-auto">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </section>
    </>
  );
}
