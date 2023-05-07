// SECTION HEADER
// this section give to you a permission to change all of header 
// 
//          Elements from header
// Navbar; Title; Buttons;    
// 

//  Function ElementHeader()
//  is a function type of get & set elements
//  you can set name from buttons, name of title for page;
//  you get a section header and set elements


const ElementHeader = () =>{
    const navbar = document.querySelector("header")
    let TitlePage = 'Coffee Break'
    const optionsButton = ['All', 'Breakfest', 'Lunch', 'Shakes']

    navbar.innerHTML = `
    <h1> ${TitlePage} </h1>
    <ul class="options-list">
        <li> <button> ${optionsButton[0]} </button> </li>
        <li> <button> ${optionsButton[1]} </button> </li>
        <li> <button> ${optionsButton[2]} </button> </li>
        <li> <button> ${optionsButton[3]} </button> </li>
    </ul>
    `
}


// SECTION MAIN
// this section give to you a permission to change all from main content 
// 
//          Elements from header
// Navbar; Title; Buttons;    
// 


// Function dataProducts() 
// This function is typeof async, like send requised to a "FAKE API" has a name "products.jcon"
// This API return a response, this response is a ARRAY has objects;
// 
async function dataProducts(url="./api/products.json", data={}){
    const response = await fetch(url)
    if(response.status === 200){
        const dataJson = await response.json()
        const listProducts = dataJson.products
        return insertProducts(listProducts), filterProducts(listProducts)
    }
    else{
        alert("Houve um erro na requisição");
    }
    
}

//  Function FilterProducts() 
//  This function typeof get and set
//  she get all buttons from application and set a event to only element
//  when you active event, he do authenticator looking if has products in page
//  if return true, this fuction clean all elements and return a new array with categorie choosed
// 

const filterProducts = (product) =>{
    const buttons = document.querySelectorAll("li button")
    buttons[0].addEventListener('click', (() =>{
        const productList = document.querySelectorAll('div.product-from-container')
        {
            productList.length !=0 ? removeItems() :
            product.map((e) =>{
                    let arrayProduct = new Array()
                    arrayProduct = [e]
                    insertProducts(arrayProduct)
            })
        }
    }))


    buttons[1].addEventListener('click', (() =>{

        const productList = document.querySelectorAll('div.product-from-container')
        {
            productList.length !=0 ? removeItems() :
            product.map((e) =>{
                if(e.categorie == 'Breakfest'){
                    let arrayProduct = new Array()
                    arrayProduct = [e]
                    insertProducts(arrayProduct)
                }
            })
           
        }
    }))

    buttons[2].addEventListener('click', (() =>{

        const productList = document.querySelectorAll('div.product-from-container')
        {
            productList.length !=0 ? removeItems() :
            product.map((e) =>{
                if(e.categorie == 'Lunch'){
                    let arrayProduct = new Array()
                    arrayProduct = [e]
                    insertProducts(arrayProduct)
                }
            })
           
        }
    }))

    buttons[3].addEventListener('click', (() =>{

        const productList = document.querySelectorAll('div.product-from-container')
        {
            productList.length !=0 ? removeItems() :
            product.map((e) =>{
                if(e.categorie == 'Shakes'){
                    let arrayProduct = new Array()
                    arrayProduct = [e]
                    insertProducts(arrayProduct)
                }
            })
           
        }
    }))




}


// Function insertProducts
// This function recebive a response from FAKE API (products.json)
// This response can take name, image, price from product
//  and render this products with HTML ELEMENTOR
// 


const insertProducts = (product) =>{
        const divContainer = document.querySelector('.container-products');
      
        product.map((element) =>{   
            const div = document.createElement('div');
            div.classList.add('product-from-container');
              // insert elements in js
            div.innerHTML = `
            <div class="product-image">
            <img src="${element.image}">
        </div>
        <div class="product-texts">
            <ul>
                <li><span id="ProductName">${element.name}</span></li>
                <li><Span id="ProductPrice">${element.price}</Span></li>
            </ul>
            <div class="text-description">
                <span id="ProductDescription">
                    ${element.about}
                </span>
            </div>
        </div>
    `
    divContainer.appendChild(div)
})
};

//  function removeItems
//  this function is used to remove the HTML, insert before a filter of elements
// 

const removeItems = () =>{
    const ItemList = document.querySelectorAll('div.product-from-container')
    ItemList.forEach((element) =>{
        element.remove()
    })

}


setTimeout(() =>{
    ElementHeader()
    dataProducts()
}, 100)
