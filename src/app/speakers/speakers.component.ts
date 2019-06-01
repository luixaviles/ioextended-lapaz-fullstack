import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Speaker, SpeakersService } from '../speakers.service';

@Component({
  selector: 'io-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  public speakers$: Observable<Speaker[]>;

  constructor(private speakersService: SpeakersService) { }

  ngOnInit() {
    this.speakers$ = this.speakersService.getSpeakers();
  }

}
