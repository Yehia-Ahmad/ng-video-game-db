import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/Services/api.service';
import { Component, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { APIResponse, Game } from 'src/app/models';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  constructor(private router: Router, private api: ApiService) {}

  onsubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
  }
}
