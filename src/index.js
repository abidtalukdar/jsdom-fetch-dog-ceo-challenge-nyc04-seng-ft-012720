// CHALLENGE 1
const dogContainer = document.querySelector("#dog-image-container")

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
    const dogBreeds = Object.keys(breeds.message)
    dogBreeds.forEach(renderOneBreed)
}

const renderOneBreed = (dogBreed) => {
    const dogBreedLi = document.createElement("li")
    dogBreedLi.id = "breed"
    dogBreedLi.textContent = `${dogBreed}`
    breedsContainer.append(dogBreedLi)
}

breedsContainer.addEventListener("click", event => {
    if (event.target.id === "breed") {
        event.target.style.color = "#ff0000"
        console.log(event.target)
    }
})
