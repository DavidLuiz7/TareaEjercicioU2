var lisOrde = [2, 1, 5, 8, 6];
console.log(lisOrde);
var list = lisOrde.sort();
console.log(list);

for (i = 0; i < lisOrde.length; i++) {
    console.log(lisOrde[i] == (list[i]));
}