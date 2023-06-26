import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./app.component.css'],
})
export class EmployeeComponent {
  employees: Employee[] = [
    new Employee(101, 'Scott', 'Developer', 0, 'Fulltime'),
    new Employee(102, 'Smith', 'Sr.Developer', 0, 'Contractor'),
    new Employee(103, 'Allen', 'Tester', 0, 'Fulltime'),
    new Employee(104, 'John', 'Architect', 0, 'Fulltime'),
    new Employee(105, 'Bob', 'Developer', 0, 'Contractor'),
  ];

  searchInput = 0;

  searchedEmployee: Employee | null = null;

  searchEmployee(empId: number) {
    this.searchedEmployee =
      this.employees.find((employee) => empId == employee.empId) || null;
    console.log(this.searchedEmployee);
    return this.searchedEmployee;
  }

  clearSearch() {
    this.searchInput = 0;
    this.searchedEmployee = null;
  }
}
