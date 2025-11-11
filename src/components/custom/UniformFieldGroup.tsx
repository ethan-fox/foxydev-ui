import { FieldGroup } from "@/components/ui/field"
import { cn } from "@/lib/utils"

interface UniformFieldGroupProps {
  children: React.ReactNode
  className?: string
}

/**
 * UniformFieldGroup
 *
 * A wrapper around ShadCN's FieldGroup that ensures all child components
 * have uniform width determined by the parent container.
 *
 * Design Principle:
 * - All direct children take the full width of the container
 * - Horizontal items within rows are evenly spaced using CSS Grid
 * - Width is determined by the parent container, not content
 *
 * Usage:
 * ```tsx
 * <UniformFieldGroup>
 *   <Field>
 *     <FieldLabel>Email</FieldLabel>
 *     <Input type="email" />
 *   </Field>
 *   <div className="grid grid-cols-2 gap-4">
 *     <Field>First Name Field</Field>
 *     <Field>Last Name Field</Field>
 *   </div>
 * </UniformFieldGroup>
 * ```
 *
 * The component uses CSS Grid's `minmax(0, 1fr)` to ensure all children
 * fit within the parent container and distribute space evenly.
 */
const UniformFieldGroup = ({ children, className }: UniformFieldGroupProps) => {
  return (
    <FieldGroup
      className={cn(
        // Use grid for vertical stacking
        "grid",
        // All direct children take full width of the column
        "[&>*]:w-full",
        // All fields should be full width
        "[&>[data-slot=field]]:w-full",
        // Force InputGroup to take full width of its Field parent
        "[&_[data-slot=input-group]]:w-full",
        // Column fits within parent container, allows shrinking below content size
        "grid-cols-[minmax(0,1fr)]",
        className
      )}
    >
      {children}
    </FieldGroup>
  )
}

export default UniformFieldGroup
