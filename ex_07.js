fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

function getFruitNameFromIndex(index)
{
	if (index === -1)
	{
		return fruits[5];
	}
  if (index < 0 || index > 5)
  {
  	return null;
  }
  return fruits[index];
}

let result = getFruitNameFromIndex("last");
displayResult("Kiwi");