import { type ReactNode, Suspense } from 'react'
import { Loader } from 'src/shared/ui/loader'

export const withLazy = (component: ReactNode): JSX.Element => (
  <Suspense fallback={<Loader />}>{component}</Suspense>
)
