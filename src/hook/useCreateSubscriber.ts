import { useState } from 'react'
import { subscriberClient } from '@/client/SubscriberClient'
import type { ContactView } from '@/model/view/contact'
import type { ContactRequest } from '@/model/api/contact'

export const useCreateSubscriber = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createSubscriber = async (data: ContactRequest): Promise<ContactView | null> => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await subscriberClient.create(data)
      return result
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create subscriber'
      setError(errorMessage)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  return { createSubscriber, isLoading, error }
}
