const socket = io();
const form = document.getElementById('form');
const church = document.getElementById('kyrkor');
const parti = document.getElementById('partier');
const votes = document.getElementById('votes');

form.addEventListener('submit', () => {
   const values = {
       church: church.options[church.selectedIndex].value,
       parti: parti.options[parti.selectedIndex].value,
       votes: votes.value
   };
    socket.emit('uppdaterat', values);
    event.preventDefault();
    return false;
});

