import {Pipe} from "@angular/core";
import {TodoModel} from "./todo-model";

@Pipe({
  name:"started"

})
export class StartedPipe{
  transform(value:Array<TodoModel>){
    return value.filter((item)=> item.status === "started");
  }
}
