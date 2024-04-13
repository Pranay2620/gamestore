import { GameStyle } from "../styles/Game.style"
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import styled from "styled-components";
import { queryClient } from "../App";
import { useMutation } from "@tanstack/react-query";
import { PATCH_Game, DELETE_Game } from "../utils/gamesUtils";
import { toast } from "react-toastify";

function Game({title, price, company, gameKey}) {
    const [isHover, setIsHover] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [editedGame, setEditedGame] = useState({title, company, price})
      function handleHover(value) {
           setIsHover(value)
      }

      function handleChange(name, value) {
         setEditedGame(prevGame => ({...prevGame, [name]: value}))
      }

    const {mutate: UpdateGame} = useMutation({
      mutationFn:  (editedGame) =>  PATCH_Game(gameKey, editedGame),
      onSuccess: () => {
        queryClient.invalidateQueries(['games'])
        toast.success('Game Edited Successfully!')
        setIsEdit(false)
      }
     })
    const {mutate: DeleteGame} = useMutation({
      mutationFn:  DELETE_Game,
      onSuccess: () => {
        queryClient.invalidateQueries(['games'])
        toast.error('Game deleted Successfully!')
      }
     })

     function handleEdit() {
      const editedGameObject = {
          title: editedGame.title,
          company: editedGame.company,
          price: editedGame.price
      };
      console.log(editedGameObject)
      UpdateGame( editedGameObject);
  }

    function handleDelete() {
       DeleteGame(gameKey)
    }


    return (
        <GameStyle onMouseOver={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
          {isEdit ? <input type="text" id="title" defaultValue={title}  onChange={(e) => handleChange('title', e.target.value)} />  :  <h3>{title}</h3> } 
          {isEdit ? <input type="text" id="company" defaultValue={company}  onChange={(e) => handleChange('company', e.target.value)} />  :  <p>{company}</p> } 
          {isEdit ? <input type="text" id="price" defaultValue={price}  onChange={(e) => handleChange('price', e.target.value)} />  :  <p style={{opacity: 0.4}}>{price}/-</p> } 
          <div>
          { isEdit ? <Button onClick={handleEdit} style={{backgroundColor: "green"}}> ✓ </Button> : 
          isHover ? <Button onClick={() => setIsEdit(true)} ><MdEdit/></Button> : null}      
          { isEdit ? <Button onClick={() => setIsEdit(false)} style={{backgroundColor: "red"}}> × </Button> :
           isHover ?  <Button onClick={handleDelete} ><MdDelete /></Button>: null}      
            </div> 
           
        </GameStyle>
    )
}

const Button = styled.button`
    border-radius: 100%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3e413e;
    border: none;

    svg {
        fill: #9e9e9e;
    }
   
`

export default Game