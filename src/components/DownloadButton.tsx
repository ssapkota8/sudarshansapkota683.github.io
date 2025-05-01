import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface DownloadButtonProps extends ButtonProps {
  fileUrl: string;
  fileName: string;
  iconPosition?: "left" | "right";
}

const DownloadButton = ({
  fileUrl,
  fileName,
  iconPosition = "left",
  className,
  children,
  ...props
}: DownloadButtonProps) => {
  return (
    <Button
      asChild
      className={cn("group", className)}
      {...props}
    >
      <a href={fileUrl} download={fileName} className="flex items-center gap-2">
        {iconPosition === "left" && (
          <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
        )}
        {children || `Download ${fileName}`}
        {iconPosition === "right" && (
          <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
        )}
      </a>
    </Button>
  );
};

export default DownloadButton;
