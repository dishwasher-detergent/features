import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LucideBell, LucideFilter, LucideSearch } from "lucide-react";

export default function Changelog() {
  return (
    <>
      <section>
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
      <section>
        <div className="flex flex-col md:flex-row pt-6 pb-10 md:first:pt-10 md:pt-20 md:pb-20 border-b">
          <div className="flex-none w-full md:w-52">
            <div className="flex md:flex-col flex-row justify-between items-center md:items-start mb-4 md:mb-0 md:sticky md:top-4">
              <time className="text-xs font-bold text-muted-foreground">
                August 21st 2024
              </time>
              <div className="flex flex-row flex-wrap gap-1.5 mt-1.5">
                <Badge variant="info">Test</Badge>
                <Badge variant="success">Test</Badge>
                <Badge variant="warning">Test</Badge>
              </div>
            </div>
          </div>
          <div className="flex-1 prose prose-img:rounded-xl">
            <div className="w-full h-96 rounded-xl bg-primary" />
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, facilis. Est velit atque animi nesciunt officiis natus
              incidunt magnam, saepe facere autem, cumque iusto, perferendis
              assumenda mollitia? Repellendus, repellat cum.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae fugiat dolor sunt id voluptatibus perferendis minima et
              odio, quasi aperiam, vitae ullam, excepturi reprehenderit alias
              quas delectus quod quibusdam consectetur.
            </p>
            <h3>Changelog test</h3>
            <ul>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row pt-6 pb-10 md:first:pt-10 md:pt-20 md:pb-20 border-b">
          <div className="flex-none w-full md:w-52">
            <div className="flex md:flex-col flex-row justify-between items-center md:items-start mb-4 md:mb-0 md:sticky md:top-4">
              <time className="text-xs font-bold text-muted-foreground">
                August 21st 2024
              </time>
              <div className="flex flex-row flex-wrap gap-1.5 mt-1.5">
                <Badge variant="info">Test</Badge>
                <Badge variant="success">Test</Badge>
                <Badge variant="warning">Test</Badge>
              </div>
            </div>
          </div>
          <div className="flex-1 prose prose-img:rounded-xl">
            <div className="w-full h-96 rounded-xl bg-primary" />
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, facilis. Est velit atque animi nesciunt officiis natus
              incidunt magnam, saepe facere autem, cumque iusto, perferendis
              assumenda mollitia? Repellendus, repellat cum.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae fugiat dolor sunt id voluptatibus perferendis minima et
              odio, quasi aperiam, vitae ullam, excepturi reprehenderit alias
              quas delectus quod quibusdam consectetur.
            </p>
            <h3>Changelog test</h3>
            <ul>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
