const listForm = document.getElementById("list-form")
const listInput = document.getElementById("list-input")
const listList = document.getElementById("list-list")
const listURL = `http://localhost:3000/lists`
const itemURL = `http://localhost:3000/lists`

function fetchLists(){
    fetch(listURL)
    .then(res => res.json())
    .then(lists => lists.forEach(list => renderList(list.title)))
}

listForm.addEventListener("submit", submitList)

function submitList(){
    event.preventDefault()
    const configObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            content: listInput.value
        })
    }
    fetch(listURL, configObj)

    renderList(listInput.value)
}

function renderList(list){
    console.log(list)
    const li = document.createElement('li')
    
    const l = document.createElement('l')
    l.innerText = list

    const itemForm = document.createElement('form')
    itemForm.innerHTML += `<input type="text" id="item-input"><input type="submit">`
    itemForm.addEventListener("submit", renderItem)

    const itemList = document.createElement('ul')
    li.append(l, itemForm, itemList)

    listList.appendChild(li)

    listForm.reset() 
}

function renderItem(e){
    e.preventDefault()
    const itemInput = e.target.children[0].value
    const itemList = e.target.nextElementSibling

    const li = document.createElement('li')
    li.innerText = itemInput
    itemList.appendChild(li)

    submitItem(itemInput)

    e.target.reset()
}

function submitItem(item){
    fethch(itemURL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            content: comment
        })
    })
}

fetchLists()