

let numberofseries= prompt("nechta kino kordingiz");

const series={
count : numberofseries,
serial : {},
actors : {},
genres : [],
privat : false,
};

let a= prompt('oxirgi korgan serialingiz');
let b= prompt('nechi baxo berdingiz');
let a1= prompt('oxirgi korgan serialingiz');
let b2= prompt('nechi baxo berdingiz');

series.serial[a]=b;
series.serial[a1]=b2;



console.log(series);