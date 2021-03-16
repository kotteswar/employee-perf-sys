import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { EmployeeService } from 'src/app/services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeFormGroup: FormGroup;
  roles = [
    { id : '0', roleName: 'user'},
    { id : '1', roleName: 'admin'}
  ];
  submitted = false;
  employee: any;
  userNameList = [];
  constructor(private employeeService: EmployeeService, private router: Router,private authService: AuthService, private fb: FormBuilder)  { }

  ngOnInit() {

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

    this.retrieveEmployees();

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

  saveEmployee() {
    let data = this.employeeFormGroup.value;
    let employeeDetailsData ={
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
    let userUpdateData = {
      username: data.username,
      email: data.email,
      password: data.password,
      roles: data.roles
    }

    this.employeeService.create(employeeDetailsData)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
     this.authService.register(userUpdateData).subscribe(
      response => {
        this.router.navigate(["/employees"]);
      },
      error => {
        console.log(error);
      });;   
  }

  

  newEmployee() {
    this.submitted = false;
    this.employee = {
      employeeId: "",
      employeeName: "",
      employeeDepartment: "",
      performanceReviewStatus: false,
      username: "",
      email: "",
      password: "",
      employeeReviewer: "",
      roles: ""
    };
  }

}
