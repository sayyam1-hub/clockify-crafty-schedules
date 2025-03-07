
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { motion } from "framer-motion";

export interface ScheduleItem {
  time: string;
  activity: string;
}

export interface ScheduleCardProps {
  title: string;
  description: string;
  scheduleItems: ScheduleItem[];
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

const ScheduleCard = ({ title, description, scheduleItems, category, difficulty }: ScheduleCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSchedule, setEditedSchedule] = useState<ScheduleItem[]>(scheduleItems);
  const [displayedSchedule, setDisplayedSchedule] = useState<ScheduleItem[]>(scheduleItems);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleActivityChange = (index: number, newActivity: string) => {
    const updatedSchedule = [...editedSchedule];
    updatedSchedule[index] = { ...updatedSchedule[index], activity: newActivity };
    setEditedSchedule(updatedSchedule);
  };

  const handleSaveChanges = () => {
    // Save the edited schedule
    setDisplayedSchedule([...editedSchedule]);
    setIsEditing(false);
    toast.success("Schedule updated successfully!");
  };

  const handleCancelEdit = () => {
    // Reset to the last saved state
    setEditedSchedule([...displayedSchedule]);
    setIsEditing(false);
  };

  const handleUseSchedule = () => {
    toast.success(`You're now using the "${title}" schedule!`);
  };

  const handleOpenChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      // Reset edit state when dialog closes
      setEditedSchedule([...displayedSchedule]);
      setIsEditing(false);
    }
  };

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Easy": return "bg-green-500";
      case "Medium": return "bg-yellow-500";
      case "Hard": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="overflow-hidden transition-all duration-200">
        <div className="flex items-center justify-between p-4 bg-clockify-lightGray">
          <div className="flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full ${getDifficultyColor()}`}></div>
            <span className="text-sm font-medium">{difficulty}</span>
          </div>
          <span className="text-sm text-gray-500">{category}</span>
        </div>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-clockify-blue" />
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">View Schedule</Button>
            </DialogTrigger>
            <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                {isEditing ? (
                  <div className="space-y-4">
                    {editedSchedule.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="font-medium min-w-[80px]">{item.time}</span>
                        <input
                          type="text"
                          value={item.activity}
                          onChange={(e) => handleActivityChange(index, e.target.value)}
                          className="flex-1 p-2 border rounded-md"
                        />
                      </div>
                    ))}
                    <div className="flex justify-end gap-2 mt-4">
                      <Button variant="outline" onClick={handleCancelEdit}>Cancel</Button>
                      <Button onClick={handleSaveChanges}>Save Changes</Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="space-y-4">
                      {displayedSchedule.map((item, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-2 py-2 border-b last:border-0"
                        >
                          <Clock className="h-4 w-4 text-clockify-blue mt-1" />
                          <span className="font-medium min-w-[80px]">{item.time}</span>
                          <span>{item.activity}</span>
                        </motion.div>
                      ))}
                    </div>
                    <Button className="w-full mt-4" onClick={() => setIsEditing(true)}>
                      Edit Schedule
                    </Button>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
        <CardFooter className="bg-clockify-lightGray justify-between">
          <span className="text-sm">{displayedSchedule.length} activities</span>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-clockify-blue"
            onClick={handleUseSchedule}
          >
            Use This Schedule
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ScheduleCard;
