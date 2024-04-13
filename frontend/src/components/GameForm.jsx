import { InputStyle } from "../styles/Input.style";
import { GameFormStyle } from "../styles/Form.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { POST_Game } from "../utils/gamesUtils";
import { queryClient } from "../App";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function GameForm() {
  const [game, setGame] = useState({ title: '', company: '', price: '' });
  const navigate = useNavigate()

   const {mutate : addGame  } = useMutation({
      mutationFn: POST_Game,
      onSuccess: () => {
        queryClient.invalidateQueries(['games'])
        toast.success('Game Added Successfully!')
        navigate('/')
      }
     })

  function handleChange(element, value) {
    setGame((prevGame) => ({ ...prevGame, [element]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('clicked')
    addGame(game)
  }

  return (
    <GameFormStyle onSubmit={handleSubmit}>
      <Input
        label="Name"
        name="name"
        onChange={(e) => handleChange("title", e.target.value)}
        value={game.title}
      />
      <Input
        label="Company"
        name="company"
        onChange={(e) => handleChange("company", e.target.value)}
        value={game.company}
      />
      <Input
        label="Price"
        name="price"
        onChange={(e) => handleChange("price", e.target.value)}
        value={game.price}
      />
      <button type="submit">Add Game</button>
    </GameFormStyle>
  );
}

/*----------------Input Component ----------------*/

function Input({ label, name, ...props }) {
  return (
    <InputStyle>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...props} />
    </InputStyle>
  );
}

export default GameForm;
