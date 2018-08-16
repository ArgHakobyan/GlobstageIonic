import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from './user.service';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and ////navigation.
 */


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formgroup: FormGroup;
  formgroupLog: FormGroup;
  
  public isRegister = true;
  public isLogin = false;
  public fname;
  public lname;
  public email;
  public password;
  public password_first;
  public password_second;
  public user_id;
  public id;
  public lastname;
  public name;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userService: UserService,
    private storage: Storage,
    public formbuilder: FormBuilder,
  ) {
      this.formgroup = formbuilder.group({
        name:['',Validators.required],
        lastname:['',Validators.required],
        email:['',Validators.required],
        password_first:['',Validators.required],
        password_second:['',Validators.required],
      });

      this.formgroupLog = formbuilder.group({
        email:['',Validators.required],
        password:['',Validators.required],
      });

      this.name = this.formgroup.controls['name'];
      this.lastname = this.formgroup.controls['lastname'];
      this.email = this.formgroup.controls['email'];
      this.password_first = this.formgroup.controls['password_first'];
      this.password_second = this.formgroup.controls['password_second'];
      this.email = this.formgroupLog.controls['email'];
      this.password = this.formgroupLog.controls['password'];
      

  }
  

  ionViewDidLoad() {
  //   this.formgroup = new FormGroup({  
  //     name: new FormControl(),
  //  }); 

    console.log('ionViewDidLoad LoginPage');
    this.storage.get('current_user').then((user) => {
        if(user){
          this.userService.login({email: user.email, password: user.pass}).subscribe(
            (jwt: any) => {
            if(!!jwt.success){
              user.jwtToken = jwt.jwtToken;
              this.storage.set('current_user', user).then(()=>{
                this.navCtrl.push('ProfilePage');
              });
            }
          });
        }
      });
  }
   
  openLogin(){
    this.isRegister = false;
    this.isLogin = true;
  }

  openRegister(){
    this.isRegister = true;
    this.isLogin = false;
  }

  registerAction(){
    let user = {name: '', lastname: '', email:'', password_first:'', password_second:'', id: '', jwtToken: ''} ;
    user.name = this.formgroup.controls['name'].value;
    user.lastname = this.formgroup.controls['lastname'].value;
    user.email = this.formgroup.controls['email'].value;
    user.password_first = this.formgroup.controls['password_first'].value;
    user.password_second = this.formgroup.controls['password_second'].value;
    console.log(user);

    this.userService.register(user).subscribe((jwt) => {
      if(!!jwt){
        user.jwtToken = jwt.jwtToken;
        user.id = jwt.user_id;
        this.storage.set('current_user', user).then( ()=> {
          this.navCtrl.push('ProfilePage');
        })
       }
    });
  }
  loginAction(){
    let user = {email: '', password: '', user_id: '', jwtToken: ''};
    user.email = this.formgroupLog.controls['email'].value;
    user.password = this.formgroupLog.controls['password'].value;
    user.user_id = this.user_id;

    console.log(user);
    this.userService.login(user).subscribe(
      (jwt:any) => {
        console.log(jwt);
        
      if(!!jwt){
        user.jwtToken = jwt.jwtToken;
        user.user_id = jwt.user_id;
        this.storage.set('current_user', user).then( ()=> {
          this.navCtrl.push('ProfilePage');
        })
        console.log(user);
      }

    });
    
  }


}
