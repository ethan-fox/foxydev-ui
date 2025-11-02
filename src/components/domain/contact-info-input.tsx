import { useState, useMemo } from "react"
import { MailIcon, PhoneIcon } from "lucide-react"

import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"

import UniformFieldGroup from "@/components/custom/uniform-field-group"
import { isValidEmail, isValidPhone, formatPhoneNumber } from "@/util/validation"

interface ContactInfoInputProps {
  onSubmit?: (data: { email: string; phone: string }) => void
  className?: string
}

const ContactInfoInput = ({ onSubmit, className }: ContactInfoInputProps) => {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState("")

  // Determine if the form is valid and submit button should be enabled
  const isFormValid = useMemo(() => {
    const hasEmail = email.trim().length > 0
    const hasPhone = phone.trim().length > 0

    // At least one field must be filled
    if (!hasEmail && !hasPhone) return false

    // If email is filled, it must be valid
    if (hasEmail && !isValidEmail(email)) return false

    // If phone is filled, it must be valid
    if (hasPhone && !isValidPhone(phone)) return false

    return true
  }, [email, phone])

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)

    // Clear error when user starts typing
    if (emailError) setEmailError("")
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)

    // Clear error when user starts typing
    if (phoneError) setPhoneError("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // This shouldn't happen due to button being disabled, but defensive check
    if (!isFormValid) {
      if (!email.trim() && !phone.trim()) {
        setEmailError("Please provide either an email or phone number")
        setPhoneError("Please provide either an email or phone number")
      }
      return
    }

    // Submit the form
    onSubmit?.({ email: email.trim(), phone: phone.trim() })

    // Optionally clear the form after successful submission
    setEmail("")
    setPhone("")
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <FieldSet className="items-center">
        <UniformFieldGroup>
          <Field>
            <FieldLabel htmlFor="email"></FieldLabel>
            <InputGroup className="bg-muted/30 rounded-md">
              <InputGroupInput
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={handleEmailChange}
                className={emailError ? "border-destructive" : ""}
              />
              <InputGroupAddon>
                <MailIcon />
              </InputGroupAddon>
            </InputGroup>
            {emailError && (
              <FieldDescription className="text-destructive">
                {emailError}
              </FieldDescription>
            )}
          </Field>

          <Field>
            <FieldLabel htmlFor="phone"></FieldLabel>
            <InputGroup className="bg-muted/30 rounded-md">
              <InputGroupInput
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={phone}
                onChange={handlePhoneChange}
                className={phoneError ? "border-destructive" : ""}
              />
              <InputGroupAddon>
                <PhoneIcon />
              </InputGroupAddon>
            </InputGroup>
            {phoneError && (
              <FieldDescription className="text-destructive">
                {phoneError}
              </FieldDescription>
            )}
          </Field>

          <Button type="submit" disabled={!isFormValid} className="mt-4 w-full">
            Submit
          </Button>
        </UniformFieldGroup>
      </FieldSet>
    </form>
  )
}

export default ContactInfoInput
