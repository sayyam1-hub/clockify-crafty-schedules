
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TipCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
  className?: string;
}

const TipCard = ({ title, description, icon, color = "bg-clockify-blue", className = "" }: TipCardProps) => {
  return (
    <Card className={`overflow-hidden h-full transition-all duration-300 hover:shadow-lg tips-card ${className}`}>
      <div className={`h-2 ${color}`}></div>
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-full ${color.replace("bg-", "bg-opacity-20 text-")}`}>
            {icon}
          </div>
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
