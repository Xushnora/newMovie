let elList = document.querySelector('#listCard');
let elModalDesc = document.querySelector('.modalDesc');
let elModalBody = document.querySelector('#modalBody');
let elModalName = document.querySelector('.modal-header');
let elWatchModal = document.querySelector('.offcanvas__list');
let movieSliderList = document.querySelector('.movieSliderList');


// slider 2

for(let i = 0; i < 8; i++) {
    let li = document.createElement('li');
    li.className = 'slideListCard'
    li.innerHTML = `
        <img class = "movi-img" src="${movies[i].youtubePoster}" alt="movie">
        <div class="addBtn">
            <button class="heart__btn">
                <i class='bx bxs-heart'></i>
            </button>
        </div>
        <span class="currient">USA, 2016-Current</span>
        <h3 class="card__title">${movies[i].title}</h3>
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
        </div>
    `
    movieSliderList.appendChild(li);
}

let page = 1;

function render(movies) {
    elList.innerHTML = '';

    for(let i = 0; i < 32; i++) {
        let li = document.createElement('li');
        li.style.position = 'relative';
        li.style.width = '300px';
        li.style.marginBottom = '30px';
        li.innerHTML = `
            <img class = "movi-img" src="${movies[i].youtubePoster}" alt="movie">
            <div class="addBtn">
                <button class="heart__btn" onclick ="addHeart('${movies[i].imdbId}')" id="${movies[i].imdbId}" >
                    <i class='bx bxs-heart'></i>
                </button>
            </div>
            <span class="currient">USA, 2016-Current</span>
            <h3 class="card__title">${movies[i].title}</h3>
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
            </div>
        `
        elList.appendChild(li);
    }
}


render(movies)

function paginationFor(page) {
    let arrpag = []

    for (let i = ((page-1)*32); i<=(page*32); i++){
        arrpag.push(movies[i])
    }
    render(arrpag)
}

// let addHeartBtn = document.querySelectorAll('.heart__btn');

// addHeartBtn.forEach(addHeartBtn => addHeartBtn.addEventListener('click', (e) => {
//     e.target.style.color = 'red';
// }));


let newHeartArr = [];

function addHeart(id) {
    let testBtn = document.querySelector(`#${id}`);
    testBtn.style.background = 'red';

    console.log(id);    

    for (let i = 0; i <= movies.length; i++) {
        if(movies[i].imdbId == id) {
            newHeartArr.push(movies[i])
            
            elWatchModal.innerHTML = '';
            newHeartArr.forEach((item) => {
                let li = document.createElement('li');
                li.className = 'cards__item';
                li.style.width = '270';
                li.innerHTML = `
                    <img src="${item.youtubePoster}" alt="movie" width="320" height="170">
                    <div class="addBtn">
                        <button class="heart__btn" id = "hearts">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <h3 class="card__title">${item.title}</h3>
                    <div class="star__box d-flex">
                        <div>
                            <i class='bx bxs-star'></i>
                            <span>${item.imdbRating}</span> 
                        </div>
                        <div>
                        <button class ="remove__btn" onclick = "removeFunc(e)">X</button>
                        </div>
                    </div>
                    <div class="movie-category">${item.categories}
                    </div>
                ` 
                elWatchModal.appendChild(li);

            });
        }
    }
}

function removeFunc (e) {
    console.log(e.currentTarget);
}

// modal qo'shish

function addModal(id) {
    for(let i = 0; i <= movies.length; i++) {
      
        if (movies[i].imdbId == id) {
            console.log('ok');
            elModalName.innerHTML = `
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`
            elModalBody.innerHTML = `
            <div class="d-flex">
                <div>
                    <img class = "poster-img" src="${movies[i].youtubePoster}" alt="poster">
                </div>
                <div class="modalDesc">
                <h5 class="modal-title" id="exampleModalLabel">${movies[i].title}</h5>
                ${movies[i].summary}</div>
            </div>`
        }
    }
}
