const elSearchBtn = document.querySelector('#form');
const elCategorySelect = document.querySelector('#AllCategory');
const elSearchInput = document.querySelector('.searchInput');
let categoryOption = document.querySelector('#categoryOption');
const newSearchList = document.querySelector('#newSearchList');
const yearStart = document.querySelector('#yearStart');
const yearEnd = document.querySelector('#yearEnd');


elSearchBtn.addEventListener('submit', addSearchForm);

let searchArr = [];

function addSearchForm(e) {
    e.preventDefault();

    newSearchList.innerHTML =  '';


    let fCategory = elCategorySelect.value;
    let fInput =  elSearchInput.value;
    let fYearStart = yearStart.value;
    let fYearEnd = yearEnd.value;

    for(let i = 0; i < movies.length; i++){
    if(movies[i].categories.includes(fCategory) &&
        movies[i].title.toLowerCase().includes(fInput.toLowerCase()) && 
        fYearStart <= movies[i].year && fYearEnd >= movies[i].year
    ) {
        let li = document.createElement('li');
        li.className = 'downSearchItem'
    
        li.innerHTML = 
        ` <img class = "movi-img" src="${movies[i].youtubePoster}" alt="movie">
        <div class="addBtn">
            <button class="heart__btn" onclick ="addHeart('${movies[i].imdbId}')">
                <i class='bx bxs-heart'></i>
            </button>
        </div>
        <h3 class="card__title searchTitle">${movies[i].title}</h3>
        <div class="star__box d-flex">
            <div>
                <button onclick ="addModal('${movies[i].imdbId}')" class="ModalBtn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">watch</button>
            </div>
            <div>
                <i class='bx bxs-star'></i>
                <span>${movies[i].imdbRating}</span> 
            </div>
        </div>
        <div class="movie-category">${movies[i].categories}
        </div>`

        newSearchList.appendChild(li);

    }

    elCategorySelect.value="All"
     elSearchInput.value=""
     yearStart.value=""
     yearEnd.value=""
}
    
}


let newCategory = [];
for(let i = 0; i < movies.length; i++) {
    let janr = movies[i].categories
    for(let l = 0; l<janr.length; l++){
        if(!newCategory.includes(janr[l])) {
            newCategory.push(janr[l]);
        }
    }
}

for (let i = 0; i < newCategory.length; i++) {
    let newOption = document.createElement('option');
    newOption.innerHTML = newCategory[i]
    elCategorySelect.appendChild(newOption);
}


// header search

let headerSearch = document.querySelector('#headerSearch');
let searchInput = document.querySelector('#headerSinput');
let searchElementList = document.querySelector('#searchElementList');
let modalBody = document.querySelector('.modal-body');
let btnSearch = document.querySelector('.search_btn');


btnSearch.addEventListener('click', (e) => {
    e.preventDefault()
    let searchHeader = searchInput.value;

    for(let i = 0; i < movies.length; i++){
        if( movies[i].title.toLowerCase().includes(searchHeader.toLowerCase()) ) {
            let li = document.createElement('li');
            li.className = 'headerSearchItem';
            li.innerHTML = 
            ` <img class = "movi-img" src="${movies[i].youtubePoster}" alt="movie">
            <div class="addBtn">
                <button class="heart__btn" onclick ="addHeart('${movies[i].imdbId}')">
                    <i class='bx bxs-heart'></i>
                </button>
            </div>
            <h3 class="card__title searchTitle">${movies[i].title}</h3>
            <div class="star__box d-flex">
                <div>
                    <button onclick ="addModal('${movies[i].imdbId}')" class="ModalBtn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">watch</button>
                </div>
                <div>
                    <i class='bx bxs-star'></i>
                    <span>${movies[i].imdbRating}</span> 
                </div>
            </div>
            <div class="movie-category">${movies[i].categories}
            </div>`
    
            searchElementList.appendChild(li);
            modalBody.appendChild(searchElementList);
    
        }
    
    }

})










