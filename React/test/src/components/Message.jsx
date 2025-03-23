export default function Message(){
    function handelClick(){
        console.log("the button clicked");
    }
    return(<>
        <h1>This is a message component</h1>
        <button onClick={handelClick}> Click Me </button>
    </>)
}