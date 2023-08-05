import Header from '../Components/Header'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header title='My Friend!' />
      </BrowserRouter>
    </>
  )


}

export default App
