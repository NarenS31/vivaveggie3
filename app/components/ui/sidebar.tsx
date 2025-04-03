'use client';

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

const sidebarVariants = cva(
  "fixed inset-y-0 left-0 z-50 w-64 bg-background border-r",
  {
    variants: {
      state: {
        expanded: "translate-x-0",
        collapsed: "-translate-x-full"
      }
    },
    defaultVariants: {
      state: "expanded"
    }
  }
)

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
    const [open, setOpen] = React.useState(true);

    // Handle controlled state
    const isControlled = openProp !== undefined;
    const isOpen = isControlled ? openProp : open;
    const setIsOpen = isControlled ? setOpenProp : setOpen;

    return (
      <div
        ref={ref}
        className={sidebarVariants({ 
          state: isOpen ? 'expanded' : 'collapsed',
          className 
        })}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  }
)

Sidebar.displayName = "Sidebar"

export { Sidebar, sidebarVariants }
