import { IAdvertCard } from "../src/components/AdvertCard/AdvertCard";

// Sample flight result data
import IslamabadImage from "../src/assets/Backgrounds/holiday1_cropped.png";
import BaliImage from "../src/assets/Backgrounds/holiday2_cropped.png";
import IstanbulImage from "../src/assets/Backgrounds/holiday3_cropped.png";

// Sample flight data
import { ITravelData } from "./components/FlightSearchResultCard/Datatypes";
import {
  TurkishAirlineIcon,
  EmiratesAirlineIcon,
} from "./assets/AirlineIcons/AirlineIcons";

export const holidayDestiationData: IAdvertCard[] = [
  {
    desc: "Visit Pakistan's capital city for its green surroundings and the amazing Margalla Hills.",
    img: IslamabadImage,
  },
  {
    desc: "See Bali's breathtaking scenery and enjoy it's tasteful cuisine",
    img: BaliImage,
  },
  {
    desc: "A perfect place for meat lovers and those who admire historic sites",
    img: IstanbulImage,
  },
];

export const sampleFlightResult: ITravelData = {
  outboundFlight: {
    flightData: [
      {
        flightId: 1,
        airlineImage: TurkishAirlineIcon,
        airlineName: "TurkishAirlines",
        departureAirportCode: "DUS",
        departureTime: "13:00",
        arrivalAirportCode: "LHR",
        arrivalTime: "18:00",
        timeOfFlight: "5h 00m",
      },
    ],
    numberOfStops: 1,
    unitFare: 1200,
    totalFare: 2400,
  },
  inboundFlight: {
    flightData: [
      {
        flightId: 1,
        airlineImage: EmiratesAirlineIcon,
        airlineName: "Emirates Airlines",
        departureAirportCode: "LHR",
        departureTime: "12:00",
        arrivalAirportCode: "DUS",
        arrivalTime: "19:00",
        timeOfFlight: "7h 00m",
      },
    ],
    numberOfStops: 1,
    unitFare: 1200,
    totalFare: 2400,
  },
};
