function bonus(input) { // with this solution one possible case is missing and i dont get the full points, but cant figure out why
    input = input.map(el => +el)
    input.shift();
    let numLectures = input.shift();
    let extraBonus = input.shift();
    
    input = input.sort((a, b) => b - a);
    
    let studentAttendance = input[0];
    let totalBonus = studentAttendance / numLectures * (5 + extraBonus); // the highest bonus will be at the highest input[i];
    console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
    console.log(`The student has attended ${studentAttendance} lectures.`);
}

bonus([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  
  )