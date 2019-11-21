import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pets';
import { Toy } from '../../models/toys';
import { Router , ActivatedRoute} from '@angular/router';
import { map } from 'rxjs/operators';

import { PetService } from '../../services/pet.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-toy-create',
  templateUrl: './toy-create.component.html',
  styleUrls: ['./toy-create.component.css']
})
export class ToyCreateComponent implements OnInit {
  toy: Toy = new Toy();
  petId: string;

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router,

  ) {}

  ngOnInit() {
    this.route.paramMap
    .pipe(
      map(params => params.get('id'))
    )
    .subscribe( petId => {
      this.petId = petId;
    });
  }

  createToy(form: NgForm) {
    this.petService.createToy({...form.value, pet: this.petId})
    .subscribe( pet => {
      form.reset();
      console.log(pet);
      this.router.navigateByUrl('/pets/' + this.petId);
    });
  }
}
