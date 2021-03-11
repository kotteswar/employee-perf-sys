import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  saveEmployee() {
    const data = {
      title: this.employee.title,
      description: this.employee.description
    };

    this.employeeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newEmployee() {
    this.submitted = false;
    this.employee = {
      title: '',
      description: '',
      published: false
    };
  }

}
