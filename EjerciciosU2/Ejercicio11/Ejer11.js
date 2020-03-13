let conjunA = new Set(['A', 'B', 'C', 'F', 'Y']);
let conjunB = new Set(['B', 'K', 'L', 'Y', 'H']);
let union = new Set([...conjunA, ...conjunB]);
console.log(union);
let intersection = new Set([...conjunA].filter(x => conjunB.has(x)));
console.log(intersection);
let difference = new Set([...conjunA].filter(x => !conjunB.has(x)));
console.log(difference);