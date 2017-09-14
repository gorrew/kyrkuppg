const socket = io();
let ul = document.getElementById('ullist');

socket.on('uppdaterat', (votes)=> {
    console.log(votes);
    let li = document.createElement('li');
    li.innerText = `Kyrka ${votes.church}, Parti ${votes.parti}, Antal röster ${votes.votes}`;
    if(document.getElementsByTagName('li').length === 0){
        ul.appendChild(li);
    }
    else{
        ul.insertBefore(li, ul.firstChild);
    }


});