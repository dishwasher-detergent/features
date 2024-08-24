import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  LucideChevronUp,
  LucideFilter,
  LucideMessageSquare,
  LucidePlus,
  LucideSearch,
} from "lucide-react";

export default function Feedback() {
  return (
    <section className="max-w-4xl px-4 mx-auto flex flex-row gap-5">
      <div className="space-y-3 flex-1">
        <div className="pt-6">
          <Alert>
            <AlertTitle className="font-bold text-base">
              Share your product feedback!
            </AlertTitle>
            <AlertDescription>
              Please tell us what we can do to make Features the best product
              for you.
            </AlertDescription>
          </Alert>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <Button variant="outline">Trending</Button>
            <Button variant="outline">Top</Button>
            <Button variant="outline">New</Button>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="relative">
              <LucideSearch className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input className="flex-1 pl-8" placeholder="Search entries..." />
            </div>
            <Button variant="outline" size="icon" className="flex-none">
              <LucideFilter className="size-4 text-muted-foreground" />
            </Button>
            <Button>
              <LucidePlus className="size-4 mr-2" />
              Create A New Post
            </Button>
          </div>
        </div>
        <div className="bg-muted border rounded-lg">
          <article className="border-b last:border-b-0 flex flex-row">
            <div className="p-4 border-r">
              <Badge className="mb-2">Planned</Badge>
              <h2 className="font-bold mb-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                veritatis molestias ad similique nihil officia atque aspernatur
                corrupti, ut enim esse expedita culpa nisi quaerat deleniti
                obcaecati ea omnis iusto.
              </h2>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur adipisci quae itaque facilis soluta asperiores quo
                quos inventore cum accusamus magni, dolorum voluptatibus tenetur
                a dolor. Animi fugit perferendis voluptatum!
              </p>
              <div className="mt-3 flex flex-row justify-between">
                <div className="flex flex-row gap-1 items-center">
                  <div className="size-6 rounded-full bg-primary" />
                  <p className="text-sm">Kenny Bass</p>
                </div>
                <div>
                  <Badge>Test</Badge>
                </div>
              </div>
            </div>
            <button className="flex-none w-16 grid place-items-center font-bold text-sm">
              <span>
                <LucideChevronUp className="size-4" />
                10
              </span>
            </button>
          </article>
          <article className="border-b last:border-b-0 flex flex-row">
            <div className="p-4 border-r">
              <Badge className="mb-2">Planned</Badge>
              <h2 className="font-bold mb-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                veritatis molestias ad similique nihil officia atque aspernatur
                corrupti, ut enim esse expedita culpa nisi quaerat deleniti
                obcaecati ea omnis iusto.
              </h2>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur adipisci quae itaque facilis soluta asperiores quo
                quos inventore cum accusamus magni, dolorum voluptatibus tenetur
                a dolor. Animi fugit perferendis voluptatum!
              </p>
              <div className="mt-3 flex flex-row justify-between">
                <div className="flex flex-row gap-1 items-center">
                  <div className="size-6 rounded-full bg-primary" />
                  <p className="text-sm">Kenny Bass</p>
                </div>
                <div>
                  <Badge>Test</Badge>
                </div>
              </div>
            </div>
            <button className="flex-none w-16 grid place-items-center font-bold text-sm">
              <span>
                <LucideChevronUp className="size-4" />
                10
              </span>
            </button>
          </article>
        </div>
      </div>
      <div className="w-60">
        <p className="font-bold text-sm pt-6">Boards</p>
        <ul className="mb-4">
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <LucideMessageSquare className="size-3 mr-2" />
              Test
            </Button>
          </li>
        </ul>
        <p className="font-bold text-sm">Most Helpful</p>
        <ul>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <LucideMessageSquare className="size-3 mr-2" />
              Test
            </Button>
          </li>
        </ul>
      </div>
    </section>
  );
}
