import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  //Output the array to the app component
  @Output() navSearchResults = new EventEmitter<string[]>();
  searchResults:string[] = [];

  ngOnInit(): void {
  }

  //Create function for the submit click event
  onSearchClick(search:string) {
    //Push result to the local array
    this.searchResults.push(search);
    //Emit the event to the app component
    this.navSearchResults.emit(this.searchResults);
  }

}
