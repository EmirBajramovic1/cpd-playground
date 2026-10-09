const students = [
{ id: 1, name: "Amina", year: 3, grades: [9, 8, 10],
contact: { github: "amina-dev" } },
{ id: 2, name: "Emir", year: 2, grades: [6, 7, 7] },
{ id: 3, name: "Lejla", year: 3, grades: [10, 9, 9],
contact: { github: "lejla-codes" } },
{ id: 4, name: "Tarik", year: 3, grades: [7, 6, 8] },
];

// Task 5. Greeting Function
const greet = (student) => {
    // student.forEach(s => console.log(`Hi ${s.name}, you are in year ${s.year}`));
    student.forEach(({ name, year }) => console.log(`Hi ${name}, you are in year ${year}`));
}
greet(students);


// Task 6. List of Names
const studentsArr = students.map(s => s.name);
console.log(studentsArr);

// Task 7. Third-Year Students
const thirdYearStudents = students.filter(({year}) => year === 3).map(s => s.name);
console.log(thirdYearStudents);

// Task 8. Average Grades
function average(grades) {
    return  grades.map(s => {
        let average = (s.grades.reduce((acc, cur) => (acc + cur)) / s.grades.length).toFixed(2);
        return {...s, average};
    });
}

const studentsAvg = average(students);
studentsAvg.forEach(s => console.log(`${s.name}: ${s.average}`));

// Task 9. Promote Emir
const emirPromotion = students.map(s => {
    if(s.name === 'Emir') {
        return {...s, year: 3}
    };
    return s;
});

console.log(`Original: ${students[1].name} is in year ${students[1].year}`);
console.log(`Updated: ${emirPromotion[1].name} is in year ${emirPromotion[1].year}`);

// Task 10. GitHub Usernames
students.forEach(s => console.log(`${s.name}: ${s.contact?.github ?? 'no GitHub'}`));

// Task 11. Load a User from an API
async function loadUser(id) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await res.json();
        console.log(`User ${user.id}: ${user.name}`);
    } catch(err) {
        console.log(`Could not load user ${id}`)
    }
}
loadUser(1);
