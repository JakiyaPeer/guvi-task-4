document.getElementById('entryForm').addEventListener('submit', addEntry);

function addEntry(event) {
    event.preventDefault();
    const desc = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;
    const entry = { id: Date.now(), desc, amount, type };
    entries.push(entry);
    displayEntries();
    updateTotal();
    document.getElementById('entryForm').reset();
}

let entries = [];

function displayEntries() {
    const container = document.getElementById('entriesContainer');
    container.innerHTML = '';
    entries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.innerHTML = `${entry.desc}: $${entry.amount} <button onclick="deleteEntry(${entry.id})">Delete</button>`;
        container.appendChild(entryDiv);
    });
}

function updateTotal() {
    const total = entries.reduce((acc, entry) => entry.type === 'income' ? acc + entry.amount : acc - entry.amount, 0);
    document.getElementById('totalDisplay').textContent = `Total: $${total}`;
}

function deleteEntry(id) {
    entries = entries.filter(entry => entry.id !== id);
    displayEntries();
    updateTotal();
}
