import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit{


  constructor() { }

  ngOnInit(): void {
  }
  onButtonClick(buttonName: string) {
    alert(`Clicked ${buttonName}`);
  }

  showForm: boolean = false;

  showCreateForm() {
    this.showForm = true;
  }

  onFormSubmit(form: any) {
    // Handle form submission logic here
    console.log('Form submitted:', form.value);

    // Reset the form and hide it
    form.resetForm();
    this.showForm = false;
  }



  
}
