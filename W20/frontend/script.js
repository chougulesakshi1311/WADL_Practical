const API = "http://localhost:3000/employees";

// ADD
async function addEmployee() {
    const emp = {
        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        designation: document.getElementById("designation").value,
        salary: document.getElementById("salary").value,
        joiningDate: document.getElementById("joiningDate").value
    };

    await fetch(`${API}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(emp)
    });

    alert("Employee Added!");
    getEmployees();
}

// GET
async function getEmployees() {
    const res = await fetch(API);
    const data = await res.json();

    const list = document.getElementById("employeeList");
    list.innerHTML = "";

    data.employees.forEach(emp => {
        list.innerHTML += `
            <div class="employee">
                <b>${emp.name}</b> (${emp.designation})
                <br> Dept: ${emp.department}
                <br> Salary: ₹${emp.salary}
                <br> Joined: ${new Date(emp.joiningDate).toLocaleDateString()}
                <br>
                <button onclick="updateEmployee('${emp._id}')">Update</button>
                <button class="delete" onclick="deleteEmployee('${emp._id}')">Delete</button>
            </div>
        `;
    });
}

// DELETE
async function deleteEmployee(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    alert("Deleted!");
    getEmployees();
}

// UPDATE
async function updateEmployee(id) {
    const name = prompt("Enter name:");
    const department = prompt("Enter department:");
    const designation = prompt("Enter designation:");
    const salary = prompt("Enter salary:");
    const joiningDate = prompt("Enter joining date (YYYY-MM-DD):");

    await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, department, designation, salary, joiningDate })
    });

    alert("Updated!");
    getEmployees();
}