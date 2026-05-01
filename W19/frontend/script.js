const API = "http://localhost:3000/student";

function showOutput(data) {
    document.getElementById("tableOutput").innerHTML = "";
    document.getElementById("output").textContent = JSON.stringify(data, null, 2);
}

// INSERT
async function insertData() {
    const res = await fetch(`${API}/insert`);
    const text = await res.text();
    alert(text);
}

// GET ALL
async function getAll() {
    const res = await fetch(`${API}/all`);
    const data = await res.json();
    showOutput(data);
}

// DSBDA > 20
async function dsbda() {
    const res = await fetch(`${API}/dsbda`);
    const data = await res.json();
    showOutput(data);
}

// ABOVE 25
async function above25() {
    const res = await fetch(`${API}/above25`);
    const data = await res.json();
    showOutput(data);
}

// LESS THAN 40
async function less40() {
    const res = await fetch(`${API}/less40`);
    const data = await res.json();
    showOutput(data);
}

// UPDATE
async function updateMarks() {
    const name = document.getElementById("updateName").value;
    const res = await fetch(`${API}/update/${name}`);
    const text = await res.text();
    alert(text);
}

// DELETE
async function deleteStudent() {
    const name = document.getElementById("deleteName").value;
    const res = await fetch(`${API}/delete/${name}`);
    const text = await res.text();
    alert(text);
}

// TABLE (HTML directly)
async function showTable() {
    const res = await fetch(`${API}/table`);
    const html = await res.text();

    document.getElementById("output").textContent = "";
    document.getElementById("tableOutput").innerHTML = html;
}