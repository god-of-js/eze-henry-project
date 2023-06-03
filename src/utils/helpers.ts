import { AnyAction } from "@reduxjs/toolkit";
import RingsOfPower from "../assets/rings-of-power.jpeg";
import TheBattleOfTheFiveArmies from "../assets/the-battle-of-five-armies.jpeg";
import TheDesolationOfSmaug from "../assets/the-desolation-of-smaug.jpeg";
import TheFellowshipOfTheRing from "../assets/the-fellowship-of-the-ring.jpeg";
import TheLordOfTheRingsSeries from "../assets/the-lord-of-the-rings-series.jpeg";
import TheReturnOfTheKing from "../assets/the-return-of-the-king.jpeg";
import TheTwoTowers from "../assets/the-two-towers.jpeg";
import TheUnexpectedJourney from "../assets/the-unexpected-journey.jpg";

export default function toAnyAction(action: unknown) {
  return action as AnyAction;
}

const banners = {
  RingsOfPower,
  TheBattleOfTheFiveArmies,
  TheDesolationOfSmaug,
  TheFellowshipOfTheRing,
  TheHobbitSeries: TheUnexpectedJourney,
  TheLordOfTheRingsSeries,
  TheReturnOfTheKing,
  TheTwoTowers,
  TheUnexpectedJourney,
};

export function getMovieImage(movieName: string) {
  const words = movieName.split(" ");

  const bannerName = words
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");

  return banners[bannerName as keyof typeof banners] || TheLordOfTheRingsSeries;
}
