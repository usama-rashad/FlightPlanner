export interface ITravelData {
  outboundFlight: IFlightData;
  inboundFlight: IFlightData;
}

export interface IFlightData {
  flightData: ILegData[];
  numberOfStops: number;
  unitFare: number;
  totalFare: number;
}

export interface ILegData {
  flightId: number;
  airlineImage: string;
  airlineName: string;
  departureAirportCode: string;
  departureTime: string;
  arrivalAirportCode: string;
  arrivalTime: string;
  timeOfFlight: string;
}
