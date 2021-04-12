import { Page, PerPage } from '../../domain/newtype'
import { monoidFromNewType, monoidMaxAbsoluteNumber } from '../../prelude/fp/monoid'
import { NumberFromString } from '../../prelude/io-ts-types/NumberFromString'
import * as as from '../../prelude/io-ts/as'
import { TaggedType, withTag } from '../../prelude/io-ts/tag'
import { chunksOf, getMonoid, lookup } from 'fp-ts/lib/Array'
import { getStructMonoid, Monoid, monoidAll, monoidSum } from 'fp-ts/lib/Monoid'
import { getOrd, Option } from 'fp-ts/lib/Option'
import { Ord } from 'fp-ts/lib/Ord'
import * as t from 'io-ts'

export type { TaggedType }
export { Page, PerPage }

export const ordOptionPage: Ord<Option<Page>> = getOrd(Page)

const tagAsString = withTag('StringType')

export const PageFromString = tagAsString(NumberFromString.pipe(Page))

const monoidPerPage = monoidFromNewType(PerPage, monoidMaxAbsoluteNumber)

export const PerPageFromString = tagAsString(NumberFromString.pipe(PerPage))

export interface PageMeta {
    lastPage: boolean
    totalModels: number
    perPage: PerPage
}

export const PageMeta = as.asMixed<PageMeta>(
    t.interface(
        {
            lastPage: t.boolean,
            totalModels: t.number,
            perPage: PerPage
        },
        'PageMeta'
    )
)

export const monoidPageMeta: Monoid<PageMeta> = getStructMonoid({
    lastPage: monoidAll,
    totalModels: monoidSum,
    perPage: monoidPerPage
})

export interface ResultsWithPageMeta<T> {
    meta: PageMeta
    results: T[]
}

export const getResultsWithPageMetaMonoid = <A = never>(): Monoid<ResultsWithPageMeta<A>> =>
    getStructMonoid({
        meta: monoidPageMeta,
        results: getMonoid()
    })

export const ResultsWithPageMeta = <T>(
    decoder: t.Type<T[], unknown>,
    name?: string
): t.Type<ResultsWithPageMeta<T>, unknown> =>
    t.interface(
        {
            meta: PageMeta,
            results: decoder
        },
        name
    )

export const getChunkAtPage = <T>(page: Page, perPage: PerPage) => (array: T[]) => {
    const chunks = chunksOf(PerPage.unwrap(perPage))<T>(array)
    const pageFound = lookup<T[]>(Page.unwrap(page) - 1, chunks)
    return pageFound
}