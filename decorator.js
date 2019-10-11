var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var NewPerson = /** @class */ (function () {
    function NewPerson() {
        console.log('Hi!');
    }
    NewPerson = __decorate([
        logged,
        __metadata("design:paramtypes", [])
    ], NewPerson);
    return NewPerson;
}());
// Factory
function logging(value) {
    return value ? logged : null;
}
var NewCar = /** @class */ (function () {
    function NewCar() {
    }
    NewCar = __decorate([
        logging(true)
    ], NewCar);
    return NewCar;
}());
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var NewPlant = /** @class */ (function () {
    function NewPlant() {
        this.name = "Green Plant";
    }
    NewPlant = __decorate([
        logging(true),
        printable
    ], NewPlant);
    return NewPlant;
}());
var newPlant = new NewPlant();
newPlant.print();
// method decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
var NewProject = /** @class */ (function () {
    function NewProject(name) {
        this.projectName = name;
    }
    NewProject.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        editable(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NewProject.prototype, "calcBudget", null);
    return NewProject;
}());
var newNewProject = new NewProject("Super project");
newNewProject.calcBudget();
newNewProject.calcBudget = function () {
    console.log(2000);
};
newNewProject.calcBudget();
