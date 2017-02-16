/* Class to represent Job Applications, uses the fields from the example .json
  file as well as an additional isFaved attribute that will be used to maintain
  a saved state */

//import { Availability } from './availabilty'; // import Availability class
import { Question } from './question'; // import Question class

export class JobApplication {
  id: number;
  name: string;
  position: string;
  applied: string;
  experience: number;
  availability: any[];
  questions: Question[];
  isFaved: boolean;
}
