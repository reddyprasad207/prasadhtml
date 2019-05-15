import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class AppServices{
    constructor(private http:HttpClient){ 

    }
    public users: any = [];

    getUsers(){
        if(this.users.length){
            return new Observable(Subscriber=>{
                res => {
                    Subscriber.next(this.users)
                }
            })
        }
        return new Observable(Subscriber => {
            this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(
                res => {
                    this.users =res;
                    Subscriber.next(res);
                    Subscriber.complete();
                },
                error => {
                    console.log(error);
                }
                
            )
        })
    }
}