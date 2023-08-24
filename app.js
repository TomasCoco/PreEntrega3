const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')


const containerCartProducts = document.querySelector('.container-cart-products')
const btnCart = document.querySelector('.container-icon')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})


// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items')

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');



// Variable de arrays de Productos
let allProducts = []




productsList.addEventListener('click', e => {

        if(e.target.classList.contains('btn-add-cart')){  // devuelve un boolean si tiene o no esta clase en el Evento.

        const product = e.target.parentElement

        // Objeto literal:
        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        }
        
        allProducts = [...allProducts, infoProduct]
        showHTML()

    } 
      
})



// Function para mostrar el HTML
    const showHTML = () => {
        
        // Limpiar HTML
	    rowProduct.innerHTML = '';

            allProducts.forEach(product => {
            const containerProduct = document.createElement('div');
            containerProduct.classList.add('cart-product');


        // Agregamos la info y lo insertamos en el HTML:
        containerProduct.innerHTML = `
        <div class="info-cart-product">
                <p class="titulo-producto-carrito">vas a alquilar ${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
            `
            rowProduct.append(containerProduct);  // Agregamos al rowproduct el HTML
    })

}
