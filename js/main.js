let elList = document.querySelector('#listCard');
let elModalDesc = document.querySelector('.modalDesc');
let elModalBody = document.querySelector('.modal-body');
let elModalName = document.querySelector('.modal-header');
let elWatchModal = document.querySelector('.offcanvas__list');

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
                <button class="heart__btn" onclick ="addHeart('${movies[i].imdbId}')">
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

let addHeartBtn = document.querySelectorAll('.heart__btn');


render(movies)

function paginationFor(page) {
    console.log(page);
    let arrpag = []

    for (let i = ((page-1)*32); i<=(page*32); i++){
        arrpag.push(movies[i])
    }
    render(arrpag)
}

addHeartBtn.forEach(addHeartBtn => addHeartBtn.addEventListener('click', (e) => {
    e.target.style.color = 'red';
}));


let newHeartArr = [];

function addHeart (e) {
    for (let i = 30; i <= 53; i++) {
        if (movies[i].imdbId == e) {
            let b = movies[i];
            newHeartArr.push(b);
        }
    }

    elWatchModal.innerHTML = '';
    newHeartArr.forEach(item => {
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
                <button class ="remove__btn">X</button>
                </div>
            </div>
            <div class="movie-category">${item.categories}
            </div>
        ` 
        elWatchModal.appendChild(li);

    });
}

// let elRemoveBtn = document.querySelector('.remove__btn');

// elRemoveBtn.addEventListener('click', (e) => {
//     console.log(e.target);
// })

function addModal(e) {
    for(let i = 30; i <= 53; i++) {
        if (movies[i].imdbId == e) {
            let a = movies[i];
            elModalName.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">${a.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`
            elModalBody.innerHTML = `
            <div class="d-flex">
                <div>
                    <img class = "poster-img" src="${a.youtubePoster}" alt="poster">
                </div>
                <div class="modalDesc">${a.summary}</div>
            </div>`
        }
    }
} 