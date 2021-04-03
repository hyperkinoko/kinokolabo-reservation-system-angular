import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Reservation} from '../../models/reservation';

@Component({
  selector: 'app-reservation-list-item',
  templateUrl: './reservation-list-item.component.html',
  styleUrls: ['./reservation-list-item.component.scss']
})
export class ReservationListItemComponent implements OnInit {
  @Input() reservation: Reservation;

  constructor() { }

  ngOnInit(): void {
    // ダミーデータを入れる
    this.reservation = {
      actualEnd: 0,
      actualStart: 0,
      end: 0,
      id: '',
      meetingUrl: '',
      price: 0,
      start: 0,
      studentId: ''
    };
  }

}
