import ViewAdd from './components/ViewAdd.svelte'
import ViewObject from './components/ViewObject.svelte'
import ViewList from './components/ViewList.svelte'
import ViewNotFound from './components/ViewNotFound.svelte'

export default {
  '/': ViewList,
  '/add': ViewAdd,
  '/object/:objectId': ViewObject,
  '*': ViewNotFound
}
