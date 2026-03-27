import { useState } from "react";
function Counter(){
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    console.log("counter component ")
    return(
        <div className="text-center p-10 border m-6">
            <div className=" text-4xl">
                Count:{count}  </div>
        <div className=" flex justify-center text-2xl mt-2 gap-2 ">
            <div className=" p-2 text-black bg-green-400  rounded-sm  " onClick={increment}>+</div>
          <div className=" p-2 text-black bg-red-600 rounded-sm " onClick={decrement}>-</div>
        </div>
        </div>
    )
}
export default Counter;