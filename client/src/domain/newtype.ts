import { NumberFromString } from '../prelude/io-ts-types/NumberFromString'
import { eqString } from 'fp-ts/lib/Eq'
import { ordNumber, ordString } from 'fp-ts/lib/Ord'
import * as t from 'io-ts'
import { fromNewtype } from 'io-ts-types/lib/fromNewtype'
import { UUID } from 'io-ts-types/lib/UUID'
import merge from 'lodash.merge'
import { getEq, getOrd, iso, Newtype } from 'newtype-ts'
import * as uuid from 'uuid'
interface AvailabilityRequestIdBrand {
    readonly AvailabilityRequestId: unique symbol
}
export interface AvailabilityRequestId extends Newtype<AvailabilityRequestIdBrand, string> { }
export const AvailabilityRequestId = merge(
    {},
    iso<AvailabilityRequestId>(),
    fromNewtype<AvailabilityRequestId>(t.string)
)

interface FareTypeBrand {
    readonly FareType: unique symbol
}
export interface FareType extends Newtype<FareTypeBrand, string> { }
export const FareType = merge({}, iso<FareType>(), fromNewtype<FareType>(t.string))

interface FareBasisBrand {
    readonly FareBasis: unique symbol
}
export interface FareBasis extends Newtype<FareBasisBrand, string> { }
export const FareBasis = merge({}, iso<FareBasis>(), fromNewtype<FareBasis>(t.string))

interface FlightSegmentIdBrand {
    readonly FlightSegmentId: unique symbol
}
/**
 * Represents the id of a segment which stands for a possibility in Koedia's domain.
 *
 * A segment is composed of Hops.
 */
export interface FlightSegmentId extends Newtype<FlightSegmentIdBrand, UUID> { }
export const FlightSegmentId = merge({}, iso<FlightSegmentId>(), fromNewtype<FlightSegmentId>(UUID))

interface SupplierCodeBrand {
    readonly SupplierCode: unique symbol
}
/**
 * Represents any supplier code.
 */
export interface SupplierCode extends Newtype<SupplierCodeBrand, string> { }
export const SupplierCode = merge(
    {},
    iso<SupplierCode>(),
    fromNewtype<SupplierCode>(t.string),
    getOrd<SupplierCode>(ordString)
)

interface ClassOfBookingBrand {
    readonly ClassOfBooking: unique symbol
}
/**
 * Represents any class of booking.
 */
export interface ClassOfBooking extends Newtype<ClassOfBookingBrand, string> { }
export const ClassOfBooking = merge(
    {},
    iso<ClassOfBooking>(),
    fromNewtype<ClassOfBooking>(t.string)
)

interface FlightNumberBrand {
    readonly FlightNumber: unique symbol
}
/**
 * Represents any class of booking.
 */
export interface FlightNumber extends Newtype<FlightNumberBrand, string> { }
export const FlightNumber = merge(
    {},
    iso<FlightNumber>(),
    fromNewtype<FlightNumber>(t.string),
    getEq<FlightNumber>(eqString)
)

interface AirlineCodeBrand {
    readonly AirlineCode: unique symbol
}
export interface AirlineCode extends Newtype<AirlineCodeBrand, string> { }
export const AirlineCode = merge(
    {},
    iso<AirlineCode>(),
    fromNewtype<AirlineCode>(t.string),
    getOrd<AirlineCode>(ordString)
)

interface IATACodeBrand {
    readonly IATACode: unique symbol
}
export interface IATACode extends Newtype<IATACodeBrand, string> { }
export const IATACode = merge(
    {},
    iso<IATACode>(),
    fromNewtype<IATACode>(t.string),
    getOrd<IATACode>(ordString)
)

interface BaggageCodeBrand {
    readonly BaggageCode: unique symbol
}
export interface BaggageCode extends Newtype<BaggageCodeBrand, string> { }
export const BaggageCode = merge(
    {},
    iso<BaggageCode>(),
    fromNewtype<BaggageCode>(t.string),
    getOrd<BaggageCode>(ordString)
)

interface BaggageIdBrand {
    readonly BaggageId: unique symbol
}
export interface BaggageId extends Newtype<BaggageIdBrand, string> { }
export const BaggageId = merge(
    {},
    iso<BaggageId>(),
    fromNewtype<BaggageId>(t.string),
    getOrd<BaggageId>(ordString)
)

interface EncodedPolylineBrand {
    readonly EncodedPolyline: unique symbol
}
export interface EncodedPolyline extends Newtype<EncodedPolylineBrand, string> { }
export const EncodedPolyline = merge(
    {},
    iso<EncodedPolyline>(),
    fromNewtype<EncodedPolyline>(t.string),
    getOrd<EncodedPolyline>(ordString)
)

interface RoomRefBrand {
    readonly RoomRef: unique symbol
}
export interface RoomRef extends Newtype<RoomRefBrand, string> { }
export const RoomRef = merge(
    {},
    iso<RoomRef>(),
    fromNewtype<RoomRef>(t.string),
    getOrd<RoomRef>(ordString)
)

interface RoomIdBrand {
    readonly RoomId: unique symbol
}
export interface RoomId extends Newtype<RoomIdBrand, string> { }
export const RoomId = merge(
    {},
    iso<RoomId>(),
    fromNewtype<RoomId>(t.string),
    getOrd<RoomId>(ordString)
)

interface FlightSessionIdBrand {
    readonly FlightSessionId: unique symbol
}
export interface FlightSessionId extends Newtype<FlightSessionIdBrand, string> { }
export const FlightSessionId = merge(
    {},
    iso<FlightSessionId>(),
    fromNewtype<FlightSessionId>(t.string),
    getOrd<FlightSessionId>(ordString)
)

interface SegmentIdxBrand {
    readonly SegmentIdx: unique symbol
}
export interface SegmentIdx extends Newtype<SegmentIdxBrand, number> { }
export const SegmentIdx = merge(
    {},
    iso<SegmentIdx>(),
    fromNewtype<SegmentIdx>(t.number),
    getOrd<SegmentIdx>(ordNumber)
)

interface AgeBrand {
    readonly Age: unique symbol
}
export interface Age extends Newtype<AgeBrand, number> { }
export const Age = merge({}, iso<Age>(), fromNewtype<Age>(t.number), getOrd<Age>(ordNumber))

interface AccommodationIdBrand {
    readonly AccommodationId: unique symbol
}
export interface AccommodationId extends Newtype<AccommodationIdBrand, string> { }
export const AccommodationId = merge(
    {},
    iso<AccommodationId>(),
    fromNewtype<AccommodationId>(t.string),
    getOrd<AccommodationId>(ordString)
)

interface AccommodationExternalIdBrand {
    readonly AccommodationExternalId: unique symbol
}
export interface AccommodationExternalId extends Newtype<AccommodationExternalIdBrand, string> { }
export const AccommodationExternalId = merge(
    {},
    iso<AccommodationExternalId>(),
    fromNewtype<AccommodationExternalId>(t.string),
    getOrd<AccommodationExternalId>(ordString)
)

interface ActivityIdBrand {
    readonly ActivityId: unique symbol
}
export interface ActivityId extends Newtype<ActivityIdBrand, string> { }
export const ActivityId = merge(
    {},
    iso<ActivityId>(),
    fromNewtype<ActivityId>(t.string),
    getOrd<ActivityId>(ordString)
)

interface MultiDayIdBrand {
    readonly MultiDayId: unique symbol
}
export interface MultiDayId extends Newtype<MultiDayIdBrand, string> { }
export const MultiDayId = merge(
    {},
    iso<MultiDayId>(),
    fromNewtype<MultiDayId>(t.string),
    getOrd<MultiDayId>(ordString)
)
interface ExternalMultiDayIdBrand {
    readonly ExternalMultiDayId: unique symbol
}
export interface ExternalMultiDayId extends Newtype<ExternalMultiDayIdBrand, string> { }
export const ExternalMultiDayId = merge(
    {},
    iso<ExternalMultiDayId>(),
    fromNewtype<ExternalMultiDayId>(t.string),
    getOrd<ExternalMultiDayId>(ordString)
)

interface ItemIdBrand {
    readonly ItemId: unique symbol
}
export interface ItemId extends Newtype<ItemIdBrand, UUID> { }
export const ItemId = merge(
    {
        newId: () => (uuid.v4() as unknown) as ItemId,
        fromUUID: (u: UUID) => (u as unknown) as ItemId,
        toUUID: (o: ItemId) => (o as unknown) as UUID
    },
    iso<ItemId>(),
    fromNewtype<ItemId>(UUID),
    getOrd<ItemId>(ordString)
)

interface ProjectIdBrand {
    readonly ProjectId: unique symbol
}
export interface ProjectId extends Newtype<ProjectIdBrand, UUID> { }
export const ProjectId = merge(
    {
        newId: () => (uuid.v4() as unknown) as ProjectId,
        fromUUID: (u: UUID) => (u as unknown) as ProjectId,
        toUUID: (o: ProjectId) => (o as unknown) as UUID
    },
    iso<ProjectId>(),
    fromNewtype<ProjectId>(UUID),
    getOrd<ProjectId>(ordString)
)

interface AccommodationSessionIdBrand {
    readonly AccommodationSessionId: unique symbol
}
export interface AccommodationSessionId extends Newtype<AccommodationSessionIdBrand, string> { }
export const AccommodationSessionId = merge(
    {},
    iso<AccommodationSessionId>(),
    fromNewtype<AccommodationSessionId>(t.string),
    getOrd<AccommodationSessionId>(ordString)
)

interface PerPageBrand {
    readonly PerPage: unique symbol
}
export interface PerPage extends Newtype<PerPageBrand, number> { }
export const PerPage = merge(
    {},
    iso<PerPage>(),
    fromNewtype<PerPage>(t.number),
    getOrd<PerPage>(ordNumber)
)

export const PerPageFromString = NumberFromString.pipe(PerPage)

interface PageBrand {
    readonly Page: unique symbol
}

export interface Page extends Newtype<PageBrand, number> { }
export const Page = merge({}, iso<Page>(), fromNewtype<Page>(t.number), getOrd<Page>(ordNumber))

export const PageFromString = NumberFromString.pipe(Page)

interface KoediaExternalIdBrand {
    readonly KoediaExternalId: unique symbol
}

export interface KoediaExternalId extends Newtype<KoediaExternalIdBrand, string> { }
export const KoediaExternalId = merge(
    {},
    iso<KoediaExternalId>(),
    fromNewtype<KoediaExternalId>(t.string),
    getOrd<KoediaExternalId>(ordString)
)

interface CountryCodeBrand {
    readonly CountryCode: unique symbol
}

export interface CountryCode extends Newtype<CountryCodeBrand, string> { }
export const CountryCode = merge(
    {},
    iso<CountryCode>(),
    fromNewtype<CountryCode>(t.string),
    getOrd<CountryCode>(ordString)
)