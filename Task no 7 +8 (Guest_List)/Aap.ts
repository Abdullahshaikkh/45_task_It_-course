




let Guest_List : string[] = [ "Abdullah", "Faheem", "Mikail" ];



console.log("\nNEW LIST OF INVITATION : \n");

for ( let j=0; j < Guest_List.length; j++){
    console.log(`Dear ${Guest_List[j]} : \n you are invited to dinner! \n`);
}

console.log("Good news! We,ve found a bigger dinner table, so more space is available. So our new guests are : \n")

Guest_List.unshift("Masood");
Guest_List.splice(2, 0, "Amir");

Guest_List.push("Alina");
console.log(Guest_List);


for ( let i=0; i < Guest_List.length; i++){
    console.log(`Dear ${Guest_List[i]} : \n you are invited to dinner! \n`);
}




















































































