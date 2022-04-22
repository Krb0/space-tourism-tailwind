import Commander from "../../../../assets/crew/image-douglas-hurley.png";
import MissionSpecialist from "../../../../assets/crew/image-mark-shuttleworth.png";
import Pilot from "../../../../assets/crew/image-victor-glover.png";
import FlightEngineer from "../../../../assets/crew/image-anousheh-ansari.png";

export const getCrewImage = (crewmate: string): any => {
  switch (crewmate) {
    case "Commander":
      return Commander;
    case "Mission Specialist":
      return MissionSpecialist;
    case "Pilot":
      return Pilot;
    case "Flight Engineer":
      return FlightEngineer;
    default:
      return Commander;
  }
};
