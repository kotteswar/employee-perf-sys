import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

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
  employeeData: any;
  getEmployeeName: string;

  ngOnInit() {
    this.retrieveEmployees();
  }


  

  retrieveEmployees() {
    this.employeeService.getAll()
      .subscribe(
        data => {
          this.employeeData = data;
          for(let i=0; i < this.employeeData.length; i++){
            if(this.employeeData[i].performanceReviewStatus == true){
                  var getAssigneeObj = this.findObjectByKey(this.employeeData, "employeeReviewer", this.employeeData[i].employeeReviewer);
                  this.employeeData[i].employeeReviewer =  getAssigneeObj.employeeName;                
            }
          }
          this.employees = this.employeeData;
          console.log(this.employees);
        },
        error => {
          console.log(error);
        });
  }

  findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}
  
  refreshList() {
    this.retrieveEmployees();
  }

  displayedColumns: string[] = ['employeeId', 'employeeName', 'employeeDepartment','username','email','performanceReviewStatus','employeeReviewer','_id'];

 
}


