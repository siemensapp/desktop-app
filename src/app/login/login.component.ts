import { Component, OnInit } from '@angular/core';
import { DataRetrieverService } from '../data-retriever.service';
import { url } from '../../assets/js/variables';
import { Router } from '@angular/router';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: DataRetrieverService, private router: Router) { }

  login() {
    var user = (<HTMLInputElement>document.getElementById("email")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    var data = JSON.stringify({user: user, password: password});
    Swal.showLoading();
    this.httpClient.postData( url + '/api/loginDesktop', data).then( result => {
      //Swal.close();
      if (!result.hasOwnProperty('token')) Swal.fire({type: "error", title: "Error", text: String(result)});
      else {
        // Saves user Email
        
        
        localStorage.setItem('user', result['user']);

        Swal.fire({type: "success", title: "Exito", text: 'Inicio de sesiòn exitoso.'})
          .then(() => { 
            console.log('going home')
            this.router.navigate(['home/workers']) 
          });
      }
    })
    
  }

  ngOnInit() {
  }

}