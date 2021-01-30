import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  @Output() changed = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

}
