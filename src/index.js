document.addEventListener('DOMContentLoaded', () => {
        fetchAllDogs()
})
document.querySelector('#dog-form').addEventListener('submit', (e)=> {
    e.preventDefault()
    let newDoginfo = {
        name: e.target.name.value,
        breed: e.target.breed.value,
        gender: e.target.sex.value
        }
    renderDog(newDoginfo)
})


/////fetch ---------------------------------------------
function fetchAllDogs(){
    fetch(`http://localhost:3000/dogs`)
    .then(res => res.json())
    .then(json => {
        json.forEach((element) => {
            renderDog(element)
        })
    })
}

function dogInfo(id){
    fetch(`http://localhost:3000/dogs/${id}`)
    .then(res => res.json())
    .then(json => console.log(json))
}


///render ----------------------------------------

function renderDog(infos){
    
    let dogTable = document.createElement('tr')
    let dogName = document.createElement('td')
    let dogBreed = document.createElement('td')
    let dogGender = document.createElement('td')
    let editBtn = document.createElement('button')

    editBtn.style.width ="100%"
    editBtn.textContent = 'Edit Dog'

    dogTable.append(dogName,dogBreed, dogGender, editBtn)


    dogName.textContent = infos.name
    dogBreed.textContent = infos.breed
    dogGender.textContent = infos.sex
    
    document.querySelector('#table-body').append(dogTable)


    editBtn.addEventListener('click',() => {
        document.querySelector('#dog-form').name.value = infos.name
        document.querySelector('#dog-form').breed.value = infos.breed
        document.querySelector('#dog-form').sex.value = infos.sex    


    }) 
}

//Initial Render////////////////////////////////////////////












/////////////////////////////////////////////////////////////////// Adam's review

const dogsURL = "http://localhost:3000/dogs"
const tableContainer = document.querySelector("#table-body")
document.addEventListener('DOMContentLoaded', () => {
    fetchAllDogs()
})

function fetchDogs(){
    fetch(dogsURL)
    .then(res => res.json())
    .then(dogs => dogs.forEach(dog =>{
        console.log(tableRowMaker(dog))
    }))
}

function tableRowMaker(dog) {
    const tr = document.createElement('tr')
    tr.id = `dog-id-${dog.id}`
    const tdName = document.createElement ('td')
        td.name.textContent = dog.name
    const tdBreed = document.createElement ('td')
        td.breed.textContent = dog.breed
    const tdSex = document.createElement ('td')
        td.sex.textContent = dog.tdSex
    const tdButton = document.createElement ('td')
    const button = document.createElement('button')
        button.textContent = 'Edit Dog'
        button.style.width ="100%"
        button.addEventListener('click', () => buttonClick(dog))


    tdButton.append(button)


    tr.append(tdName, tdBreed, tdSex, tdButton)
    return tr
}

function buttonCLick(e){
    
}



<tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr>