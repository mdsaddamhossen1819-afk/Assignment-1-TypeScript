// problem-7  


// Create an Employee class and a Manager subclass following these exact specifications:

// Employee class:

// Has a protected property name (string) and a private property baseSalary (number).
// Constructor accepts (name: string, baseSalary: number) in that exact order.
// Has a method getDetails() that returns "Employee: [name], Base Salary: [baseSalary]".
// Manager class (extends Employee):

// Adds a private property department (string).
// Constructor accepts (name: string, baseSalary: number, department: string) in that exact order and calls super(name, baseSalary).
// Has a method getRoleInfo() that returns "Manager of [department]: [name]".
// Requirements:
// Use protected and private access modifiers as specified.
// Return the exact string formats shown in the sample output.




class Employee {
   protected name:string;
   private baseSalary:number;

    constructor(name:string, baseSalary:number){
        this.name=name,
        this.baseSalary=baseSalary
    }
    getDetails(){
        return `Employee: ${this.name} , Base Salary: ${this.baseSalary}`
    } 

}
class Manager extends Employee {
    private department : string
    constructor(name:string, baseeSalary:number, department:string){
        super(name,baseeSalary);
        this.department=department;
    
    }
    getRoleInfo(){
        return `Manager of ${this.department}: ${this.name}`
    }
}
const employee = new Employee("saddam", 1200,);
const manager = new Manager("karim", 30000, "It");

employee.getDetails();
manager.getRoleInfo();



console.log(employee);
console.log(manager);