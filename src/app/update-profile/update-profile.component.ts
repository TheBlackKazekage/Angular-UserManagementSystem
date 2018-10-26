import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  // Emit an event when a file has been picked. Here we return the file itself
  @Output() whenChange: EventEmitter<File> = new EventEmitter<File>();
  // Uses FileReader to read the file from the input
  source = '';
  constructor() {}

  // If the input has changed(file picked) we project the file into the img previewer
  updateSource($event: Event) {
    // We access he file with $event.target['files'][0]
    this.projectImage($event.target['files'][0]);
  }
  projectImage(file: File) {
    const reader = new FileReader;
    // TODO: Define type of 'e'
    reader.onload = (e: any) => {
      // Simply set e.target.result as our <img> src in the layout
      this.source = e.target.result;
      this.whenChange.emit(file);
    };
    // This will process our file and get it's attributes/data
    reader.readAsDataURL(file);
  }

  ngOnInit(): void {
  }
}
