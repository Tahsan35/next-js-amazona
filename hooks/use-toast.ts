"use client";

import { toast as sonnerToast } from "sonner";

type ToastProps = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
  duration?: number;
  action?: React.ReactNode; // Add this line
};

export function useToast() {
  const toast = ({
    title,
    description,
    variant = "default",
    duration = 3000,
    ...props
  }: ToastProps) => {
    if (variant === "destructive") {
      return sonnerToast.error(title, {
        description,
        duration,
        ...props,
      });
    }

    return sonnerToast(title, {
      description,
      duration,
      ...props,
    });
  };

  return {
    toast,
  };
}

export { sonnerToast as toast };
