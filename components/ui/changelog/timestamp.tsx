import { Badge } from "@/components/ui/badge";

interface TimeStampProps {
  timestamp: string;
}

const Timestamp: React.FC<TimeStampProps> = ({ timestamp }: TimeStampProps) => {
  return (
    <div className="flex md:flex-col flex-row justify-between items-center md:items-start mb-4 md:mb-0 md:sticky md:top-4">
      <time className="text-xs font-bold text-muted-foreground">
        {timestamp}
      </time>
      <div className="flex flex-row flex-wrap gap-1.5 mt-1.5">
        <Badge variant="info">Test</Badge>
        <Badge variant="success">Test</Badge>
        <Badge variant="warning">Test</Badge>
      </div>
    </div>
  );
};

Timestamp.displayName = "Timestamp";

export { Timestamp };
