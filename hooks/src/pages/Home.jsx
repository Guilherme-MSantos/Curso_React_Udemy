import HookUseCallback from "../components/HookUseCallback";
import HookUseEffect from "../components/HookUseEffect";
import HookUseImperativeHandle from "../components/HookUseImperativeHandle";
import HookUseLayoutEffect from "../components/HookUseLayoutEffect";
import HookUseMemo from "../components/HookUseMemo";
import HookUseReducer from "../components/HookUseReducer";
import HookUseRef from "../components/HookUseRef";
import HookUseState from "../components/HookUseState";
// use context
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const Home = () => {
  const { contextValue } = useContext(SomeContext);
  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do context : {contextValue}</p>
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandle />
    </div>
  );
};

export default Home;
