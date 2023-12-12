//your JS code here. If required.
function findLevel() {

    let parent = document.querySelector("#level").parentElement;
    let count = 1;

    while(parent != null) {
        console.log(parent);
        parent = parent.parentElement;

        count++;
    }
    alert(`The level of the element is: ${count}`);
}
findLevel();