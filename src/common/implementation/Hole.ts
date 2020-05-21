import { HoleStats } from "./HoleStats";

export class Hole {
  holeNumber: number;
  par: number;
  holeStats: HoleStats;
  constructor() {
    this.holeNumber = 1;
    this.par = 4;
    this.holeStats = new HoleStats();
  }
}
