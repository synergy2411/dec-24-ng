import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrl: './specification.component.css',
})
export class SpecificationComponent {
  productDesc!: string;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((query) => {
      this.productDesc = query['description'];
    });
  }
}
