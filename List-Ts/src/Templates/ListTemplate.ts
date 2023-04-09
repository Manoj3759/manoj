import Fullist from "../model/Fullist";

interface Domlist{
    ul: HTMLUListElement,
    clear(): void,
    render(fullist:Fullist):void
}

export default class ListTemplate implements Domlist{
    ul: HTMLUListElement
    static instance : ListTemplate =new ListTemplate()
 private constructor(){
        this.ul = document.getElementById('listItems') as HTMLUListElement
    }

clear(): void {
    this.ul.innerHTML = ""
}
render(fullist: Fullist): void {
    this.clear()
     fullist.list.forEach(item=>{
        const li = document.createElement('li') as HTMLLIElement
        li.className='item'

        const check =document.createElement('input') as HTMLInputElement
        check.type = 'checkbox'
        check.id = item.id
        check.checked = item.checked
        li.append(check)

        check.addEventListener('change',()=>{
            item.checked = !item.checked
            fullist.save()
        })

        const label = document.createElement('label') as HTMLLabelElement
        label.htmlFor = item.id
        label.textContent =item.item
        li.append(label)

        const button = document.createElement('button') as HTMLButtonElement
        button.className ="button"
        button.textContent = 'X'
        li.append(button)

        button.addEventListener('click',()=>{
            fullist.removeItem(item.id)
            this.render(fullist)
        })
        this.ul.append(li)
    })
}
}
