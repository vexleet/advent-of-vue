import {reactive} from "vue";

const globalState = reactive({
  items: [],
  xItemId: null,
  yItemId: null
})

export const useItemComparison = () => {
  const setItems = (items) => globalState.items = items

  const setItem = (key, value) => globalState[key] = value

  return {globalState, setItem, setItems}
}
