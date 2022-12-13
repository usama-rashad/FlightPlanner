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
        departureAirportName: "Dusseldorf Intl. Airport",
        departureTime: "13:23",
        arrivalAirportCode: "LON",
        arrivalAirportName: "London Heathrow Intl.",
        arrivalTime: "18:00",
        timeOfFlight: "4h 37m",
        legData: {
          isFinalLeg: false,
          legChangeMessage: "Long wait at airport",
          legLayoverDuration: "1h 00m",
          airportFeatures: {
            isHotel: true,
            isDutyFree: true,
            isVisaOnArrival: true,
            isRestaurant: true,
          },
        },
      },
      {
        flightId: 2,
        flightCode: "BA768",
        airlineImage: BritishAirwaysIcon,
        airlineName: "British Airways",
        departureAirportCode: "LON",
        departureAirportName: "London Heathrow Intl.",
        departureTime: "19:00",
        arrivalAirportCode: "LHR",
        arrivalAirportName: "Lahore",
        arrivalTime: "22:00",
        timeOfFlight: "3h 00m",
        legData: {
          isFinalLeg: false,
          legChangeMessage: "Long wait at airport",
          legLayoverDuration: "1h 00m",
          airportFeatures: {
            isHotel: true,
            isDutyFree: true,
            isVisaOnArrival: false,
            isRestaurant: true,
          },
        },
      },
      {
        flightId: 3,
        flightCode: "BA767",
        airlineImage: BritishAirwaysIcon,
        airlineName: "British Airways",
        departureAirportCode: "LHR",
        departureAirportName: "Lahore",
        departureTime: "23:00",
        arrivalAirportCode: "SIN",
        arrivalAirportName: "Singapore Changi Intl. Airport",
        arrivalTime: "06:00",
        timeOfFlight: "7h 00m",
        legData: {
          isFinalLeg: true,
          legChangeMessage: "No layover",
          legLayoverDuration: "0h 00m",
          airportFeatures: {
            isHotel: true,
            isDutyFree: true,
            isVisaOnArrival: true,
            isRestaurant: true,
          },
        },
      },
    ],
    travelDate: "Travel date : 22nd March, Monday 2022",
    totalTravelTime: "16h 37m",
    numberOfStops: 2,
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
        arrivalAirportCode: "LON",
        arrivalAirportName: "London",
        arrivalTime: "19:00",
        timeOfFlight: "7h 00m",
        legData: {
          isFinalLeg: false,
          legChangeMessage: "Long wait at airport",
          legLayoverDuration: "2h 00m",
          airportFeatures: {
            isHotel: true,
            isDutyFree: true,
            isVisaOnArrival: false,
            isRestaurant: true,
          },
        },
      },
      {
        flightId: 2,
        flightCode: "SA123",
        airlineImage: SingaporeAirlineIcon,
        airlineName: "Singapore Airlines",
        departureAirportCode: "LON",
        departureAirportName: "London Heathrow Intl.",
        departureTime: "21:00",
        arrivalAirportCode: "DUS",
        arrivalAirportName: "Dusseldorf Intl. Airport",
        arrivalTime: "03:00",
        timeOfFlight: "6h 00m",
        legData: {
          isFinalLeg: true,
          legChangeMessage: "No layover",
          legLayoverDuration: "0h 00m",
          airportFeatures: {
            isHotel: true,
            isDutyFree: true,
            isVisaOnArrival: true,
            isRestaurant: true,
          },
        },
      },
    ],
    travelDate: "Travel date : 22nd August, Monday 2022",
    totalTravelTime: "15h 00m",
    numberOfStops: 1,
    unitFare: 1200,
    totalFare: 2400,
  },
};
