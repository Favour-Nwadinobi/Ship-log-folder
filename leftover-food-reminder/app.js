document.addEventListener('DOMContentLoaded', () => {
    const foodForm = document.getElementById('food-form');
    const foodNameInput = document.getElementById('food-name');
    const expiryDateInput = document.getElementById('expiry-date');
    const foodCategoryInput = document.getElementById('food-category');
    const foodList = document.getElementById('food-list');
    const emptyState = document.getElementById('empty-state');
    const totalItemsSpan = document.getElementById('total-items');

    // Set minimum date to today for the date picker
    const today = new Date().toISOString().split('T')[0];
    expiryDateInput.setAttribute('min', today);

    // Load items from localStorage
    let foodItems = JSON.parse(localStorage.getItem('leftoverFoodItems')) || [];

    // Initial render
    renderItems();

    // Form submission handler
    foodForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newItem = {
            id: Date.now().toString(),
            name: foodNameInput.value.trim(),
            expiryDate: expiryDateInput.value,
            category: foodCategoryInput.value,
            createdAt: new Date().toISOString()
        };

        foodItems.push(newItem);
        saveItems();
        renderItems();
        
        // Reset form except for the date
        foodNameInput.value = '';
        foodNameInput.focus();
    });

    // Save items to localStorage
    function saveItems() {
        localStorage.setItem('leftoverFoodItems', JSON.stringify(foodItems));
    }

    // Delete item handler
    function deleteItem(id) {
        foodItems = foodItems.filter(item => item.id !== id);
        saveItems();
        renderItems();
    }

    // Render items to the DOM
    function renderItems() {
        foodList.innerHTML = '';
        
        if (foodItems.length === 0) {
            emptyState.classList.remove('hidden');
            totalItemsSpan.textContent = '0 items';
            return;
        }

        emptyState.classList.add('hidden');
        totalItemsSpan.textContent = `${foodItems.length} item${foodItems.length !== 1 ? 's' : ''}`;

        // Sort items by expiry date (closest first)
        const sortedItems = [...foodItems].sort((a, b) => new Date(a.expiryDate) - new Date(b.expiryDate));

        sortedItems.forEach(item => {
            const daysLeft = calculateDaysLeft(item.expiryDate);
            const statusInfo = getStatusInfo(daysLeft);
            
            const itemElement = document.createElement('div');
            itemElement.className = 'food-item';
            
            itemElement.innerHTML = `
                <div class="item-info">
                    <span class="item-name">${escapeHTML(item.name)}</span>
                    <div class="item-meta">
                        <span class="category-tag">${item.category}</span>
                        <span class="expiry-text">Expires: ${formatDate(item.expiryDate)}</span>
                    </div>
                </div>
                <div class="item-status">
                    <span class="status-badge ${statusInfo.className}">${statusInfo.text}</span>
                    <button class="btn-delete" aria-label="Delete item" data-id="${item.id}">
                        &times;
                    </button>
                </div>
            `;

            foodList.appendChild(itemElement);
        });

        // Add event listeners to delete buttons
        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                deleteItem(e.target.getAttribute('data-id'));
            });
        });
    }

    // Calculate difference in days
    function calculateDaysLeft(expiryDateStr) {
        const expiry = new Date(expiryDateStr);
        expiry.setHours(23, 59, 59, 999); // Set to end of the expiry day
        
        const now = new Date();
        const diffTime = expiry - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        return diffDays;
    }

    // Get status class and text based on days left
    function getStatusInfo(daysLeft) {
        if (daysLeft < 0) {
            return { className: 'status-urgent', text: 'Expired' };
        } else if (daysLeft === 0) {
            return { className: 'status-urgent', text: 'Expires Today' };
        } else if (daysLeft <= 2) {
            return { className: 'status-soon', text: `${daysLeft} days left` };
        } else {
            return { className: 'status-good', text: `${daysLeft} days left` };
        }
    }

    // Helper to format date
    function formatDate(dateString) {
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    // Simple HTML escaping to prevent XSS
    function escapeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
});
