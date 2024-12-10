import { Pipe, PipeTransform } from '@angular/core';

interface Todo {
  label: string;
  status: string;
}

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(todoCollection: Array<Todo>, filteredStatus: string): Array<Todo> {
    if (filteredStatus === '') {
      return todoCollection;
    }

    let resultArray = [];
    for (let todo of todoCollection) {
      if (todo.status === filteredStatus) {
        resultArray.push(todo);
      }
    }
    return resultArray;
  }
}
