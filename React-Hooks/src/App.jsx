import "./App.css";
import ImperativeHandle from "./ImperativeHandle/ImperativeHandle";
import CallbackTutorial from "./UseCallback/UseCallback";
import ContextTutorial from "./UseContext/UseContxt";
import EffectTutorial from "./UseEffect/UseEffect";
import LayoutEffectTutorial from "./UseLayoutEffect/UseLayoutEffect";
import UseMemo from "./UseMemo/UseMemo";
import ReducerTutorial from "./UseReducer/useReducer";
import RefTutorial from "./UseRef/UseRef";
import StateTutorial from "./UseState/StateTutorial";

function App() {
  return (
    <>
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutEffectTutorial />
      <ImperativeHandle />
      <ContextTutorial />
      <UseMemo />
      <CallbackTutorial />
    </>
  );
}

export default App;
