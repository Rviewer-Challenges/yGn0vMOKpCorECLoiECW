import { Level } from "../models/level.model";

export const emojis = ['🎅', '🎄', '❄️', '🎁', '🥂', '🌠', '☃️', '⛄',
  '🫎', '🌨️', '🤶', '🧑‍🎄', '🎉', '💫', '🧦', '🥛',
  '🧝‍♀️', '🌟', '🍪', '🦌', '🕯️', '👼', '🥳', '🎊'];

export const levels: Level[] = [{
  name: 'easy',
  verticalCards: 4,
  horizontalCards: 4,
}, {
  name: 'medium',
  verticalCards: 6,
  horizontalCards: 4,
}, {
  name: 'difficult',
  verticalCards: 6,
  horizontalCards: 5,
}];