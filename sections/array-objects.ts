export interface Person{
    name: string;
    age: number;
    isActive: boolean;
}

let fernando: Person = {
    name: "Fernando",
    age: 36,
    isActive: false
}
let melissa: Person = {
    name: "Melissa",
    age: 30,
    isActive: false
}
let juan: Person = {
    name: "Juan",
    age: 42,
    isActive: false
}

let people: Person[] = [fernando, melissa, juan]
for( let i = 0; i < people.length; i++){
    let person = people[i]
    console.log(person.name + ' ' + person.age)
}