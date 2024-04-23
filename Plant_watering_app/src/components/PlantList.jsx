import PlantListItem from './PlantListItem'
import { plantsArr } from "../data/plantData";

export default function PlantList(props){

    const parsedPlants = plantsArr.map((plant) => (
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