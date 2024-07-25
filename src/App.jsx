import AppRouter from './components/router/AppRouter'

//este es el componente principal sobre el cual renderizaran los demas componentes de la App. 
function App() {

  return (
    <>
      <AppRouter/>  {/* AppRouter es unn componente en el cual se encontraran todas las rutas posibles de nuestra App */}
    </>
  )
}

export default App
