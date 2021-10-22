function bonus(input) {
  input = input.map(el => +el)
  let countStudents = input.shift();
  let totalLectures = input.shift();
  let initialBonus = input.shift();
  let maxBonus = 0;
  let maxLectures = 0;

  for (let i = 0; i < countStudents; i++) {
    let studentAttendance = input[i];
    let currentStudentBonus = studentAttendance / totalLectures * (5 + initialBonus);
    if (currentStudentBonus > maxBonus) {
      maxBonus = currentStudentBonus;
      maxLectures = studentAttendance;
    }
  }

  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${maxLectures} lectures.`)
}

bonus([
  '5', '25', '30',
  '12', '19', '24',
  '16', '20'
]
)