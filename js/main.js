

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show'); // Add the show class to animate
        } else {
            box.classList.remove('show'); // Remove class when out of view
        }
    });
}




// team card animation

const teamCards = document.querySelectorAll('.team .card');

window.addEventListener('scroll', checkTeamCards);

function checkTeamCards() {
    const triggerBottom = window.innerHeight / 5 * 4;

    teamCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
}

// Trigger the check when the page loads
checkTeamCards();
