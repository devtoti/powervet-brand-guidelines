import type { ReactNode } from "react";
import macWindowButtonsUrl from "@/assets/images/mac-window-buttons.svg";
import { cn } from "@/app/components/ui/utils";

type MacWindowsProps = {
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function MacWindows({
  children,
  className,
  contentClassName,
}: MacWindowsProps) {
  return (
    <div
      className={cn(
        "flex w-full min-h-[clamp(12rem,50vw,22.5rem)] max-w-full flex-col gap-3 overflow-hidden rounded-md border border-[#dadada] bg-[#f0f0f0] px-3 py-2",
        className,
      )}
    >
      <div className="flex w-full shrink-0 items-center">
        <img
          src={macWindowButtonsUrl}
          alt=""
          aria-hidden
          className="h-[9px] w-[33px] shrink-0"
        />
      </div>

      <div
        className={cn(
          "min-h-0 w-full flex-1 rounded bg-white",
          contentClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
