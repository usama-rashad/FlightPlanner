export interface ITravelData {
  outboundFlight: IFlightData;
  inboundFlight: IFlightData;
}

export interface IFlightData {
  travelDate: string;
  flightData: ILegData[];
  numberOfStops: number;
  unitFare: number;
  totalFare: number;
}

export interface ILegSwitchData {
  isFinalLeg: boolean;
  legChangeMessage?: string;
  legLayoverDuration?: string;
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
