const API = "http://localhost:3000/songs";

function show(data) {
    document.getElementById("tableOutput").innerHTML = "";
    document.getElementById("output").textContent = JSON.stringify(data, null, 2);
}

// INSERT
async function insertSongs() {
    const res = await fetch(`${API}/insert`);
    alert(await res.text());
}

// ALL
async function getAll() {
    const res = await fetch(`${API}/all`);
    show(await res.json());
}

// DIRECTOR
async function getDirectorSongs() {
    const name = document.getElementById("directorName").value;
    const res = await fetch(`${API}/director/${name}`);
    show(await res.json());
}

// DIRECTOR + SINGER
async function getDirectorSinger() {
    const dir = document.getElementById("dir").value;
    const singer = document.getElementById("singer").value;
    const res = await fetch(`${API}/director/${dir}/${singer}`);
    show(await res.json());
}

// SINGER + FILM
async function getSingerFilm() {
    const singer = document.getElementById("filmSinger").value;
    const film = document.getElementById("filmName").value;
    const res = await fetch(`${API}/film/${singer}/${film}`);
    show(await res.json());
}

// ADD SONG
async function addSong() {
    const data = {
        Songname: document.getElementById("songname").value,
        Film: document.getElementById("film").value,
        Music_director: document.getElementById("music").value,
        Singer: document.getElementById("singerAdd").value
    };

    await fetch(`${API}/add`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    alert("Song Added");
}

// UPDATE
async function updateActor() {
    const name = document.getElementById("updateSong").value;

    const data = {
        Actor: document.getElementById("actor").value,
        Actress: document.getElementById("actress").value
    };

    await fetch(`${API}/update/${name}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    alert("Updated");
}

// DELETE
async function deleteSong() {
    const name = document.getElementById("deleteSong").value;
    const res = await fetch(`${API}/delete/${name}`);
    alert(await res.text());
}

// TABLE
async function showTable() {
    const res = await fetch(`${API}/table`);
    const html = await res.text();

    document.getElementById("output").textContent = "";
    document.getElementById("tableOutput").innerHTML = html;
}