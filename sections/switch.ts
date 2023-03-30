
export let weekday: number = 0; // 1 = Lunes, 2 = Martes,

if (weekday <= 0) {
    throw new Error('Dia de la semana no permitido')
}
switch (weekday) {

    case 1:
        console.log('Es lunes');
        break;
    case 2:
        console.log('Es martes');
        break;
    case 3:
        console.log('Es miercoles');
        break;

    default:
        console.log('No es lunes, martes o miercoles')
}