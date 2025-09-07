import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="bg-blue-500 text-white p-4 rounded-lg my-4">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          Visit{' '}
          <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
          </a>{' '}
          to learn more
        </p>
      </div>
    </>
  )
}

export default App
