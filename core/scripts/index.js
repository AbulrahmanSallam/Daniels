import { Counter } from "./counter.module.js";
import { Validation } from "./validation.module.js";

// fire aos 
AOS.init();
// ========= typed js =========
var typed = new Typed('#typed', {
    strings: ['Abdulrahman', 'Developer'],
    typeSpeed: 60,
    loop: true,
    backSpeed: 60,
    smartBackspace: false,
});

// counter 
new Counter([130, 250, 1020, 800]);

// validation
new Validation("form","name","nameError","email","emailError","message","messageError");