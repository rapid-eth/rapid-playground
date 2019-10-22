/* --- Global --- */

/* --- Local --- */
import { Dashboard } from 'templates'

/* --- Module --- */
import Routes from './routes'
const Home = props => {
  const customCall =(values) => { 
     console.log(values, 'yo')
  }
  return (
    <Dashboard>
      <Routes/>
    </Dashboard>
  )
}


export default Home
