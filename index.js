// Code your solutions in this file
function printBadges(name)
{
  for (let i = 0; i < name.length; i++)
{
  console.log('Welcome, ${name[i]}!  You are employee #${i+1}.');
}
return name
}
