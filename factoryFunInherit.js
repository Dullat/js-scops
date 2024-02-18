function createUser(name){
  let profileName = name;
  let points = 0;
  let addpoints = (value) => points +=value;
  let showpoints = () => points;
  
  return {profileName, addpoints, showpoints};
}

function userSkill(name, skill){
  let {profileName, addpoints, showpoints} = createUser(name);
  
  let intro = () => {
    console.log(`${profileName} has good skills in ${skill} and has ${showpoints()} points`);
  };
  
  return {intro};
}

let a1 = userSkill('chad', 'weight lifting');
a1.intro();