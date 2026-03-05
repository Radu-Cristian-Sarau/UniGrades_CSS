export interface Course {
  name: string
  year: number
  grade: number
  ects: number
}

export interface Stats {
  averageGrade: number
  totalECTS: number
  ectsWeightedAverage: number
  gradesByYear: Record<number, { avg: number; count: number }>
  ectsByYear: Record<number, number>
}

export function calculateStats(courses: Course[]): Stats {
  if (courses.length === 0) {
    return {
      averageGrade: 0,
      totalECTS: 0,
      ectsWeightedAverage: 0,
      gradesByYear: {},
      ectsByYear: {},
    }
  }

  let totalGrade = 0
  let totalECTS = 0
  let ectsWeightedSum = 0
  const gradesByYear: Record<number, { avg: number; count: number }> = {}
  const ectsByYear: Record<number, number> = {}

  courses.forEach((course) => {
    totalGrade += course.grade
    totalECTS += course.ects
    ectsWeightedSum += course.grade * course.ects

    // Group by year
    if (!gradesByYear[course.year]) {
      gradesByYear[course.year] = { avg: 0, count: 0 }
    }
    gradesByYear[course.year].avg += course.grade
    gradesByYear[course.year].count += 1

    if (!ectsByYear[course.year]) {
      ectsByYear[course.year] = 0
    }
    ectsByYear[course.year] += course.ects
  })

  // Calculate averages
  Object.keys(gradesByYear).forEach((year) => {
    gradesByYear[parseInt(year)].avg /= gradesByYear[parseInt(year)].count
  })

  return {
    averageGrade: totalGrade / courses.length,
    totalECTS,
    ectsWeightedAverage: totalECTS > 0 ? ectsWeightedSum / totalECTS : 0,
    gradesByYear,
    ectsByYear,
  }
}
