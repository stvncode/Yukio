import {
    DateTimeFormatter,
    LocalDate,
    LocalDateTime,
    LocalTime,
    Period,
    YearMonth,
    ZonedDateTime
} from '@js-joda/core'
import { either } from 'fp-ts'
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'
import * as t from 'io-ts'
import * as as from '../io-ts/as'
import * as tag from '../io-ts/tag'
import { NonEmptyString } from './NonEmptyString'
export { tag }

export interface ZonedDateTimeFromString
    extends tag.TaggedType<ZonedDateTime, string, 'ZonedDateTime'> { }
export const ZonedDateTimeFromString: ZonedDateTimeFromString = tag.withTag('ZonedDateTime')(
    new t.Type<ZonedDateTime, string>(
        'ZonedDateTimeFromString',
        (v): v is ZonedDateTime => v instanceof ZonedDateTime,
        (v, c) =>
            pipe(
                t.string.validate(v, c),
                E.chain(s =>
                    pipe(
                        E.tryCatch(
                            () => ZonedDateTime.parse(s),
                            err => new Error(`Cannot decode ZonedDateTimeFromString for ${v}. Error ${err}`)
                        ),
                        E.fold(err => t.failure(err, c), t.success)
                    )
                )
            ),
        zdt => zdt.toString()
    )
)

export interface LocalDateFromString extends tag.TaggedType<LocalDate, string, 'LocalDate'> { }
export const LocalDateFromString: LocalDateFromString = tag.withTag('LocalDate')(
    new t.Type<LocalDate, string>(
        'LocalDateFromString',
        (v): v is LocalDate => v instanceof LocalDate,
        (v, c) =>
            pipe(
                t.string.validate(v, c),
                E.chain(s =>
                    pipe(
                        either.tryCatch(
                            () => LocalDate.parse(s),
                            err => new Error(`Cannot decode LocalDateFromString for ${v}. Error ${err}`)
                        ),
                        E.fold(err => t.failure(err, c), t.success)
                    )
                )
            ),
        zdt => zdt.toString()
    )
)
export const LocalDateFromNonEmptyStringOfPattern = (pattern: string) => {
    const format = DateTimeFormatter.ofPattern(pattern)
    return new t.Type(
        'LocalDateFromNonEmptyStringOfPattern',
        (v): v is LocalDate => v instanceof LocalDate,
        (v: NonEmptyString, c) =>
            pipe(
                either.tryCatch(
                    () => LocalDate.parse(v, format),
                    err => new Error(`Cannot decode LocalDateFromString for ${v}. Error ${err}`)
                ),
                E.fold(err => t.failure(err, c), t.success)
            ),
        v => v.format(format) as NonEmptyString
    )
}
export interface LocalDateFromStringWithPattern
    extends tag.TaggedType<LocalDate, string, 'LocalDateFromStringWithPattern'> {
    readonly pattern: string
}
export const LocalDateFromStringWithPattern = (pattern: string): LocalDateFromStringWithPattern => {
    const format = DateTimeFormatter.ofPattern(pattern)
    const T = tag.withTag('LocalDateFromStringWithPattern')(
        new t.Type<LocalDate, string>(
            'LocalDateFromString',
            (v): v is LocalDate => v instanceof LocalDate,
            (v, c) =>
                pipe(
                    t.string.validate(v, c),
                    E.chain(s =>
                        pipe(
                            either.tryCatch(
                                () => LocalDate.parse(s, format),
                                err => new Error(`Cannot decode LocalDateFromString for ${v}. Error ${err}`)
                            ),
                            E.fold(err => t.failure(err, c), t.success)
                        )
                    )
                ),
            zdt => zdt.format(format)
        )
    ) as any
    T['pattern'] = pattern
    return T as LocalDateFromStringWithPattern
}
// export const LocalDateInRange = (dateRange: LocalDateFromString) => {}

export const LocalDateInstance = new t.Type<LocalDate>(
    'LocalDateInstance',
    (v): v is LocalDate => v instanceof LocalDate,
    (v, c) => (v instanceof LocalDate ? t.success(v) : t.failure(v, c)),
    n => n
)

export interface LocalDateTimeFromString
    extends tag.TaggedType<LocalDateTime, string, 'LocalDateTime'> { }

export const LocalDateTimeFromString: LocalDateTimeFromString = tag.withTag('LocalDateTime')(
    new t.Type<LocalDateTime, string>(
        'LocalDateTimeFromString',
        (v): v is LocalDateTime => v instanceof LocalDateTime,
        (v, c) =>
            pipe(
                t.string.validate(v, c),
                E.chain(s =>
                    pipe(
                        either.tryCatch(
                            () => LocalDateTime.parse(s),
                            err => new Error(`Cannot decode LocalDateTimeFromString for ${v}. Error ${err}`)
                        ),
                        E.fold(err => t.failure(err, c), t.success)
                    )
                )
            ),
        zdt => zdt.toString()
    )
)
export type LocalDateOrLocalDateTimeFromString = LocalDate | LocalDateTime

export const LocalDateOrLocalDateTimeFromString = as.asMixed<LocalDateOrLocalDateTimeFromString>(
    t.union([LocalDateTimeFromString, LocalDateFromString])
)

export interface LocalTimeFromString extends tag.TaggedType<LocalTime, string, 'LocalTime'> { }

export const LocalTimeFromString: LocalTimeFromString = tag.withTag('LocalTime')(
    new t.Type<LocalTime, string>(
        'LocalTimeFromString',
        (v): v is LocalTime => v instanceof LocalTime,
        (v, c) =>
            pipe(
                t.string.validate(v, c),
                E.chain(s =>
                    pipe(
                        either.tryCatch(
                            () => LocalTime.parse(s),
                            err => new Error(`Cannot decode LocalTimeFromString for ${v}. Error ${err}`)
                        ),
                        E.fold(err => t.failure(err, c), t.success)
                    )
                )
            ),
        zdt => zdt.toString()
    )
)

export const LocalTimeInstance = new t.Type<LocalTime>(
    'LocalTimeInstance',
    (v): v is LocalTime => v instanceof LocalTime,
    (v, c) => (v instanceof LocalTime ? t.success(v) : t.failure(v, c)),
    n => n
)

export interface YearMonthFromString extends tag.TaggedType<YearMonth, string, 'YearMonth'> { }
export const YearMonthFromString: YearMonthFromString = tag.withTag('YearMonth')(
    new t.Type<YearMonth, string>(
        'YearMonthFromString',
        (v): v is YearMonth => v instanceof YearMonth,
        (v, c) =>
            pipe(
                t.string.validate(v, c),
                E.chain(s =>
                    pipe(
                        E.tryCatch(
                            () => YearMonth.parse(s),
                            err => new Error(`Cannot decode YearMonthFromString for ${v}. Error ${err}`)
                        ),
                        E.fold(err => t.failure(err, c), t.success)
                    )
                )
            ),
        zdt => zdt.toString()
    )
)

export interface PeriodFromString extends tag.TaggedType<Period, string, 'Period'> { }
export const PeriodFromString: PeriodFromString = tag.withTag('Period')(
    new t.Type<Period, string>(
        'PeriodFromString',
        (v): v is Period => v instanceof Period,
        (v, c) =>
            pipe(
                t.string.validate(v, c),
                E.chain(s =>
                    pipe(
                        E.tryCatch(
                            () => Period.parse(s),
                            err => new Error(`Cannot decode PeriodFromString for ${v}. Error ${err}`)
                        ),
                        E.fold(err => t.failure(err, c), t.success)
                    )
                )
            ),
        zdt => zdt.toString()
    )
)

export const monthFR = (m: number): string => {
    switch (m) {
        case 1:
            return 'janv'
        case 2:
            return 'fev'
        case 3:
            return 'mars'
        case 4:
            return 'avril'
        case 5:
            return 'mai'
        case 6:
            return 'juin'
        case 7:
            return 'juil'
        case 8:
            return 'août'
        case 9:
            return 'sep'
        case 10:
            return 'oct'
        case 11:
            return 'nov'
        case 12:
            return 'dec'
        default:
            return ''
    }
}

export const monthEN = (m: number): string => {
    switch (m) {
        case 1:
            return 'jan'
        case 2:
            return 'feb'
        case 3:
            return 'march'
        case 4:
            return 'april'
        case 5:
            return 'may'
        case 6:
            return 'june'
        case 7:
            return 'july'
        case 8:
            return 'aug'
        case 9:
            return 'sep'
        case 10:
            return 'oct'
        case 11:
            return 'nov'
        case 12:
            return 'dec'
        default:
            return ''
    }
}