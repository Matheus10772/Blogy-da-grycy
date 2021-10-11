// function AddCard(){
//     if('content' in document.createElement('template')){
//         let divAssuntos = document.getElementsByClassName('Cards')[0];
//         let cardTemplate  = document.getElementById('Card#1');
        
//         let cloneCard = cardTemplate.content.cloneNode(true);
//     }
// }

function colorChange(){
    let cards = document.getElementsByClassName("Card");
    console.log(cards.length);
    for(let element of cards){
        console.log(element);
        if(parseInt(element.id) % 2 == 0 )
            element.children[0].style.backgroundColor = "#6C11FF";
    };
    
}

colorChange();