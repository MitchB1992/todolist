let input = prompt("Enter your new prompt:");
const array = ["choco", "Moco"];

while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log(`***********************`);
        for (let i = 0; i < array.length; i++) {
            console.log(`${i}: ${array[i]}`);
        }
        console.log(`***********************`);
    } else if (input === "new") {
        const newItem = prompt("What is the new item?");
        array.push(newItem);
        console.log(`${newItem} has been added to the list.`);
    } else if (input === "Delete") {
        const index = parseInt(prompt("Which item do you wish to delete?"));
        if (!Number.isNaN(index)) {
            const deleted = array.splice(index, 1);
            console.log(`${deleted[0]} has been deleted from the list.`)
        } else {
            console.log("Unknown index");
        }
    }
    input = prompt("Enter your new prompt:");
}

console.log("You have quit the terminal.");
