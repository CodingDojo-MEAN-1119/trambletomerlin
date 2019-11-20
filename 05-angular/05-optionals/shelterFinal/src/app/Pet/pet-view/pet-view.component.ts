import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { Pet } from '../../models/pets';
import { PetService } from '../../services/pet.service';


@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.component.html',
  styleUrls: ['./pet-view.component.css']
})
export class PetViewComponent implements OnInit {
  @Input()
  pet: Pet;
  pets: Pet [] = [];

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
        switchMap(id => this.petService.getPet(id)),
      )
      .subscribe(pet  => {
        console.log('Pet from api', pet);
        this.pet = pet;
      });
  }
  onDelete(event: Event, id: string ) {
    event.stopPropagation();
    this.petService.removePet(id)
    .subscribe( deletedPet => {
        this.pets = this.pets.filter( pet => id !== pet._id);
        console.log('this pet is deleted');
        this.router.navigateByUrl('/');
    });

  }
  onEvent(pet: Pet): void {
    // tslint:disable-next-line: deprecation
    event.stopPropagation();
  }
}
