import {reactive} from "vue";

const globalState = reactive({
  items: [],
  xItem: null,
  yItem: null
})

export const useItemComparison = () => {
  const setItems = (items) => globalState.items = items

  const setItem = (key, value) => globalState[key] = value

  const compareItems = () => {
    const {xItem, yItem} = globalState

    if(xItem?.id && yItem?.id) {
      if(xItem.id === yItem.id) {
        return 'These are the same items'
      }

      const [expensiveItem, cheapItem] = xItem.price > yItem.price ? [xItem, yItem] : [yItem, xItem]
      const howMuchCanBuy = Math.floor(expensiveItem.price / cheapItem.price)

      return `You can get ${howMuchCanBuy}x ${cheapItem.title} for about the same price as a single ${expensiveItem.title}`
    }
  }


  return {globalState, setItem, setItems, compareItems}
}
