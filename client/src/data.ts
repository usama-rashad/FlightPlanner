import { IAdvertCard } from "./components/Common/AdvertCard/AdvertCard";

// Sample flight result data
import IslamabadImage from "../src/assets/Backgrounds/holiday1_cropped.png";
import BaliImage from "../src/assets/Backgrounds/holiday2_cropped.png";
import IstanbulImage from "../src/assets/Backgrounds/holiday3_cropped.png";

// Sample flight data
import { ITravelData } from "./components/FlightSearchResultCard/Datatypes";
import {
  TurkishAirlineIcon,
  EmiratesAirlineIcon,
  BritishAirwaysIcon,
  SingaporeAirlineIcon,
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
        flightCode: "TA444",
        airlineImage: TurkishAirlineIcon,
        airlineName: "Turkish Airlines",
        departureAirportCode: "DUS",
        departureAirportName: "Dusseldorf",
        departureTime: "13:00",
        arrivalAirportCode: "LON",
        arrivalAirportName: "London",
        arrivalTime: "18:00",
        timeOfFlight: "5h 00m",
        legData: {
          isFinalLeg: false,
          legChangeMessage: "Long wait at airport",
          legLayoverDuration: "2h 00m",
        },
      },
      {
        flightId: 2,
        flightCode: "BA768",
        airlineImage: BritishAirwaysIcon,
        airlineName: "British Airways",
        departureAirportCode: "LON",
        departureAirportName: "London",
        departureTime: "19:00",
        arrivalAirportCode: "LHR",
        arrivalAirportName: "Lahore",
        arrivalTime: "22:00",
        timeOfFlight: "3h 00m",
        legData: {
          isFinalLeg: true,
          legChangeMessage: "No layover",
          legLayoverDuration: "0h 00m",
        },
      },
    ],
    travelDate: "Travel date : 22nd June, Monday 2022",
    numberOfStops: 1,
    unitFare: 1200,
    totalFare: 2400,
  },
  inboundFlight: {
    flightData: [
      {
        flightId: 1,
        flightCode: "EK612",
        airlineImage: EmiratesAirlineIcon,
        airlineName: "Emirates Airlines",
        departureAirportCode: "LHR",
        departureAirportName: "Lahore",
        departureTime: "12:00",
        arrivalAirportCode: "DUS",
        arrivalAirportName: "Dusseldorf",
        arrivalTime: "19:00",
        timeOfFlight: "7h 00m",
        legData: {
          isFinalLeg: false,
          legChangeMessage: "Long wait at airport",
          legLayoverDuration: "2h 00m",
        },
      },
      {
        flightId: 2,
        flightCode: "SA123",
        airlineImage: SingaporeAirlineIcon,
        airlineName: "Singapore Airlines",
        departureAirportCode: "LHR",
        departureAirportName: "Lahore",
        departureTime: "12:00",
        arrivalAirportCode: "DUS",
        arrivalAirportName: "Dusseldorf",
        arrivalTime: "19:00",
        timeOfFlight: "7h 00m",
        legData: {
          isFinalLeg: true,
          legChangeMessage: "No layover",
          legLayoverDuration: "0h 00m",
        },
      },
    ],
    travelDate: "Travel date : 22nd August, Monday 2022",
    numberOfStops: 0,
    unitFare: 1200,
    totalFare: 2400,
  },
};
