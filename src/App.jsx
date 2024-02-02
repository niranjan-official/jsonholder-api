
import SelectionBox from "./components/SelectionBox";
import Data from "./components/Data";
import { useState } from "react";

function App() {

  const [value, setValue] = useState("posts")

  return (
    <div className="w-screen min-h-screen flex flex-col items-center gap-8 shadow-md">
      <div className="w-full h-20 flex bg-slate-100 justify-center items-center">
        <h1 className="text-4xl font-bold">JsonHolder API</h1>
      </div>
      <SelectionBox value={value} setValue={setValue}/>
      <div className="w-full sm:max-w-3xl flex flex-col items-center gap-4 p-4">
        <Data value={value}/>
      </div>
    </div>
  )
}

export default App
