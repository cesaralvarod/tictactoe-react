import Board from './components/Board'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="container mx-auto my-10">
      <h1 className="font-bold text-center text-2xl mb-10">Tic tac toe</h1>

      <div className="max-w-sm mx-auto">
        <Board />
        <Footer />
      </div>
    </main>
  )
}
