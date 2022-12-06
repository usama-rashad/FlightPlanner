import { IAdvertCard } from "../src/components/AdvertCard/AdvertCard";

// Sample flight result data
import IslamabadImage from "../src/assets/Backgrounds/holiday1_cropped.png";
import BaliImage from "../src/assets/Backgrounds/holiday2_cropped.png";
import IstanbulImage from "../src/assets/Backgrounds/holiday3_cropped.png";

// Sample flight data
import { ISearchResultCard } from "./components/FlightSearchResultCard/FlightSearchResultCard";
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

export const sampleFlightResult: ISearchResultCard = {
  flightData: [
    {
      flightId: 1,
      airlineImage: TurkishAirlineIcon,
      airlineName: "Turkish Airlines",
      departureAirportCode: "",
      departureTime: "",
      arrivalAirportCode: "",
      arrivalTime: "",
      timeOfFlight: "",
    },
    {
      flightId: 2,
      airlineImage: EmiratesAirlineIcon,
      airlineName: "Emirates Airlines",
      departureAirportCode: "",
      departureTime: "",
      arrivalAirportCode: "",
      arrivalTime: "",
      timeOfFlight: "",
    },
  ],
  numberOfStops: 0,
  unitFare: 0,
  totalFare: 0,
};
