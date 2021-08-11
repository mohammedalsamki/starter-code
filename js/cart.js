/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // document.getElementsByTagName("cart")[0].remove();

  let element1 = document.getElementById('cart');
  element1.innerHTML='';
  
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let tBody = document.getElementById('cart');
  // TODO: Find the table body
  

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR

  // TODO: Create a TD for the delete link, quantity,  and the item

  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for (let i=0; cart.items.length;i++)
  {
    let newproduct = cart.items[i];
  
    let rowEleaman1 = document.createElement('tr');
    let cellLink = document.createElement('td') ;
    let cellQuantity = document.createElement('td');
    let cellItem = document.createElement('td');
    let elButt = document.createElement('button');
  
    elButt.textContent = 'x';
    elButt.setAttribute('type', 'submit');
    elButt.setAttribute('name', i);
    cellLink.appendChild(elButt);
    rowEleaman1.appendChild(cellLink);
    cellQuantity.textContent = newproduct.quantity;
    rowEleaman1.appendChild(cellQuantity);
    cellItem.textContent = newproduct.product;
    rowEleaman1.appendChild(cellItem);
    tBody.appendChild(rowEleaman1);
  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  cart.removeItem(event.target.id);
  cart.saveToLocalStorage();
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
