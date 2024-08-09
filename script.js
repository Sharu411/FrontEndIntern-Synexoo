/* Menu */
let loginform = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    loginform.classList.toggle('active');
    navbar.classList.remove('active');
    cartpage.classList.remove('active');
}

let cartpage = document.querySelector('.cart-page');
document.querySelector('#cart-btn').onclick = () => {
    cartpage.classList.toggle('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');

}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu_btn').onclick = () => {
    navbar.classList.toggle('active');
    loginform.classList.remove('active');
    cartpage.classList.remove('active');
}

window.onscroll = () => {
    loginform.classList.remove('active');
    navbar.classList.remove('active');
    cartpage.classList.remove('active');
}

/* Login alert */
function login() {
    a = document.getElementById('email').value
    b = document.getElementById('password').value
    if (a == '' && b == '')
        alert("Please Enter Username and Password Correctly")
    else
        alert("Login Successfully")
}

/* Add to cart */
function addtocart() {
    alert("Your cart add successfully!!!")
}

document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.card button');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    products.forEach(button => {
        button.addEventListener('click', function () {
            const product = button.parentElement;
            const name = product.getAttribute('data-name');
            const price = parseFloat(product.getAttribute('data-price'));

            const cartItem = document.createElement('li');
            cartItem.textContent = `${name} - Rs-${price}`;
            cartItems.appendChild(cartItem);

            totalPrice += price;
            totalPriceElement.textContent = totalPrice.toFixed(2);
        });
    });

    document.getElementById('checkout-button').addEventListener('click', function () {
        alert('Thank you for your purchase!');
        cartItems.innerHTML = '';
        totalPrice = 0;
        totalPriceElement.textContent = totalPrice.toFixed(2);
    });
});

/* Review */
const reviewForm = document.getElementById('review-form');
const reviewList = document.getElementById('review-list');

reviewForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('reviewer-name').value;
    const content = document.getElementById('review-content').value;

    const reviewItem = document.createElement('li');
    reviewItem.innerHTML = `<strong>${name}</strong><p>${content}</p>`;
    reviewList.appendChild(reviewItem);

    reviewForm.reset();
});

/*Newsletter*/
function news() {
    a = document.getElementById('emailnews').value
    if (a=='')
        alert("Please Enter your Email ID")
    else
        alert(" Successfully subscribed!!!")
}