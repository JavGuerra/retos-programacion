// https://runestone.academy/ns/books/published/pythoned/Recursion/LasTorresDeHanoi.html

const discs = 3;

function moveTower(height, origin, destination, intermediate) {
    if (height >= 1) {
        moveTower(height - 1, origin, intermediate, destination);
        moveDisk(origin, destination);
        moveTower(height - 1, intermediate, destination, origin);
    }
}

function moveDisk(from, to) {
    console.log("mover disco de", from, "a", to);
}

moveTower(discs, "A", "B", "C");