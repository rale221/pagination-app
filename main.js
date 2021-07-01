const list_items = [
     "Item 1",
     "Item 2",
     "Item 3",
     "Item 4", 
     "Item 5",
     "Item 6",
     "Item 7",
     "Item 8",
     "Item 9",
     "Item 10",
     "Item 11",
     "Item 12",
     "Item 13",
     "Item 14",
     "Item 15",
     "Item 16",
     "Item 17",
     "Item 18",
     "Item 19",
     "Item 20"
]

const list_element = document.getElementById('list')
const pagination_element = document.getElementById('pagination')

let curent_page = 1
let rows = 5

function DisplayList(items, wrapper, rows_per_page, page){
     wrapper.innerHTML = ''
     page --
     let start = rows_per_page * page
     let end = start + rows_per_page
     let paginatedItems = items.slice(start, end)
     
     for (let i= 0; i<paginatedItems.length; i++){
          let item = paginatedItems[i]
          let item_element = document.createElement('div')
          item_element.classList.add('item')
          item_element.innerText = item

          wrapper.appendChild(item_element)

     }
}


DisplatList(list_items, list_element, rows, current_page)