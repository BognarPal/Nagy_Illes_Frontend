import { Class } from "./config.model";

export interface ClassWithStats extends Class {
    owned: number;
    used: number;
    kills: number;
    deaths: number;
  }