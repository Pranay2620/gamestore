import Game from "./Game"
import { GameContainerStyle } from "../styles/Home.style"
import { useQuery } from "@tanstack/react-query"
import { GET_Game } from "../utils/gamesUtils"

function GameContainer() {

    const {data :games, isPending, isError, error} = useQuery({
        queryKey: ['games'],
        queryFn: GET_Game
    }) 
    console.log('fetched games -->', games)

    if(isPending) {
        return <h1 style={{textAlign: "center"}}>Loading...</h1>
    }

    if(isError) {
        return <h1 style={{textAlign: "center"}}>Something went wrong</h1>
    }
    return (    
        <GameContainerStyle>
           {games.map(game => <Game key={game._id} gameKey={game._id} {...game} />)}
        </GameContainerStyle>
    )
}

export default GameContainer