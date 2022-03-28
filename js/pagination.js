const ulTag = document.querySelector('.pag-list');
const allMovie = document.querySelector('.allMovie');
// let elList = document.querySelector('#listCard');


let totalPages = 104;

    // for(let i = 0; i < 32; i++) {
    //     let li = document.createElement('li');
    //     li.style.position = 'relative';
    //     li.style.width = '300px';
    //     li.innerHTML = `
    //         <img class = "movi-img" src="${movies[i].youtubePoster}" alt="movie">
    //         <div class="addBtn">
    //             <button class="heart__btn" onclick ="addHeart('${movies[i].imdbId}')">
    //                 <i class='bx bxs-heart'></i>
    //             </button>
    //         </div>
    //         <span class="currient">${movies[i].year}  ${movies[i].language}</span>
    //         <h3 class="card__title">${movies[i].title}</h3>
    //         <div class="star__box d-flex">
    //             <div>
    //                 <button onclick ="addModal('${movies[i].imdbId}')" class="ModalBtn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">watch</button>
    //             </div>
    //             <div>
    //                 <i class='bx bxs-star'></i>
    //                 <span>${movies[i].imdbRating}</span> 
    //             </div>
    //         </div>
    //         <div class="movie-category">${movies[i].categories}
    //         </div>
    //     `
    //     elList.appendChild(li);
    // }

function element(totalPages, page) {
    let liTag = '';
    let beforePages = page - 1;
    let afterPages = page + 1;
    let activeLi;

    if(page > 1) {
        liTag += `<li class="btp prev" onclick = "element(totalPages, ${page - 1})"><span><i class='bx bx-chevron-left'></i>Prev</span></li>`
    }
    if(page > 2) {
        liTag += `<li class="numb" onclick = "element(totalPages, 1)"><span>1</span></li>`;
        if(page > 3) {
            liTag += `<li class="dots"><span>...</span></li>`;
        }
    }

    // before

    if(page == totalPages) {
        beforePages = beforePages - 2;
    } else if (page == totalPages - 1) {
        beforePages = beforePages - 1;
    }

    // after

    if(page == 1) {
        afterPages = afterPages + 2;
    } else if (page == 2) {
        afterPages = afterPages + 1;
    }

    for(let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
        if(pageLength > totalPages) {
            continue;
        }
        if(pageLength == 0) {
            pageLength = pageLength + 1;
        }

        if(page == pageLength){
            activeLi = "actived";
        } else {
            activeLi = "";
        }

        liTag += `<li class="numb ${activeLi}" onclick = "element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
    }

    if(page < totalPages - 1) {
        if(page < totalPages - 2) {
            liTag += `<li class="dots"><span>...</span></li>`;
        }
        liTag += `<li class="numb" onclick = "element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    }

    if(page < totalPages) {
        liTag += `<li class="btp next"  onclick = "element(totalPages, ${page + 1})"><span id = "nextBtn">Next<i class='bx bx-chevron-right' ></i></span></li>`
    }

    ulTag.innerHTML = liTag;
}

element(totalPages, 50);


// let listBtn = document.querySelector('.numb');

// ulTag.addEventListener('click', (e) => {
//     let a = e.target.textContent;
//     for (let i = 0; i < MOVIES.length; i++) {

//     }
// })



let nextBtn = document.querySelector('#nextBtn');

nextBtn.addEventListener('click', () => {
    filterMovi();
})

let newFilterArr = []

// function filterMovi() {
//     newFilterArr = movies.filter((item, index) => {
//         if (index >= 32 && index < 64) {
//             return index;
//         }
//     });

//     elList.innerHTML = '';

//     for (let i = 0; i < newFilterArr.length; i++) {
//         let li = document.createElement('li');
//             li.style.position = 'relative';
//             li.style.width = '300px';
//             li.innerHTML = `
//                 <img class = "movi-img" src="${movies[i].youtubePoster}" alt="movie">
//                 <div class="addBtn">
//                     <button class="heart__btn" onclick ="addHeart('${movies[i].imdbId}')">
//                         <i class='bx bxs-heart'></i>
//                     </button>
//                 </div>
//                 <span class="currient">${movies[i].year}  ${movies[i].language}</span>
//                 <h3 class="card__title">${movies[i].title}</h3>
//                 <div class="star__box d-flex">
//                     <div>
//                         <button onclick ="addModal('${movies[i].imdbId}')" class="ModalBtn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">watch</button>
//                     </div>
//                     <div>
//                         <i class='bx bxs-star'></i>
//                         <span>${movies[i].imdbRating}</span> 
//                     </div>
//                 </div>
//                 <div class="movie-category">${movies[i].categories}
//                 </div>
//             `
//             elList.appendChild(li);
//     }
// }