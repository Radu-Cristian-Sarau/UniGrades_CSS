import './TotalEctsPerYear.css'
import type { Stats } from '../utils/calculateStats'

interface TotalEctsPerYearProps {
  stats: Stats
}

export function TotalEctsPerYear({ stats }: TotalEctsPerYearProps) {
  const years = Object.keys(stats.ectsByYear)
    .map((y) => parseInt(y))
    .sort((a, b) => a - b)

  if (years.length === 0) {
    return null
  }

  const maxEcts = Math.max(...years.map((y) => stats.ectsByYear[y]))
  const sortedEntries = years.map((year) => ({
    year,
    ects: stats.ectsByYear[year],
  }))

  return (
    <div className="total-ects-per-year-container">
      <div className="chart-header">
        <h2>Total ECTS Per Year</h2>
      </div>
      <div className="chart-content">
        <div className="bars-container">
          {sortedEntries.map(({ year, ects }) => {
            const percentage = (ects / maxEcts) * 100
            return (
              <div key={`ects-year-${year}`} className={`bar-item year-${year}`}>
                <div className="bar-wrapper">
                  <div 
                    className="bar" 
                    style={{ height: `${percentage}%` }}
                  >
                    <span className="bar-value">{ects}</span>
                  </div>
                </div>
                <div className="bar-label">Year {year}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TotalEctsPerYear
