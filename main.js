async function getData() {
    try {
        const response = await fetch();
        const data = await response.json();
        createPerson(data);
    } catch (err) {
        generateError(err);
    } finally {
        console.log("Kończę działanie");
    }
}
getData();

function createPerson(item) {
    console.log(item);
    const card = document.createElement("div");
    card.innerHTML = `
    <h2>${item.name}<h2>
    <p>${item.height}<p>
    `;
    document.body.append(card);
}