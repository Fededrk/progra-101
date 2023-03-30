
export let person = {
    name: 'Melissa',
    age: 30,
    isActive: true,
    hobbies: ['soccer', 'baseball'],
    toString() {
        let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log(objectString)
    }
}
// console.log(person.name.toUpperCase())
person.toString();


// metodos son funciones que se encuentran dentro de un objeto


let car = {
    doors: 5,
    brand: 'Honda',
    color: 'White',
    year: 2025,
    gearbox: 'manual'
}

let smarTv = {
    sizeInches: 90,
    brand:'Samsung',
    year: '2015',
    type: 'Led'
}
let youtubeVideo = {
    length: 3600,
    author: 'Fernando Herrera',
    comments: ['Buen video', 'Me gusto mucho', 'el peor video de todos'],
    likes: 1500,
    dislikes: 100,
}

console.log(car)
console.log(smarTv)
console.log(youtubeVideo)