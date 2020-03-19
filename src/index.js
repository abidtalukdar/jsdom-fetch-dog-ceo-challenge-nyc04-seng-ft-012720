// CHALLENGE 1
const dogContainer = document.querySelector("#dog-image-container")
const breedDropdown = document.querySelector("#breed-dropdown")

const fetchDogImages = () => {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
    }

fetchDogImages()
    .then(dogsImages => { renderAllDogImages(dogsImages) })

const renderAllDogImages = (dogImages) => {
    dogImages.message.forEach(renderOneDog)
}

const renderOneDog = (dogImageURL) => {
    const newDogImg = document.createElement("img")
    newDogImg.src = dogImageURL
    dogContainer.append(newDogImg)
}

// CHALLENGE 2
const breedsContainer = document.querySelector("#dog-breeds")

fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json()) 
    .then(dogBreedsData => 
        renderAllBreeds(dogBreedsData)
    )

const renderAllBreeds = (breeds) => {
    dogBreeds = Object.keys(breeds.message)
    dogBreeds.forEach(renderOneBreed)
}

const renderOneBreed = (dogBreed) => {
    const dogBreedLi = document.createElement("li")
    dogBreedLi.id = "breed"
    dogBreedLi.textContent = `${dogBreed}`
    breedsContainer.append(dogBreedLi)
}

// CHALLENGE 3
breedsContainer.addEventListener("click", event => {
    if (event.target.id === "breed") {
        event.target.style.color = "#ff0000"
        console.log(event.target)
    }
})

// CHALLENGE 4
breedDropdown.addEventListener('change', event => {
    // console.log(event.target.value)
    selectBreedsStartingWith(event.target.value)
})

const selectBreedsStartingWith = (letter) => {
    updateList(dogBreeds.filter(breed => 
        breed.startsWith(letter)
    ))
}

const updateList = (breeds) => {
    emptyContainer(breedsContainer)
    breeds.forEach(renderOneBreed)
}

const emptyContainer = (container) => {
    let childElement = container.lastElementChild
    while (childElement) {
        container.removeChild(childElement)
        childElement = container.lastElementChild
    }
}