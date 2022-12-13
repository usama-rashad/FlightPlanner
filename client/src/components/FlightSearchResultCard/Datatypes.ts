export interface ITravelData {
  outboundFlight: IFlightData;
  inboundFlight: IFlightData;
}

export interface IFlightData {
  travelDate: string;
  totalTravelTime: string;
  flightData: ILegData[];
  numberOfStops: number;
  unitFare: number;
  totalFare: number;
}

export interface IAirportFeatures {
  isHotel?: boolean;
  isDutyFree?: boolean;
  isRestaurant?: boolean;
  isVisaOnArrival?: boolean;
}

export interface ILegSwitchData {
  isFinalLeg: boolean;
  legChangeMessage?: string;
  legLayoverDuration?: string;
  airportFeatures?: IAirportFeatures;
}

export interface ILegData {
  flightId: number;
  flightCode: string;
  airlineImage: string;
  airlineName: string;
  departureAirportCode: string;
  departureAirportName: string;
  departureTime: string;
  arrivalAirportCode: string;
  arrivalAirportName: string;
  arrivalTime: string;
  timeOfFlight: string;
  legData: ILegSwitchData;
}
