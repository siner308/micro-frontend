import './App.css';
import Button from './components/Button';
import useCount from './store/countStore';

function App() {
  const [count, setCount] = useCount();

  return (
    <>
      <h1>Remote Application</h1>
      <Button/>
      <div className="card">
        <button onClick={() => setCount((count) => {
            console.log(count);
            return count + 1
          }
        )}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
