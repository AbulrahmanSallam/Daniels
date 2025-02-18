import { Counter } from "./counter.module.js";
import { Fire } from "./Fire.module.js";
import { Validation } from "./validation.module.js";

const fire = new Fire();
// counter 
const counter = new Counter(
    [100, 200, 300, 400], // targetVals
    "achievement", // sectionId
    ["counter1", "counter2", "counter3", "counter4"] // counterIds
  );

// validation
 const validation = new Validation("form",["name","email","message"],["nameError","emailError","messageError"]);