import template from "./templates/products.hbs";
export const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 1500,
    description: 'A high-performance laptop for all your needs.',
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 700,
    description: 'A modern smartphone with an excellent camera.',
  },
  {
    id: 3,
    name: 'Headphones',
    price: 200,
    description: 'Noise-cancelling headphones for better focus.',
  },
];

const zakladki = {
    zaklInp: document.querySelector("#bookmarkInput"),
    zaklButton: document.querySelector("#addBookmarkBtn"),
    zaklList: document.querySelector("#bookmarkList"),
};
zakladki.zaklList.innerHTML = template({products});
let index = 0;
let zakladka = "zakladka" + index;

// zakladki.zaklButton.addEventListener("click", (e)=> {
//     let value = zakladki.zaklInp.value;
//     if(value !== ""){
//         index++;
//         zakladka = "zakladka" + index;
//         sessionStorage.setItem(zakladka ,value)
//         console.log(        sessionStorage.setItem(zakladka ,value)
// );
//     }
// })

zakladki.zaklList.addEventListener("click", (e)=>{
    if(!e.target.classList.contains("item")) {
        return
    };
    console.log(e.target.id);
    sessionStorage.setItem(e.target.id, JSON.stringify(e.target))
    console.log(JSON.parse(sessionStorage.getItem(e.target.id)));
})

console.log(products[1].id);