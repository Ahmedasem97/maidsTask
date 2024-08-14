import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true,

})
export class SearchPipe implements PipeTransform {

  transform(array: any, searchTerm:string ): any {
    let nameFiltration = array.filter((user:any) => {
      return user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    }); 
    return nameFiltration
  }

}
