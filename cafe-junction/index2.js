
        const cart = [];
        const cartItemsList = document.getElementById('cartItems');
        const cartTotalDisplay = document.getElementById('cartTotal');
        const cartModal = document.getElementById('cartModal');
        const viewCartBtn = document.getElementById('viewCartBtn');
        const closeBtn = document.querySelector('.close');
        const orderBtn = document.getElementById('orderbtn');

        function updateCartDisplay() {
            cartItemsList.innerHTML = '';
            let total = 0;
            cart.forEach((item, index) => {
                const li = document.createElement('li');
                li.innerHTML = `${item.name} - <span class="math-inline">${item.price}₹ <span class\="remove\-item" data\-index\="</span>{index}">x</span>`;
                cartItemsList.appendChild(li);
                total += item.price;
            });
            cartTotalDisplay.textContent = `${total}₹`;
        }
        cartItemsList.addEventListener('click', function(event) {
            if (event.target.classList.contains('remove-item')) {
                const index = parseInt(event.target.dataset.index);
                cart.splice(index, 1);
                updateCartDisplay();
            }
        });

        document.querySelectorAll('.addToCartBtn').forEach(button => {
            button.addEventListener('click', function() {
                const menuItem = this.parentElement;
                const name = menuItem.dataset.name;
                const price = parseInt(menuItem.dataset.price);
                cart.push({ name, price });
                updateCartDisplay();
                alert(" Item Added Sucessfully")
            });
        });

        viewCartBtn.addEventListener('click', function() {
            updateCartDisplay();
            cartModal.style.display = 'block';
        });

        closeBtn.addEventListener('click', function() {
            cartModal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === cartModal) {
                cartModal.style.display = 'none';
            }
        });
    
        orderBtn.addEventListener('click', function(event){
            if(cart.length === 0){
                event.preventDefault();
                alert("Cart is empty");
            }
        });