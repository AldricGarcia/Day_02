function getBasketContent(NbrFruits)
{
    const fruits = 
    [
  	'strawberry', 'strawberry', 'strawberry',
    'apple', 'apple',
    'lime', 'lime',
    'peach',
    'pear', 'pear'
    ];
	if (NbrFruits > fruits.length)
    {
  	console.log("Too many fruit(s) selected.");
    return[];
    }
    console.log(fruits.length + " fruit(s) selected");
    return fruits.slice(0, NbrFruits);
}