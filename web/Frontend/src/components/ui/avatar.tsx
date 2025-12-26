import { forwardRef } from "react";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AvatarFallback = forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);