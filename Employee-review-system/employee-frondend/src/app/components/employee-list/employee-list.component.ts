import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


/**
 * @title Basic use of `<table mat-table>`
 */
 @Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

constructor(private employeeService: EmployeeService) { }

  employees: any;

  ngOnInit() {
    this.retrieveEmployees();
  }

  retrieveEmployees() {
    this.employeeService.getAll()
      .subscribe(
        data => {
          this.employees = data;
          
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
  refreshList() {
    this.retrieveEmployees();
  }

  displayedColumns: string[] = ['employeeId', 'employeeName', 'employeeDepartment','username','email','performanceReviewStatus','employeeReviewer'];
  
}


