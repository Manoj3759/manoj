import Listitem from "./Listitem";

interface List{
    list:Listitem[],
    load():void,
    save():void,
    clearList():void
    addItem(itemObj:Listitem):void,
    removeItem(id:string):void,
}

export default class Fullist implements List{
    static instance: Fullist = new Fullist()
    private constructor(
        private _list:Listitem[] = [],
    ){

    }
    
    public get list() : Listitem[] {
        return this._list
    }

    load(): void {
      const storedList: string|null = localStorage.getItem('myList') 
      if (typeof storedList !== 'string') return

      const parsedList:{
        _id: string,
        _item:string,
        _checked:boolean
      }[]= JSON.parse(storedList)

      parsedList.forEach(itemObj =>{
        const newListitem = new Listitem(itemObj._id,itemObj._item,itemObj._checked)
        Fullist.instance.addItem(newListitem)
      })
    }
    save(): void {
        localStorage.setItem('myList',JSON.stringify(this._list))
    }
    clearList(): void {
        this._list = []
        this.save()
    }
    addItem(itemObj: Listitem): void {
        this._list.push(itemObj)
        this.save() 
    }
    removeItem(id: string): void {
       this._list = this._list.filter(item =>item.id !== id) 
       this.save()
    }
}