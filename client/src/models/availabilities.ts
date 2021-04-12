import * as as from '../prelude/io-ts/as'
import * as t from 'io-ts'
import { objectKeys } from '../prelude/fp/object'

const Availabilities = {
    Available: null,
    Unknown: null,
    NotAvailable: null,
    OnRequest: null,
    Unsuitable: null
}
export const availabilities: Array<Availability> = objectKeys(Availabilities)

type Availabilities = typeof Availabilities
export type Availability = keyof Availabilities

export const Availability = as.asMixed<Availability>(t.keyof(Availabilities))

export type Unknown = 'Unknown'
export const Unknown: Unknown = 'Unknown'

export type Available = 'Available'
export const Available: Available = 'Available'

export type NotAvailable = 'NotAvailable'
export const NotAvailable: NotAvailable = 'NotAvailable'

export type OnRequest = 'OnRequest'
export const OnRequest: OnRequest = 'OnRequest'

export type Unsuitable = 'Unsuitable'

export const Unsuitable: Unsuitable = 'Unsuitable'