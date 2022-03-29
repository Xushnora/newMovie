const ulTag = document.querySelector('.pag-list');
const allMovie = document.querySelector('.allMovie');
let nextBtnValue = ""

let totalPages = (Math.floor(movies.length/32));

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

element(totalPages, 1);


let listBtn = document.querySelector('.numb');


ulTag.addEventListener('click', (e) => {
    let a = e.target.textContent;
    paginationFor(a)
})


let nextBtn = document.querySelector('#nextBtn');

nextBtn.addEventListener('click', (e) => {
    page = page + 1
    paginationFor(page)
})

