let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollador front-end jr de sitios web con HTML, CSS & Bootstrap')
  .pauseFor(200)
  .deleteChars(10)
  .start();
