import { withRouter } from 'src/app/providers/with-router'
import { withStore } from 'src/app/providers/with-store'

export const withProviders = withStore(withRouter)
