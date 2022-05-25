import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAdmLoggedIn : Observable<boolean> | undefined;
  isCustLoggedIn : Observable<boolean> | undefined;
  public isAccessible : any;
  public searchItem : string = '';
  public searchFilter : any = '';

  constructor(private router : Router, private authService : AuthserviceService, private userSrc : UserService) { }

  ngOnInit(): void {
    this.isAdmLoggedIn = this.authService.isAdmLoggedIn;
    // if(this.isAdmLoggedIn == true)
    console.log(this.isAdmLoggedIn);
    console.log("Admin Navbar");
    
    this.isCustLoggedIn = this.authService.isCustLoggedIn;
    // if(this.isCustLoggedIn == true)
    console.log(this.isCustLoggedIn);
    console.log("Buyer Navbar");
  }
  onSubmit(event : any){
    this.searchItem = (event.target as HTMLInputElement).value;
    console.log(this.searchFilter);
    this.router.navigateByUrl("/item-page/dairyproducts");
    
  }
  
  search(event : any){
    this.searchItem = (event.target as HTMLInputElement).value;
    console.log(this.searchItem);
    
  }

  onLogout(){
    this.authService.logout();
    console.log("Clear Role "+sessionStorage.getItem('userRole'));
    
  }

}
