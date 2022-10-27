function alumnos(name,lastname,age,grade){
    this.name = name;
    this.lastname=lastname;
    this.age=age;
    this.grade=grade;
}

const listStudent = [];
const numStudent = prompt("Cuantos alumnos va registrar");

for (let index = 0; index < numStudent; index++) {

    const name = prompt(`Ingrese el nombre del estudiante ${index+1}`);
    const lastname = prompt(`Ingrese el apellido del estudiante ${name}`); 
    const age = prompt(`Ingrese la edad del estudiante ${name+" "+lastname}`);
    const grade = prompt(`Ingrese el grado del estudiante ${name+" "+lastname}`);

    listStudent.push( new alumnos(name,lastname,age,grade));

}
console.log(listStudent);