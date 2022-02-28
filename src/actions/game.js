import { types } from "../types/types";

export const startPlayGame = () => ({ 
    type: types.playGame
})

export const startStopGame = () => ({
    type: types.stopGame
})

export const startChangePage = () => ({
    type: types.changePage
})

export const startStopChangePage = () => ({
    type: types.stopChangePage
})

export const startCleanUI = () => ({
    type: types.cleanUI
})