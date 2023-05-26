export function FilterMenuData(data) {
  let firstMenu = []
  let secondMenu = []
  
  data.map((item) => {
    if (item.parent_id === 56) {
      firstMenu.push(item)
    } else {
      secondMenu.push(item)
    }
  })

  return {
    firstMenu,
    secondMenu
  }
}