import { Employee } from './Employee'

export class EmployeeStatistics {
  private employees: Employee[];

  constructor(employees: Employee[]) {
    if (employees === null || employees === undefined) {
      throw new Error("A dolgozók megadása kötelező");
    }
    this.employees = employees;
  }

  private checkEmpty(): void {
    if (this.employees.length === 0) {
      throw new Error("Nincsenek dolgozók az adatbázisban");
    }
  }

  getAverageSalary(): number {
    this.checkEmpty();
    const total = this.employees.reduce((sum, e) => sum + e.salary, 0);
    return total / this.employees.length;
  }

  getMaxSalary(): number {
    this.checkEmpty();
    return Math.max(...this.employees.map((e) => e.salary));
  }

  getMinSalary(): number {
    this.checkEmpty();
    return Math.min(...this.employees.map((e) => e.salary));
  }

  getAverageAge(): number {
    this.checkEmpty();
    const total = this.employees.reduce((sum, e) => sum + e.age, 0);
    return total / this.employees.length;
  }

  getHighestPaidEmployee(): string {
    this.checkEmpty();
    return this.employees.reduce((prev, curr) =>
      curr.salary > prev.salary ? curr : prev
    ).name;
  }
}