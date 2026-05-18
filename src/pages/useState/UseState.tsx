import DisplayState from "@/components/DisplayState";
import Topo from "@/components/Topo";
import { useState } from "react"
// import {DisplayState} from "@/components/DisplayState"

export default function usestate() {
  const [cont, setCont] = useState<number>(0);


  return (
    <div>
      <Topo/>
      useStates
      <DisplayState numero={cont} funcaoSet={setCont}></DisplayState>

    </div>
  )
}