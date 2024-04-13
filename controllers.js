import customError from "./customError.js"
import { Game as GameModel } from "./models/Game.model.js"

/***************Get Games ***************/
export const getGames = async (req, res) => {
    try {
        const games = await GameModel.find()
         res.status(200).json({games})
    } catch(error) {
        return res.status(400).send( {error: 'came error man'})
    }
}

/***************create Games ***************/
export const  createGame = async (req, res, next) => {
    const {title, company, price} = req.body
    let newGame;
    try {
          newGame = await GameModel.create({title, company, price: Number(price)})
          res.status(201).json({ success: true, game: newGame})
    } catch(error) {
         return next(new customError(500, 'data not added'))
    }
}
/***************update Games ***************/
export const updateGame = async (req, res, next) => {
    const { title, company, price } = req.body
    const { id } = req.params
    try {
        const EditedGame = await GameModel.findByIdAndUpdate(id, {title, company, price: Number(price)})
        res.status(201).json({success: true, EditedGame})
    } catch(error) {
        return next(new customError(500, 'Not edited Game'))
    }
}

/***************delete Games ***************/
export const deleteGame = async (req, res) => {
    try {
        const deletedGame = await GameModel.findByIdAndDelete(req.params.id)
        res.status(204).json({success: true, deletedGame})
    } catch(error) {
        return next(new customError(756, 'Data not deleted'))
    }
}