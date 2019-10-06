import { StartGaneAction } from '../actions/gameActions'
import initialState, { GameState  } from '../store/initialState'
import { START_GAME_ACTION } from '../actions/actions'
import { Action } from 'redux'

export default (state: GameState = undefined, action: StartGaneAction) => {
    if (state == undefined) return initialState.gameState
    switch(action.type){
        case START_GAME_ACTION: {
            console.log('GAME STARTED', action.position.x, action.position.y)
            return GameState.Started
        }
        default: return state
    }
}
