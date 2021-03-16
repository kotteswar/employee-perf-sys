import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  //employeeFormGroup = null;
  employeeFormGroup: FormGroup;
  message = '';
  userNameList = [];
  roles = [
    { id : '0', roleName: 'user'},
    { id : '1', roleName: 'admin'}
  ];

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.message = '';
    this.retrieveEmployees();
    this.getEmployee(this.route.snapshot.paramMap.get('id'));

    this.employeeFormGroup = this.fb.group({
      employeeId : new FormControl('', [Validators.required]),
      employeeName : new FormControl('', [Validators.required]),
      employeeDepartment : new FormControl('', [Validators.required]),
      performanceReviewStatus : new FormControl({ value: "", disabled: true }, []),
      username : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required]),
      employeeReviewer: new FormControl(''),
      _id: new FormControl(''),
      roles: new FormControl('')
    });
    
  }


  getEmployee(id) {
    this.employeeService.get(id)
      .subscribe(
        data => {
          console.log(data);
          let employee : any = data;
          this.employeeFormGroup.controls.employeeId.setValue(employee.employeeId);
          this.employeeFormGroup.controls.employeeName.setValue(employee.employeeName);
          this.employeeFormGroup.controls.employeeDepartment.setValue(employee.employeeDepartment);
          this.employeeFormGroup.controls.performanceReviewStatus.setValue(employee.performanceReviewStatus);
          this.employeeFormGroup.controls.username.setValue(employee.username);
          this.employeeFormGroup.controls.email.setValue(employee.email);
          this.employeeFormGroup.controls.employeeReviewer.setValue(employee.employeeReviewer);
          this.employeeFormGroup.controls.password.setValue(employee.password);
          this.employeeFormGroup.controls._id.setValue(employee._id);
          this.employeeFormGroup.controls.roles.setValue(employee.roles);
          this.employeeFormGroup.controls.employeeReviewer.setValue(employee.employeeReviewer);
          this.userNameList = this.userNameList.filter(function(value, index, arr){ 
            if(value.id != employee._id) {
              return value;
            }
        });
        },
        error => {
          console.log(error);
        });
  }

  retrieveEmployees() {
    this.employeeService.getAll()
      .subscribe(
        data => {
          let employees : any = data;
          for (let employee of employees) {
            const employeeData = {"id": employee._id, "employeeName": employee.employeeName }
            this.userNameList.push(employeeData);
          }
        },
        error => {
          console.log(error);
        });
  }


  updateEmployee() {

    let data = this.employeeFormGroup.value;
    var employeeDetailsData ={
      employeeId: data.employeeId,
      employeeName: data.employeeName,
      employeeDepartment: data.employeeDepartment,
      performanceReviewStatus: data.employeeReviewer ? true : false,
      username: data.username,
      email: data.email,
      password: data.password,
      employeeReviewer: data.employeeReviewer ? data.employeeReviewer : "",
      roles: data.roles
    }
    this.employeeService.update(data._id, employeeDetailsData)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(["/employees"]);
          this.message = 'The employee was updated successfully!';
          
        },
        error => {
          console.log(error);
        });
  }

  // deleteEmployee() {
  //   this.employeeService.delete(this.employeeFormGroup.id)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.router.navigate(['/employees']);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
}
