import * as React from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerWithRange({
  className,
  onDateChange, // Add the onDateChange prop
}) {
  const [date, setDate] = React.useState({
    from: null, // Initially null to indicate no selection
    to: null,   // Initially null to indicate no selection
  });

  // Handle date selection
  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);

    // Call the parent component with the updated date range after the selection
    if (onDateChange) {
      onDateChange(selectedDate); // Pass the selected date range to the parent component
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date?.from && "text-muted-foreground" // Add styling for empty state
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={new Date()} // Set default view to current month
            selected={date}
            onSelect={handleDateSelect} // Use the handleDateSelect function
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
