import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {map} from 'rxjs/operators';


@Injectable()
export class UsersService {

  size = 8;

  constructor(private http: Http){}

    getUsers() {
      return this.http.get('https://randomuser.me/api/?nic=gender,name,picture,location&results='+ this.size +'&nat=gb')
        .pipe(map(response => response.json()))
        .pipe(map(response => response.results))
        .pipe(map(users => users.map(user => {
          return{
            name: user.name.first + ' ' + user.name.last,
            image: user.picture.large,
            geo: user.location.city + ' ' + user.location.state + ' ' + user.location.street
          }
        })))
  }

  setSize(size){
    this.size = size;
  }

  users = [
    {name: 'WFM 1'},
    {name: 'WFM 2'},
    {name: 'WFM 3'},
    {name: 'WFM 4'},
    {name: 'WFM 5'},
    {name: 'WFM 6'}
  ]

}
