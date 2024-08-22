import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cell } from "@/components/ui/kanban/cell";
import { Column } from "@/components/ui/kanban/column";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { LucideBell, LucideFilter, LucideSearch } from "lucide-react";

export default function Roadmap() {
  return (
    <>
      <section className="max-w-4xl px-4 mx-auto">
        <header className="space-y-3 py-6">
          <div className="flex flex-row flex-wrap justify-between gap-2 items-center">
            <Button>
              <LucideBell className="size-4 mr-2" />
              Subscribe to updates
            </Button>
            <div className="flex flex-row gap-2 items-center">
              <Button variant="outline" className="flex-none">
                <LucideFilter className="size-4 text-muted-foreground mr-2" />
                Filters
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
      <section className="px-4 max-w-7xl mx-auto">
        <ScrollArea className="pb-4">
          <div className="space-y-4 md:space-y-0 md:flex md:space-x-4">
            <Column title="Planned">
              <Cell />
              <Cell />
              <Cell />
              <Cell />
              <Cell />
              <Cell />
            </Column>
            <Column title="Next">
              <Cell />
            </Column>
            <Column title="In Progress">
              <Cell />
            </Column>
            <Column title="Completed">
              <Cell />
            </Column>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </>
  );
}
