import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

export interface ProgressProps {
    /** Value between 0 and 100 representing the progress percentage */
    value: number;
    className?: string;
}

export const Progress: React.FC<ProgressProps> = ({ value, className = "" }) => {
    return (
        <ProgressPrimitive.Root
            value={value}
            className={`relative h-1 w-full overflow-hidden rounded-full bg-secondary ${className}`}
        >
            <ProgressPrimitive.Indicator
                className="h-full bg-sky-900"
                style={{ width: `${value}%`, transition: "width 0.3s ease" }}
            />
        </ProgressPrimitive.Root>
    );
};