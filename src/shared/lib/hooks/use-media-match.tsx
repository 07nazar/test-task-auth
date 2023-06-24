import { useLayoutEffect, useState } from 'react'

interface MatchMediaValues {
  isMobile: boolean
  isTablet: boolean
}

const queries = [
  '(max-width: 480px)',
  '(min-width: 481px) and (max-width: 768px)',
]

const getValues = (mediaQueryLists: MediaQueryList[]): MatchMediaValues => ({
  isMobile: mediaQueryLists[0].matches,
  isTablet: mediaQueryLists[1].matches,
})

export const useMatchMedia = (): MatchMediaValues => {
  const mediaQueryLists = queries.map(query => matchMedia(query))
  const [values, setValues] = useState<MatchMediaValues>(() =>
    getValues(mediaQueryLists)
  )

  useLayoutEffect(() => {
    const handler = (): void => {
      setValues(getValues(mediaQueryLists))
    }

    mediaQueryLists.forEach(list => {
      list.addEventListener('change', handler)
    })

    return () => {
      mediaQueryLists.forEach(list => {
        list.removeEventListener('change', handler)
      })
    }
  }, [mediaQueryLists])

  return values
}
