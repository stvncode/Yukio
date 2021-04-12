import { AType,EType } from '@morphic-ts/summoners/lib'
import { AsOpaque, summon, tagged } from '../framework/summoner'

const ShowButton_ = summon(F => F.interface({ type: F.stringLiteral('ShowButton') }, 'ShowButton'))
export interface ShowButton extends AType<typeof ShowButton_> {}
export interface ShowButtonRaw extends EType<typeof ShowButton_> {}
export const ShowButton = AsOpaque<ShowButtonRaw, ShowButton>()(ShowButton_)

const DisabledButton_ = summon(F => F.interface({  type: F.stringLiteral('DisabledButton') }, 'DisabledButton'))
export interface DisabledButton extends AType<typeof DisabledButton_> {}
export interface DisabledButtonRaw extends EType<typeof DisabledButton_> {}
export const DisabledButton = AsOpaque<DisabledButtonRaw, DisabledButton>()(DisabledButton_)

export const YukioActions = tagged('type')({ShowButton, DisabledButton})
export type YukioActions = AType<typeof YukioActions>