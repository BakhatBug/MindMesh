import { forwardRef } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);