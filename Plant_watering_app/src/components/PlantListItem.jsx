//name, type, ... (everything in the plant obj)

//   {
//     id: "1",
//     type: "Monsterous plant",
//     name: "Monstera",
//     lastWatered: "2023-12-20",
//     wateringInterval: 7,
//   };


/* <PlantListItem id={1} type="Monsterous plant" name="Monstera" lastWatered="2023-12-20" wateringInterval={7} /> */



const checkIfWellWatered = (lastWatered, wateringInterval) => {
    const todayDate = new Date()
    const lastWateredDate = new Date(lastWatered)

    const timeDiff = todayDate.getTime() - lastWateredDate.getTime() //we get in milisecond because of getTime()
    const timeDiffInDays = timeDiff / 1000 /86400

    return wateringInterval > timeDiffInDays
}

export default function PlantListItem(props) {
    const { name, type, lastWatered, wateringInterval, updateWateredDate } = props;

    const plantListItemStyle = {
        border: "0.5em solid white",
        padding: "1em",
        borderColor:checkIfWellWatered(lastWatered, wateringInterval) ? "green" : "red",
        //hey, borderColor, I want you to check if the thing is well watered. 
        //here's 'lastWatered', here's 'wateringInterval'.
        //so if it's well watered, I want the color to be green,
        //if not, I want the color to be red.
        //'ternary operator'
        margin: "2em",
        borderRadius: '20px'
    }

    return (
        <article className="PlantListItem" style={plantListItemStyle}>
            <h1>
                {name} <br></br>
                {type}
            </h1>
            <h2>Last watered on: {lastWatered}</h2>
            <button onClick={updateWateredDate}
                    style={{
                        backgroundColor: '#18b2b5',
                        borderRadius: '5px',
                        padding: '10px 20px',
                        cursor: 'pointer' 
                      }}
            >Water me! 💧</button>
        </article>
    )
}