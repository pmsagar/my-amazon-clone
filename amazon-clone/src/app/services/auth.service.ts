import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:any;
  constructor(private fireBaseAuth:AngularFireAuth, private ngZone:NgZone,
    private router:Router) { 
      this.fireBaseAuth.authState.subscribe((user)=>{
        if(user)
        {
          this.userData = user;
          localStorage.setItem('user',this.userData.email);
        }
      })
    }

    signIn(email,password){
return this.fireBaseAuth.signInWithEmailAndPassword(email,password)
.then((result)=> {
  this.router.navigateByUrl('/');
}).catch((error)=>{window.alert(error.message)})
    }

    signUp(email,password){
return this.fireBaseAuth.createUserWithEmailAndPassword(email,password)
.then((result)=> {
  this.router.navigateByUrl('/')
}).catch((error)=>{
  window.alert(error.message);
})
    }

    signOut(){
      return this.fireBaseAuth.signOut()
      .then((result)=>{
        localStorage.removeItem('user');
         this.router.navigateByUrl('login');
      })
    }

    isLoggedIn(){
      const user = localStorage.getItem('user');
      return user? true: false;
    }

    getUser(){
      const user = localStorage.getItem('user');
      return user? user:null;
    }
}
