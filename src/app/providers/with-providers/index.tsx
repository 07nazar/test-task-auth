import { withRouter } from 'src/app/providers/with-router'
import { withStore } from 'src/app/providers/with-store'
import { withToast } from 'src/app/providers/toast-provider'

export const withProviders = withStore(withToast(withRouter))
