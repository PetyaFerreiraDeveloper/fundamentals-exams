function softuni(input) {
    let numberOfStudents = Number(input.pop());
    let studentsPerHour = input.map(el => +el)
    studentsPerHour = studentsPerHour.reduce((sum, el) => {
        return sum + el;
    }, 0)
    let time = 0;

    while (numberOfStudents > 0) {
        time++;

        if (time % 4 === 0) {
            continue;
        }
        numberOfStudents -= studentsPerHour;
    }
    console.log(`Time needed: ${time}h.`);
}

softuni(['5','6','4','20'])