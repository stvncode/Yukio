import React from 'react'
import { Locale } from '../business/locales'
import { makeLocaleConsumer } from './makeLocalConsumer'

export const LocaleContext = React.createContext<Locale>('fr')

export const { Provider, Consumer } = LocaleContext

export const makeMsgInjector = makeLocaleConsumer(Consumer)