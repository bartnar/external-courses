let arrOfBooks;

window.onload = function() {
  arrOfBooks = booksRequest();
  let booksSection = document.getElementById("books-wrapper");
  arrOfBooks.forEach(function(bookObj) {
    let book = createBook(bookObj);
    booksSection.appendChild(book);
  });
};

function booksRequest() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.myjson.com/bins/iat1e", false);
  xhr.send();
  return JSON.parse(xhr.responseText);
}

function createBook(bookObj) {
  let bookWrapper = document.createElement("div");
  bookWrapper.classList.add("particular-book-wrapper");
  //Create book image
  let img = new Image();
  img.src = bookObj.image_url;
  img.alt = bookObj.title;

  bookWrapper.appendChild(img);
  //Create title

  let name = document.createElement("div");
  name.classList.add("title");
  name.innerHTML = bookObj.title;
  bookWrapper.appendChild(name);

  //Create author

  let author = document.createElement("div");
  author.classList.add("author");
  author.innerHTML = `by ${bookObj.author.firstName} ${
    bookObj.author.lastName
  }`;
  bookWrapper.appendChild(author);

  //Create rating

  let rating = document.createElement("div");
  rating.classList.add("rating");
  rating.appendChild(setRate(bookObj.rating));
  bookWrapper.appendChild(rating);

  return bookWrapper;
}

function setRate(bookObjRating) {
  let rating = bookObjRating,
    ratingContainer = document.createElement("ul");
  for (let i = 0; i < 5; i++) {
    let starWrapper = document.createElement("li");
    starIcon = document.createElement("i");
    starIcon.setAttribute("aria-hidden", "true");
    starIcon.classList.add("fa-star");

    if (rating) {
      starIcon.classList.add("fa");
      rating--;
    } else {
      starIcon.classList.add("far");
    }
    starWrapper.appendChild(starIcon);
    ratingContainer.appendChild(starWrapper);
  }

  //! Ведется работа над hover по рейтингу
  //   starIcon.addEventListener("mouseover", function(e) {
  //     let myTarget = e.target;
  //     let i = starIcon.querySelectorAll(".fa-star").length;
  //     while (i--) {
  //       if (starIcon.querySelectorAll(".fa-star") === myTarget) {
  //         var currentIndex = i;
  //         break;
  //       }
  //     }
  //     setRate(currentIndex);
  //   });
  //   starIcon.addEventListener("mouseleave", function(e) {
  //     setRate(+starIcon.querySelectorAll(".fa-star").length - 1);
  //   });
  return ratingContainer;
}
