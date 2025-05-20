const AwesomeCounter = ({initialValue = 0}) => {
    return ( <div>
        <h1>
            Awesome Counter
        </h1>
        <span>
            {initialValue}
        </span>
    </div> );
}
 
export default AwesomeCounter;