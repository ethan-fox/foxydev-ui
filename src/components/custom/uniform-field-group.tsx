import { FieldGroup } from "@/components/ui/field"
import { cn } from "@/lib/utils"

interface UniformFieldGroupProps {
  children: React.ReactNode
  className?: string
}

/**
 * UniformFieldGroup
 *
 * A wrapper around ShadCN's FieldGroup that ensures all child Field components
 * have the same width, based on the widest element within any field.
 *
 * Design Principle:
 * When fields are stacked vertically in a form, they should align to a uniform
 * width determined by the widest content. This creates visual consistency and
 * prevents layout shifts or overflow issues.
 *
 * Usage:
 * ```tsx
 * <UniformFieldGroup>
 *   <Field>
 *     <FieldLabel>Email</FieldLabel>
 *     <Input type="email" />
 *   </Field>
 *   <Field>
 *     <FieldLabel>Phone</FieldLabel>
 *     <InputOTP maxLength={10}>...</InputOTP>
 *   </Field>
 * </UniformFieldGroup>
 * ```
 *
 * The component uses CSS Grid's `minmax(0, 1fr)` to ensure all fields
 * stretch to match the widest field's intrinsic width.
 */
const UniformFieldGroup = ({ children, className }: UniformFieldGroupProps) => {
  return (
    <FieldGroup
      className={cn(
        // Use grid with auto-fit to make all children the same width
        "grid",
        // All fields should be the same width, determined by content
        "[&>[data-slot=field]]:w-full",
        // Force InputGroup to take full width of its Field parent
        "[&_[data-slot=input-group]]:w-full",
        // Ensure the grid items size to the largest intrinsic content
        "grid-cols-[minmax(max-content,1fr)]",
        className
      )}
    >
      {children}
    </FieldGroup>
  )
}

export default UniformFieldGroup
