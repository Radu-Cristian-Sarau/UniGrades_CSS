import { useMemo } from 'react'
import type { Course } from '../utils/calculateStats'
import './GradesTable.css'

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
  )
}

export default GradesTable
