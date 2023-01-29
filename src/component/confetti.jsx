import confetti from 'canvas-confetti';


const count = 200;
const defaults = {
   origin: { y: 0.7 }
};


function fire(particleRatio, opts) {
   confetti(Object.assign({}, defaults, opts, {
       particleCount: Math.floor(count * particleRatio)
   }));
}


const boom = () => {
   fire(0.35, {
       spread: 100,
       decay: 0.91,
       scalar: 0.8
   });
   fire(0.1, {
       spread: 120,
       startVelocity: 25,
       decay: 0.92,
       scalar: 1.2
   });
   fire(0.1, {
       spread: 120,
       startVelocity: 45,
   });
};


export default boom;
