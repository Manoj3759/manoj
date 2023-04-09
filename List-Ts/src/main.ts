import './css/style.css'
import Fullist from './model/Fullist'
import ListTemplate from './Templates/ListTemplate'
import Listitem from './model/Listitem'

const initApp =():void =>{
  const fullist = Fullist.instance
  const template= ListTemplate.instance

  const itemEntryForm = document.getElementById('itemEntryForm') as HTMLFormElement
  itemEntryForm.addEventListener('submit',(e:SubmitEvent):void=>{
    e.preventDefault()

     const input = document.getElementById("newItem") as HTMLInputElement
     const newEntryText:string = input.value.trim()
     if (!newEntryText.length)return

     const itemId: number = fullist.list.length
     ?parseInt(fullist.list[fullist.list.length - 1].id) +1 : 1

     const newItem= new Listitem(itemId.toString(),newEntryText)
     
     fullist.addItem(newItem)
     template.render(fullist)
  })
  const clearItem =document.getElementById("clearItemButton") as HTMLButtonElement
  clearItem.addEventListener('click',():void=>{
    fullist.clearList()
    template.clear()
  })

  fullist.load()
  template.render(fullist)
}

document.addEventListener('DOMContentLoaded',initApp)