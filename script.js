function handleSubmit(event) {
    event.preventDefault();
    let form = document.querySelector('.order-form');
    let name = form.customer_name.value;
    let email = form.email.value;
    let product = form.product.value;
    let quantity = form.quantity.value;
    let deliveryMethod = form.delivery_method.value;
    
    let params = 
        "customer_name=" + encodeURIComponent(name) + "&" +
        "email=" + encodeURIComponent(email) + "&" +
        "product=" + encodeURIComponent(product) + "&" +
        "quantity=" + encodeURIComponent(quantity) + "&" +
        "delivery_method=" + encodeURIComponent(deliveryMethod);
    
    window.location.href = "order-confirmation.html?" + params;
}

function smoothScroll(event) {
    event.preventDefault();
    let targetId = this.getAttribute('href');
    let targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView();
}

window.onload = function() {
    let orderForm = document.querySelector('.order-form');
    orderForm.addEventListener('submit', handleSubmit);

    let navLinks = document.querySelectorAll('.navbar a');
    for(let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', smoothScroll);
    }
}
