import {Pipe} from "@angular/core";
import {TodoModel} from "./todo-model";

@Pipe({
  name:"search"

})
export class SearchPipe{
  transform(value:Array<TodoModel>){
    return value.filter((item)=> item.title.startsWith('s'));
  }
}
