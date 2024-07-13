import { athleteDataTypes } from "./athlete";
import { teamDataTypes } from "./team";

export type drawDataTypes = {
  athletes: athleteDataTypes[];
  teamsDrawn: teamDataTypes[];
};
