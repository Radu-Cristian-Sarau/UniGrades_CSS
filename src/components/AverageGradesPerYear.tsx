import './AverageGradesPerYear.css'
import type { Stats } from '../utils/calculateStats'

interface AverageGradesPerYearProps {
  stats: Stats
}

export function AverageGradesPerYear({ stats }: AverageGradesPerYearProps) {
  const years = Object.keys(stats.gradesByYear)
    .map((y) => parseInt(y))
    .sort((a, b) => a - b)

  if (years.length === 0) {
    return null
  }

  const maxGrade = 10
  const sortedEntries = years.map((year) => ({
    year,
    avg: stats.gradesByYear[year].avg,
  }))

  return (
    <div className="avg-grades-per-year-container">
      <div className="chart-header">
        <h2>Average Grades Per Year</h2>
      </div>
      <div className="chart-content">
        <div className="bars-container">
          {sortedEntries.map(({ year, avg }) => {
            const percentage = (avg / maxGrade) * 100
            return (
              <div key={`year-${year}`} className={`bar-item year-${year}`}>
                <div className="bar-label">Year {year}</div>
                <div className="bar-wrapper">
                  <div 
                    className="bar" 
                    style={{ width: `${percentage}%` }}
                  >
                    <span className="bar-value">{avg.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AverageGradesPerYear
