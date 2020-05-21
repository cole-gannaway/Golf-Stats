import { EFairway } from "./EFairway";

export class HoleStats {
  private numberOfPutts: number;
  private gir: boolean;
  private fairway: EFairway;
  constructor() {
    this.numberOfPutts = 2;
    this.gir = true;
    this.fairway = EFairway.CENTER;
  }
  public getnumberOfPutts() {
    return this.numberOfPutts;
  }
  public getgir() {
    return this.gir;
  }
  public getfairway() {
    return this.fairway;
  }
}
