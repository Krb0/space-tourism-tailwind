import Moon from "../../../../assets/destination/image-moon.png";
import Mars from "../../../../assets/destination/image-mars.png";
import Europa from "../../../../assets/destination/image-europa.png";
import Titan from "../../../../assets/destination/image-titan.png";

export const getDestinationImage = (destination: string): any => {
  switch (destination) {
    case "Moon":
      return Moon;
    case "Mars":
      return Mars;
    case "Europa":
      return Europa;
    case "Titan":
      return Titan;
    default:
      return Moon;
  }
};
