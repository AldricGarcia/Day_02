function getBasketContent()
{
    const fruits = 
    [
  	'strawberry', 'strawberry', 'strawberry',
    'apple', 'apple',
    'lime', 'lime',
    'peach',
    'pear', 'pear'
    ];

console.log(fruits.length + " fruit(s) selected");
return fruits;
}
if (typeof getBasketContent === "function") {
	const fruits = getBasketContent()
	showMyBasket(fruits)
}