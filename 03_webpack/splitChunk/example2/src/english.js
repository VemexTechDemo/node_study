 import classB from './classes/class-b';
import classC from './classes/class-c';

let engligh = {
    teacher: 'english', age: 47
};

import(  './classes/class-a').then(classA =>{
    classA.push(engligh);
});

classB.push(engligh);
classC.push(engligh);
