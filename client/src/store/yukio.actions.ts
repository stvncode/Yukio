import { AType, EType } from '@morphic-ts/summoners/lib'
import { AsOpaque, summon, tagged } from '../framework/summoner'

const ShowCookies_ = summon(F => F.interface({ type: F.stringLiteral('ShowCookies') }, 'ShowCookies'))
export interface ShowCookies extends AType<typeof ShowCookies_> { }
export interface ShowCookiesRaw extends EType<typeof ShowCookies_> { }
export const ShowCookies = AsOpaque<ShowCookiesRaw, ShowCookies>()(ShowCookies_)

const DisabledCookies_ = summon(F => F.interface({ type: F.stringLiteral('DisabledCookies') }, 'DisabledCookies'))
export interface DisabledCookies extends AType<typeof DisabledCookies_> { }
export interface DisabledCookiesRaw extends EType<typeof DisabledCookies_> { }
export const DisabledCookies = AsOpaque<DisabledCookiesRaw, DisabledCookies>()(DisabledCookies_)

export const YukioActions = tagged('type')({ ShowCookies, DisabledCookies })
export type YukioActions = AType<typeof YukioActions>