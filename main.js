const zucchine = [
{
    type : "a",
    length : 123,
    weight : 23,
},
{
    type : "b",
    length : 123,
    weight : 23,
},
{
    type : "c",
    length : 123,
    weight : 23,
},
{
    type : "d",
    length : 123,
    weight : 23,
},
{
    type : "e",
    length : 123,
    weight : 23,
},
{
    type : "f",
    length : 123,
    weight : 23,
},
{
    type : "g",
    length : 123,
    weight : 23,
},
{
    type : "h",
    length : 123,
    weight : 23,
},
{
    type : "i",
    length : 123,
    weight : 23,
},
{
    type : "a",
    length : 123,
    weight : 23,
}

]

let sum = 0
for (let i = 0; i < zucchine.length; i++){
    sum += zucchine[i].weight
}

console.log(sum)