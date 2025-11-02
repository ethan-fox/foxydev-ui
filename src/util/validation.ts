/**
 * Validates an email address using a standard email regex pattern
 * @param email - The email address to validate
 * @returns true if the email is valid, false otherwise
 */
export const isValidEmail = (email: string): boolean => {
  if (!email || !email.trim()) return false

  // Basic email regex that covers most common cases
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.trim())
}

/**
 * Validates a phone number
 * Accepts various formats and strips non-digit characters for validation
 * Examples: (555) 123-4567, 555-123-4567, 5551234567
 * @param phone - The phone number to validate (with or without formatting)
 * @returns true if the phone number is valid, false otherwise
 */
export const isValidPhone = (phone: string): boolean => {
  if (!phone || !phone.trim()) return false

  // Strip all non-digit characters
  const digitsOnly = phone.replace(/\D/g, "")

  // Validate exactly 10 digits (US phone number)
  return digitsOnly.length === 10
}

/**
 * Formats a phone number as (XXX) XXX-XXXX
 * @param value - The phone number string (can contain non-digits)
 * @returns Formatted phone number string
 */
export const formatPhoneNumber = (value: string): string => {
  // Strip all non-digit characters
  const digits = value.replace(/\D/g, "")

  // Apply formatting based on length
  if (digits.length === 0) return ""
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
}
