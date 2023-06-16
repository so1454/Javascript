let blue = document.getElementById('blueBox');
let two = document.getElementById('redBox');
let three = document.getElementById('greenBox');
let four = document.getElementById('grayBox');

let boxList = document.querySelectorAll('div');
console.log(boxList);




const moveFunc = () =>{
    blue.style.marginLeft = "100px"
    three.style.marginLeft = "200px"
    four.style.marginLeft = "300px"

}

const roundFunc = () =>{
    for (let i = 0 ; i <boxList.length ; i ++){
        boxList[i].style.borderTopRightRadius = '50%'
        boxList[i].style.borderBottomLeftRadius = '50%'
    }

}

