import { Hole } from "./Hole";

export class Database {
  holes: Hole[];
  constructor() {
    this.holes = new Array<Hole>();
  }
}
