import PlantListItem from './PlantListItem'


export default function PlantList(props){
    const {plants} = props //you receive props called plants.

    const parsedPlants = 
        Array.isArray(plants) &&          //Hey Array, can you check if plants is an array? If so, please run the plants 'map' below.
        plants.map((plant) => (           //array이기 때문에 map을 쓸 수 있는 거야. 아니면 크래쉬.
        <PlantListItem {...plant} key={plant.id}/>
    ));
    return (
        <section className='PlantList'>
            <h1>All the plants</h1>
            {parsedPlants}  
        </section>
    )
}

//{...plant} above, I destructure all of the key-value pairs of my plant object as props
//that I'm gonna give them to my plantListItem by spreading plant object.
//{...plant} Spreading is amazing concept not to multiple writing of props.



//FYI
//I can make my own shortcut(user snippet) in vscode
//After enough practice, I can make shortcut called 'cmpnt' (like Francis)
//to call the basic format. 