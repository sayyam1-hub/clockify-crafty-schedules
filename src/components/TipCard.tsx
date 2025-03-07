
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TipCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
}

const TipCard = ({ title, description, icon, color = "bg-clockify-blue" }: TipCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className={`h-2 ${color}`}></div>
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default TipCard;
