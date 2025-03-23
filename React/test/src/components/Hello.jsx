import styles from "./hello.module.css"
function displayName(){
    return "wagdi"
}
function Hello(){
//    console.log(props.children);

    // props.name = "karim"
    return(
        <>
            <div>
                <h1 className={styles.header}>Hello from component { displayName() }!</h1>
                
            </div>
        </> 
    )
}
export default Hello;