import { plantsArr } from "../data/plantData";


export default function Header(props) {
    return (
        <header className="Header">
            <h1>Botanical Concierge with Green-Guardian</h1>
            <h2>Helping {plantsArr.length} plants from dehydration</h2>
        </header>
    )
}  