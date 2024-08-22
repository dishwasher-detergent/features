import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LucideChevronUp } from "lucide-react";

const Cell: React.FC = () => {
  return (
    <div className="w-full border bg-muted p-2 rounded-lg">
      <p className="font-bold text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        doloribus, nihil itaque amet omnis repellat officiis necessitatibus
        deleniti voluptates ea vero tenetur beatae consequatur quia sed nesciunt
        blanditiis tempore iure.
      </p>
      <div className="flex flex-row flex-nowrap">
        <div className="flex flex-row flex-wrap gap-1.5 mt-1.5 flex-1">
          <Badge variant="info">Test</Badge>
          <Badge variant="success">Test</Badge>
          <Badge variant="warning">Test</Badge>
          <Badge variant="warning">Test</Badge>
          <Badge variant="warning">Test</Badge>
          <Badge variant="warning">Test</Badge>
          <Badge variant="warning">Test</Badge>
          <Badge variant="warning">Test</Badge>
          <Badge variant="warning">Test</Badge>
          <Badge variant="warning">Test</Badge>
          <Badge variant="warning">Test</Badge>
          <Badge variant="warning">Test</Badge>
        </div>
        <div className="flex-none flex items-end">
          <Button
            variant="outline"
            size="sm"
            className="px-2 font-normal text-sm"
          >
            <LucideChevronUp className="size-4 mr-2" />
            117
          </Button>
        </div>
      </div>
    </div>
  );
};

Cell.displayName = "Cell";

export { Cell };
