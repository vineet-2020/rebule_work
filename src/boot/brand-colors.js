
import { setCssVar } from 'quasar'
import { boot } from 'quasar/wrappers'

export default boot(() => {
  setCssVar('primary', '#151515')
  setCssVar('green', '#5AC832')
  setCssVar('purple', '#176BF8')

})