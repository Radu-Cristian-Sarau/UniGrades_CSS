import { useMemo } from 'react'
import './GradesTable.css'

export interface Course {
  name: string
  year: number
  grade: number
  ects: number
}

interface GradesTableProps {
  courses?: Course[]
  onAddCourse?: (course: Course) => void
  onDeleteCourse?: (name: string) => void
}

export function GradesTable({ courses = [] }: GradesTableProps) {
  // Sort courses by year
  const sortedCourses = useMemo(() => {
    return [...courses].sort((a, b) => a.year - b.year)
  }, [courses])

  // Calculate statistics
  const stats = useMemo(() => {
    if (sortedCourses.length === 0) {
      return {
        averageGrade: 0,
        totalECTS: 0,
        ectsWeightedAverage: 0,
        gradesByYear: {} as Record<number, { avg: number; count: number }>,
        ectsByYear: {} as Record<number, number>,
      }
    }

    let totalGrade = 0
    let totalECTS = 0
    let ectsWeightedSum = 0
    const gradesByYear: Record<number, { avg: number; count: number }> = {}
    const ectsByYear: Record<number, number> = {}

    sortedCourses.forEach((course) => {
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
      averageGrade: totalGrade / sortedCourses.length,
      totalECTS,
      ectsWeightedAverage: totalECTS > 0 ? ectsWeightedSum / totalECTS : 0,
      gradesByYear,
      ectsByYear,
    }
  }, [sortedCourses])

  // Sample data if no courses provided
  const displayCourses =
    sortedCourses.length > 0
      ? sortedCourses
      : [
          { name: '2IT60_Logic_and_Set_Theory', year: 1, grade: 10, ects: 5 },
          { name: '2IP90_Programming', year: 1, grade: 8, ects: 5 },
          { name: '2IRR40_Security', year: 2, grade: 6, ects: 5 },
          { name: '2IT85_Data_Structures', year: 3, grade: 8, ects: 5 },
        ]

  return (
    <div className="grades-table-container">
      <div className="grades-header">
        <h2>Grades Overview</h2>
      </div>

      <div className="grades-content">
        {/* Main Table */}
        <div className="table-wrapper">
          <table className="grades-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Year</th>
                <th>Grade</th>
                <th>ECTS</th>
              </tr>
            </thead>
            <tbody>
              {displayCourses.map((course, index) => (
                <tr key={course.name} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td className="course-name">{course.name}</td>
                  <td className="course-year">{course.year}</td>
                  <td className="course-grade">{course.grade.toFixed(1)}</td>
                  <td className="course-ects">{course.ects}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Statistics Panel */}
        <div className="statistics-panel">
          <div className="stats-section">
            <h3>Statistics</h3>
            <div className="stat-item">
              <span className="stat-label">Average Grade:</span>
              <span className="stat-value">{stats.averageGrade.toFixed(2)}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">ECTS-Weighted Avg:</span>
              <span className="stat-value">{stats.ectsWeightedAverage.toFixed(2)}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Total ECTS:</span>
              <span className="stat-value">{stats.totalECTS}</span>
            </div>
          </div>

          {/* Per-Year Statistics */}
          {Object.keys(stats.gradesByYear).length > 0 && (
            <div className="stats-section">
              <h3>Per-Year Averages</h3>
              {Object.entries(stats.gradesByYear)
                .sort(([yearA], [yearB]) => parseInt(yearA) - parseInt(yearB))
                .map(([year, data]) => (
                  <div key={`year-${year}`} className="stat-item">
                    <span className="stat-label">Year {year}:</span>
                    <span className="stat-value">{data.avg.toFixed(2)}</span>
                    <span className="stat-ects">({stats.ectsByYear[parseInt(year)]} ECTS)</span>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GradesTable
