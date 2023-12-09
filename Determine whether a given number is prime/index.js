/*
2] Problem: Determine whether a given number is prime.

	Input: 7
	Output: true

*/

let inputNum = prompt("Enter the Number: ");

function Prime(inputNum) {

  for(let i=2;i<=inputNum/2;1++)
  {
    if(inputNum%i == 0)
    {
      return true;
      break;
    }
    return false;

  }
  
}

let flag = Prime(inputNum);

if(flag == true)
{
  alert("The Number is not Prime");
}
else
{
  alert("The Number is Prime");
}