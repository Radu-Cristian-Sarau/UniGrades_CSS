import './MetricsTable.css'
import type { Stats } from '../utils/calculateStats'

interface MetricsTableProps {
  stats: Stats
}

export function MetricsTable({ stats }: MetricsTableProps) {
  return (
    <table className="metrics-table">
      <thead>
        <tr>
          <th>Metric</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="metric-label">Average Grade</td>
          <td className="metric-value">{stats.averageGrade.toFixed(2)}</td>
        </tr>
        <tr>
          <td className="metric-label">ECTS-Weighted Average</td>
          <td className="metric-value">{stats.ectsWeightedAverage.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default MetricsTable
