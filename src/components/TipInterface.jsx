export default function TipInterface(props) {

    function handleTip(event){
        props.setTipPercentage(+event.target.value)
    }

    return (
        <div>
            <input type="text" 
            onChange={() => props.billAmount(event)} 
            value={props.bill} />
            <h3> Select Tip % </h3>
            <div>
                <button onClick={handleTip} value="5">5%</button>
                <button onClick={handleTip} value="10">10%</button>
                <button onClick={handleTip} value="15">15%</button>
                <button onClick={handleTip} value="25">25%</button>
                <button onClick={handleTip} value="50">50%</button>
                <input type="number" placeholder="Custom" 
                onChange={handleTip}
                />

            </div>
        <label htmlFor="noOfPpl">Number of People</label>
        <input  type="number" 
        onChange={(e)=> props.setNumberOfPeople(+e.target.value)}
        />
        </div>
    )
}
