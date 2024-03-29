export interface item{
    id:string,
    item:string,
    checked:boolean
}

export default class Listitem implements item{

 constructor(
    private _id:string = '',
    private _item:string = '',
    private _checked:boolean = false,
    ){

    }
 get id():string{
        return this._id
    }
 set id(id:string){
    this._id=id
 }
 
 public get item() : string {
    return this._item
 }
 
 public set item(item : string) {
    this._item = item
 }
 
 public get checked() : boolean {
    return this._checked
 }
 
 public set checked(checked : boolean) {
    this._checked = checked;
 }

}