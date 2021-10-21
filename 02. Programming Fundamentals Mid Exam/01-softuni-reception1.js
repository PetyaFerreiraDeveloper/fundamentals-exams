function softuni(input) {
    let numberOfStudents = Number(input.pop());
    let studentsPerHour = input.map(el => +el)
    studentsPerHour = studentsPerHour.reduce((sum, el) => {
        return sum + el;
    }, 0)
    let time = 0;
    let breaks = 0;
    let numberStudentsAnswered = 0;

    while (numberStudentsAnswered < numberOfStudents) {
        numberStudentsAnswered += studentsPerHour;
        time++;
        if (time % 3 === 0) {
            breaks++;
        }
    }

    console.log(`Time needed: ${time+breaks}h.`);

}

softuni(['3','2','5','40'])