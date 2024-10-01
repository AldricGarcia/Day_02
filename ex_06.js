fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

displayResult(null);

function fruitIndex(fruitName)
{
    if(fruitName === "Blackberries"){displayResult(0)}
    if(fruitName === "Apples"){displayResult(1)}
    if(fruitName === "Banana"){displayResult(2)}
    if(fruitName === "Mango"){displayResult(3)}
    if(fruitName === "Peaches"){displayResult(4)}
    if(fruitName === "Kiwi"){displayResult(5)}
}

fruitIndex("Kiwi");