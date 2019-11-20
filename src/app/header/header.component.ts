import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
