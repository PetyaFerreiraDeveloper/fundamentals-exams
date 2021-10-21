function softuni(input) {
    let totalHours = 0;
    let breaks = 0;
    let numberStudents = Number(input.pop());
    input = input.map(el => +el);
    let studentAnswersPerHour = input.reduce((sum, el) => {
        return sum + el;
    }, 0)
    let answeredStudents = 0;
    
    for (let i = 0; i <= numberStudents; i += studentAnswersPerHour) {
        answeredStudents += studentAnswersPerHour
        
        if (answeredStudents === numberStudents) {
            break;
        }
        totalHours++;
        if (totalHours % 3 === 0) {
            breaks++
        }
        
    }
    console.log(`Time needed: ${totalHours + breaks}h.`)
}

softuni(['3','2','5','40'])