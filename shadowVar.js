const age = 100;

function go() {
  const age = 200; //shadowed (means it has been over-written)
  const hair = 'blonde';
  console.log(age);
  console.log(hair);
}