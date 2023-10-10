import "./Button.css";
import useCount from "../store/countStore";

function Button() {
  const [state, setState] = useCount();

  return (
    <div>
      <button className="shared-btn" onClick={() => setState((s) => {
        console.log(s);
        return s + 1
      })}>
        Click me: {state}
      </button>
    </div>
  );
}

export default Button;
