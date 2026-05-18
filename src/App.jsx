import './App.css'
import Headline from './components/Headline'
import { useWeather } from './api'

function App() {
  const { loading, headlines, error } = useWeather();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="App">
      {
        headlines.map(
          headline => <Headline key={headline.time} {...headline} />
        )
      }
    </div>
  )
}

export default App;
