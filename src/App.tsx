import "./App.scss"
import logo from "./assets/logo.png"
import Carousel from "./components/Carousel"
import Cart from "./components/Cart"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950">
      <header className="w-full py-2 bg-gray-800 shadow-lg shadow-gray-800/20">
        <div className="container mx-auto px-2 flex justify-between items-center">
          <a href="/">
            <img
              className="h-12"
              src={logo}
              alt="logo"
            />
          </a>
          <Cart />
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-2">
          <Carousel />
        </div>
      </main>
    </div>
  )
}

export default App
