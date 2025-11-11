import { type ReactNode } from "react"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { cn } from "@/lib/utils"

interface StyledFieldProps {
  id: string
  label?: string
  type?: "text" | "email" | "tel" | "password" | "url"
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  icon?: ReactNode
  className?: string
  inputShade?: string
}

/**
 * StyledField
 *
 * A custom field component with optional icon and shaded visual design using layered backgrounds.
 * Creates a visual hierarchy with different opacity levels for the container and input.
 *
 * Design Pattern:
 * - Container has a background shade (default: bg-muted/15)
 * - Input element has bg-input for consistent styling
 * - Optional icon addon provides visual balance
 *
 * Usage:
 * ```tsx
 * // With icon
 * <StyledField
 *   id="email"
 *   label="Email"
 *   type="email"
 *   placeholder="you@example.com"
 *   value={email}
 *   onChange={handleEmailChange}
 *   error={emailError}
 *   icon={<MailIcon />}
 * />
 *
 * // Without icon
 * <StyledField
 *   id="firstName"
 *   type="text"
 *   placeholder="First name"
 *   value={firstName}
 *   onChange={handleFirstNameChange}
 * />
 * ```
 */
const StyledField = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  icon,
  className,
  inputShade,
}: StyledFieldProps) => {
  const inputClassName = cn(
    "bg-input",
    "transition-colors duration-200 hover:border-muted/80",
    "placeholder:text-muted-foreground/50",
    error && "border-destructive",
    inputShade
  )

  return (
    <Field className={className}>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      <InputGroup className="bg-muted/15 rounded-md">
        <InputGroupInput
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClassName}
        />
        {icon && <InputGroupAddon>{icon}</InputGroupAddon>}
      </InputGroup>
      {error && (
        <FieldDescription className="text-destructive">
          {error}
        </FieldDescription>
      )}
    </Field>
  )
}

export default StyledField
