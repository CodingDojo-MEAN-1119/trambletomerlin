import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap} from 'rxjs/operators';
import { Pet} from 'src/app/models/pets';
import { PetService } from '../../services/pet.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

    pet: Pet;
    petService: PetService;

  constructor(
    private route: ActivatedRoute,
    private readonly petSerivce: PetService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      map(params => params.get('id')),
      switchMap(id => this.petSerivce.getPet(id)),
    )
    .subscribe(pet => {
      console.log('pet came from api', pet);
      this.pet = pet;
    });
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    this.petService.updatePet(this.pet)
      .subscribe(createdPet => {
        console.log(createdPet);
        this.pet = new Pet();
        form.reset();

        this.router.navigateByUrl('/');
      });
  } 
}
