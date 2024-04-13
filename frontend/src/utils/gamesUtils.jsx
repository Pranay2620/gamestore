import axios from 'axios'


/*********************Editing Game*********************/
export async function PATCH_Game(gameKey, editGame) {
  
    try {
      console.log('fd',gameKey, editGame  )
       const res = await axios.patch(`http://localhost:5000/edit/${gameKey}`, editGame)
       console.log('edited game res -->', res)
       return res.data
    } catch(error) {
       console.error('error -->', error)
    }   
}

/*********************Adding Game*********************/
export async function POST_Game(game) {
  try {
    const res = await axios.post("http://localhost:5000/add", game);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}

/*********************Fetching Game*********************/
export async function GET_Game() {
  try {
      const res = await axios.get("http://localhost:5000/games")
      console.log('games res -->', res)
      return res.data.games
  } catch(error) {
      console.error('error -->', error)
  }
}

/*********************Deleting Game*********************/
export async function DELETE_Game(gameKey) {
  try {
   const res = await axios.delete(`http://localhost:5000/delete/${gameKey}`)
  } catch(error) {
   console.error(error)
  }
}