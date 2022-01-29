const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


// Buttons - Start
let buton = document.querySelector("#buton")

function createButton (dataId,buttonValue) {
  butonElement = document.createElement("button")
  butonElement.classList.add('btn', 'btn-outline-dark', 'me-3')
  butonElement.setAttribute("id",`${dataId}`)
  butonElement.innerHTML = `${buttonValue}`
  buton.append(butonElement)
}

createButton("all", "All")
createButton("korea", "Korea")
createButton("japan", "Japan")
createButton("china", "China")
// Buttons - End

// All Menu
let createMenuElement = (img, title, price, desc) => `
<div class="menu-items col-lg-6 col-sm-12">
    <img src=${img} alt="" class="photo">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${title}</h4>
          <h4 class="price">${price}</h4>
        </div>
        <div class="menu-text">
          ${desc}
        </div>
      </div>
</div>
`

let menuItem = document.querySelector("#menuItem")
let allButton = document.querySelector("#all")

allButton.addEventListener("click", allMenu)


function allMenu () {
  let allFood = ""
  let all = menu.map(product => {
    allFood += createMenuElement(product.img, product.title, product.price, product.desc)
    menuItem.innerHTML = allFood
  })
  return all
}

allMenu() //sayfayı açar açmaz tüm menünün ekranda gösterilmesi için

// Korea Menu
let koreaButton = document.querySelector("#korea")

let koreaAllMenu = menu.filter(foods => {
    return foods.category === "Korea"
  }
)

koreaButton.addEventListener("click", koreaMenu)

function koreaMenu() {
    let koreaFood = "";
    return koreaAllMenu.forEach(item => {
      koreaFood += createMenuElement(item.img, item.title, item.price, item.desc)
      menuItem.innerHTML = koreaFood;
    })

}

// Japan Menu
let japanButton = document.querySelector("#japan")

let japanAllMenu = menu.filter(foods => {
    return foods.category === "Japan"
  }
)

japanButton.addEventListener("click", japanMenu)

function japanMenu () {
  let japanFood = "";
  return japanAllMenu.forEach(item => {
    japanFood += createMenuElement(item.img, item.title, item.price, item.desc)
    menuItem.innerHTML = japanFood
  });
}

// China Menu
let chinaButton = document.querySelector("#china")

let chinaAllMenu = menu.filter(foods => {
  return foods.category === "China"
})

chinaButton.addEventListener("click", chinaMenu)

function chinaMenu() {
  let chinaFood = "";
  return chinaAllMenu.forEach(item => {
    chinaFood += createMenuElement(item.img, item.title, item.price, item.desc)
    menuItem.innerHTML = chinaFood
  })
}