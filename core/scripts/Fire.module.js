export class Fire {
  constructor() {
    // ========= aos =========
    AOS.init();
    // ========= typed js =========
    const typed = new Typed("#typed", {
      strings: ['Abdulrahman', 'Developer'],
      typeSpeed: 60,
      loop: true,
      backSpeed: 60,
      smartBackspace: false,
    });
  }
}
