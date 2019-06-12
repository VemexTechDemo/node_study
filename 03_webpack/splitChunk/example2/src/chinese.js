import classC from './classes/class-c';

let engligh = {
    teacher: 'english', age: 47
};


import( './classes/class-a').then(classA =>{
    classA.push(engligh);
});
import( './classes/class-b').then(classB =>{
    classB.push(engligh);
});
classC.push(engligh);
