import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ColumnProps {
  title: string;
  children: React.ReactNode;
}

const Column: React.FC<ColumnProps> = ({ title, children }: ColumnProps) => {
  return (
    <div className="flex-none md:w-[20rem] max-w-full">
      <div className="mb-2">
        <Badge>{title}</Badge>
      </div>
      <ScrollArea className="max-h-full md:h-[60vh] md:pr-4">
        <div className="flex flex-col space-y-2">{children}</div>
      </ScrollArea>
    </div>
  );
};

Column.displayName = "Column";

export { Column };
