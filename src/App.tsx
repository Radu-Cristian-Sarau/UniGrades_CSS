import { useMemo } from 'react'
import Header from './components/Header'
import GradesTable from './components/GradesTable'
import MetricsTable from './components/MetricsTable'
import AverageGradesPerYear from './components/AverageGradesPerYear'
import TotalEctsPerYear from './components/TotalEctsPerYear'
import TotalEctsBar from './components/TotalEctsBar'
import { type Course, calculateStats } from './utils/calculateStats'
import './App.css'

function App() {
  const [courses] = useMemo(() => [
    [
      { name: '2IT60_Logic_and_Set_Theory', year: 1, grade: 10, ects: 5 },
      { name: '2WBB0_Calculus_II', year: 1, grade: 8, ects: 5 },
      { name: '2IP90_Programming', year: 1, grade: 8, ects: 5 },

      { name: '2DRR00_Linear_Algebra_and_Applications', year: 1, grade: 7, ects: 5 },
      { name: '2IT80_Discrete_Structures', year: 1, grade: 7, ects: 5 },
      { name: '2IAB1_Foundations_of_Data_Analytics', year: 1, grade: 7, ects: 5 },
      
      { name: '2DRR10_Probability_and_Statistics_for_CS', year: 1, grade: 6, ects: 5 },
      { name: '2IC30_Computer_Systems', year: 1, grade: 6, ects: 5 },
      { name: '2IL50_Data_Structures', year: 1, grade: 6, ects: 5 },
      
      { name: '2IRR00_Software_Design', year: 1, grade: 7, ects: 5 },
      { name: '2IO75_CBL_Embdedded_Systems', year: 1, grade: 6, ects: 5 },
      { name: '0LVX10_ITEC_Ethics_of_Technology_and_Engineering', year: 1, grade: 7, ects: 5 },
      
      { name: '2IRR20_Networks', year: 2, grade: 8, ects: 5 },
      { name: '2IX20_Software_Specification', year: 2, grade: 7, ects: 5 },
      { name: '2ID50_Datamodeling_and_Databases', year: 2, grade: 7, ects: 5 },

      { name: '2INC0_Operating_Systems', year: 2, grade: 6, ects: 5 },
      { name: '2ITB0_Provable_Programming', year: 2, grade: 6, ects: 5 },
      { name: '1ZV50_Fundamentals_of_Product_Innovation', year: 2, grade: 6, ects: 5 },

      { name: '2IRR40_Security', year: 2, grade: 6, ects: 5 },
      { name: '4CBLW00_Multidisciplinary_CBL', year: 2, grade: 8, ects: 5 },
      { name: '2IRR50_Statistics_and_Machine_Learning', year: 2, grade: 7, ects: 5 },

      { name: '2IRR80_Capstone_Software_Development', year: 3, grade: 7, ects: 5 },
      { name: 'DZC10_Game_Design_I', year: 3, grade: 8, ects: 5 },
      { name: '0HV100_Human_Factors', year: 3, grade: 7, ects: 5 },

      { name: 'DZC20_Game_Design_II', year: 3, grade: 7, ects: 5 },
      { name: '2IRR30_Software_Engineering_Project', year: 3, grade: 7, ects: 10 },
    ] as Course[]
  ], [])

  const stats = useMemo(() => calculateStats(courses), [courses])

  return (
    <>
      <Header />
      <div className="container">
        <GradesTable courses={courses} />
        <MetricsTable stats={stats} />
        <AverageGradesPerYear stats={stats} />
        <TotalEctsPerYear stats={stats} />
        <TotalEctsBar stats={stats} />
      </div>
    </>
  )
}

export default App
