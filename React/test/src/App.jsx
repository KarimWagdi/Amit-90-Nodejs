import ConditionalRenderer from "./components/ConditionalRendering"
import Counter from "./components/Counter"
import Form from "./components/Form"
import Fruits from "./components/Fruits"
import Hello from "./components/Hello"
import InlineComponent from "./components/InlineStyle"
import Message from "./components/Message"
import OutlineComponent from "./components/Outline"

function App() {
  
  return (
    <div>
      {/* <Hello name="wagdi" age={30}>
        <h2>Hello from component!</h2>
        <p>This is a test</p>
      </Hello> */}
      {/* <Counter/> */}
      {/* <Form /> */}
      {/* <InlineComponent/> */}
      <OutlineComponent />
    </div>
  )
}

export default App
