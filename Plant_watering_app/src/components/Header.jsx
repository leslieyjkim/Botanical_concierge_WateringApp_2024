export default function Header(props) {
    const {amount} = props //I receive a props called amount
    return (
        <header className="Header">
            <h1>Botanical Concierge with Green-Guardian</h1>
            <h2>Helping {amount} plants from dehydration</h2>
        </header>
    )
}  