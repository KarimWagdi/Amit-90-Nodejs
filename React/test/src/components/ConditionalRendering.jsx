import Fruits from "./Fruits";
import Hello from "./Hello";

export default function ConditionalRenderer() {
    //1 - if condition 
    // let display = false;
    // if (display) {
    //     return <Hello/>
    // }else{
    //     return <Fruits/>
    // }

    // 2- empty variable
    let display = false;
    // let message 
    // if(display){
    //     message = <Hello/>
    // }else{
    //     message = <Fruits/>
    // }
    // return message;

    // 3-ternary operator
    return display ? <Hello/> : <Fruits/>;
}