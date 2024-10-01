function getBasketContent(selectedCount)
{
    const fruits = 
    [
  	'strawberry', 'strawberry', 'strawberry',
    'apple', 'apple',
    'lime', 'lime',
    'peach',
    'pear', 'pear'
    ];
	if (selectedCount > fruits.length)
    {
  	console.log("Too many fruit(s) selected.");
    return[];
    }
    console.log(fruits.length + " fruit(s) selected");
    return fruits.slice(0, selectedCount);
}

let fruits = getBasketContent(10);
showMyBasket(fruits);