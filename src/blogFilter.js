let tabPanel = document.querySelector(".blog__tab--panel");
let blogBtns = document.getElementsByClassName("blog__tab--btn");
console.log(blogBtns);
blogBtns[0].classList.add("active");
let blogArr = [
  {
    id: 1,
    type: "Musobaqa",
    img: "../image/blog/blog1.png",
    date: "19-aprel, 2023",
    view: 119,
    title:
      "16-aprel kuni «Najot Ta'lim»da SMM\
        menejerlari uchun story management",
    text: "«SMM musobaqasi» bo'lib o'tdi",
  },
  {
    id: 2,
    type: "Master-klass",
    img: "../image/blog/blog2.png",
    date: "19-aprel, 2023",
    view: 119,
    title:
      "16-aprel kuni «Najot Ta'lim»da SMM\
        menejerlari uchun story management",
    text: "«SMM musobaqasi» bo'lib o'tdi",
  },
  {
    id: 3,
    type: "Musobaqa",
    img: "../image/blog/blog3.png",
    date: "19-aprel, 2023",
    view: 119,
    title:
      "16-aprel kuni «Najot Ta'lim»da SMM\
        menejerlari uchun story management",
    text: "«SMM musobaqasi» bo'lib o'tdi",
  },
  {
    id: 4,
    type: "Musobaqa",
    img: "../image/blog/blog4.png",
    date: "19-aprel, 2023",
    view: 119,
    title:
      "16-aprel kuni «Najot Ta'lim»da SMM\
        menejerlari uchun story management",
    text: "«SMM musobaqasi» bo'lib o'tdi",
  },
  {
    id: 5,
    type: "Master-klass",
    img: "../image/blog/blog5.png",
    date: "19-aprel, 2023",
    view: 119,
    title:
      "16-aprel kuni «Najot Ta'lim»da SMM\
        menejerlari uchun story management",
    text: "«SMM musobaqasi» bo'lib o'tdi",
  },
  {
    id: 6,
    type: "Musobaqa",
    img: "../image/blog/blog6.png",
    date: "19-aprel, 2023",
    view: 119,
    title:
      "16-aprel kuni «Najot Ta'lim»da SMM\
        menejerlari uchun story management",
    text: "«SMM musobaqasi» bo'lib o'tdi",
  },
  {
    id: 7,
    type: "Najot Quiz",
    img: "../image/blog/blog1.png",
    date: "19-aprel, 2023",
    view: 119,
    title:
      "16-aprel kuni «Najot Ta'lim»da SMM\
        menejerlari uchun story management",
    text: "«SMM musobaqasi» bo'lib o'tdi",
  },
  {
    id: 8,
    type: "Dasturlash",
    img: "../image/blog/blog5.png",
    date: "19-aprel, 2023",
    view: 119,
    title:
      "16-aprel kuni «Najot Ta'lim»da SMM\
        menejerlari uchun story management",
    text: "«SMM musobaqasi» bo'lib o'tdi",
  },
  {
    id: 9,
    type: "Bitiruv marosimi",
    img: "../image/blog/blog3.png",
    date: "19-aprel, 2023",
    view: 119,
    title:
      "16-aprel kuni «Najot Ta'lim»da SMM\
        menejerlari uchun story management",
    text: "«SMM musobaqasi» bo'lib o'tdi",
  },
];
function createCard(type,img, date, view, title, text) {
  return `
    <li class="blog__card">
    <div class="blog__card--img">
      <span>${type}</span>
      <img src="${img}" />
    </div>
    <div class="blog__card--content">
      <div>
        <p>${date}</p>
        <p>
          <img src="./image/blog/eye-icon.svg" alt="eye-icon" />${view}
        </p>
      </div>
      <h4>
       ${title}
      </h4>
      <p>${text}</p>
    </div>
  </li>
    `;
}
function showAll(index,id) {
  tabPanel.innerHTML = "";
  for (const el of blogArr) {
    if (el.id < index) {
      tabPanel.innerHTML += createCard(
        el.type,
        el.img,
        el.date,
        el.view,
        el.title,
        el.text
      );
    }
  }
  for (const el of blogBtns) {
    el.classList.remove("active");
  }
  blogBtns[id].classList.add("active");
}
showAll(7, 0);
function showTabBlog(attr, index) {
  tabPanel.innerHTML = "";
  for (const el of blogArr) {
    if (el.type == attr) {
      tabPanel.innerHTML += createCard(
        el.type,
        el.img,
        el.date,
        el.view,
        el.title,
        el.text
      );
    }
  }
  for (const el of blogBtns) {
    el.classList.remove("active");
  }
  blogBtns[index].classList.add("active");
}
