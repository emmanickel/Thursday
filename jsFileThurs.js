//  Apply the OOP principles you've learned to model an organisation's hierarchy,
//  the organisation has 3 levels of executive, managers, and workers.

// A worker should be able to tell you which manager they work for, and which executive is
// in charge of their division.

// A manager should be able to tell you who all their workers are, and which executive
// they work for.

// An executive should be able to tell you all their managers and what division they are
// responsible for.

// All staff should be able to tell you their staff ID and the day they started with the
// organisation. 

class Staff{
    constructor(name, staffId, startDate){
    this.name = name;
    this.staffId = staffId;
    this.startDate = startDate;
    }
    getStaffId(){
        return `${this.name}'s staff ID is ${this.staffId}.`;
    }
    getStartDate(){
        return `${this.name}'s start date is ${this.startDate}.`;
    }
}

class Worker extends Staff{
    constructor(name, staffId, startDate, manager, executive){
        super(name, staffId, startDate);
        this.manager = manager;
        this.executive = executive;
    }

    // A worker should be able to tell you which manager they work for, and which executive is
    // in charge of their division.
    getManager(){
        return `The manager of ${this.name} is ${this.manager}.`;
    }
    getExecutive(workerPerson){
        return `The manager of ${this.name} is ${this.executive}.`;
    }
}

class Manager extends Staff{
    constructor(name, staffId, startDate, executive, workers){
        super(name, staffId, startDate);
        this.executive = executive;
        this.workers = workers;
    }

    // Add to array of workers under a manager
    set workersAdd(workerName){
        this.workers.push(workerName);
        workerName = new Worker(workerName);
    }

    // A manager should be able to tell you who all their workers are, and which executive
    // they work for.
    getWorkers(){
        return `The workers managed by ${this.name} are: ${this.workers}.`;
    }
    getExecutive(){
        return `The executive of ${this.name} is ${this.executive}.`;
    }
}

class Executive extends Staff{
    constructor(name, staffId, startDate, managers, division){
        super(name, staffId, startDate);
        this.managers = managers;
        this.division = division;
    }

    // Add to array of managers under an executive
    set managersAdd(managerName){
        this.managers.push(managerName);
        managerName = new Manager(managerName);
    }

    // An executive should be able to tell you all their managers and what division they are
    // responsible for.
    getManagers(){
        return `The managers in ${this.name}'s division are: ${this.managers}.`;
    }
    getDivision(){
        return `The division ${this.name} is responsible for is ${this.division}.`;
    }
}

// Create some workers
let w1 = new Worker('Emma', 001, '15-07-22', 'Amy', 'Fred');

// Create some managers
let m1 = new Manager('Amy', 002, '15-07-22', 'Fred', ['Emma']);

// Create some executives
let e1 = new Executive('Fred', 003, '15-07-22', ['Amy'], 'Marketing');
let e2 = new Executive('John', 003, '18-07-22', ['Hayden'], 'Software');
let e3 = new Executive('Jane', 003, '11-07-22', ['Andrew'], 'Sales');

// Add new worker to a manager's team:
m1.workersAdd = 'Callum';

// Add a new manager to an executive's division:
e1.managersAdd = 'Robbie';

// Get the staff ID of any worker, manager or executive:
console.log(w1.getStaffId());
console.log(m1.getStaffId());
console.log(e1.getStaffId());

// Get the start date of any worker, manager or executive:
console.log(w1.getStartDate());
console.log(m1.getStartDate());
console.log(e1.getStartDate());

// A worker should be able to tell you which manager they work for, and which executive is
// in charge of their division.

console.log(w1.getManager());
console.log(w1.getExecutive());

// A manager should be able to tell you who all their workers are, and which executive
// they work for.

console.log(m1.getWorkers());
console.log(m1.getExecutive());

// An executive should be able to tell you all their managers and what division they are
// responsible for.

console.log(e1.getManagers());
console.log(e1.getDivision());
