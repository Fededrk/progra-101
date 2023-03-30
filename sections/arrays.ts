

export let employees: string[] = ['Fernando', 'Melissa', 'Eduardo', 'Aiton', 'Fede'];
export let salaries: number[] = [1500,2400,3200]


for(let i = 0; i < employees.length; i++){

   console.log(employees[i],'tiene un salario de :$',salaries[i]);
}