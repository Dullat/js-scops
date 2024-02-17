function user(name, job) {
    let work = job;
    
    return {
        work,
        showDetail(){
            console.log(`${name}'s job is ${work}`);
        }
    }
}

let user1 = user('idk', 'farming');

user1.showDetail();

console.log(user1.work);