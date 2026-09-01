document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const foodForm = document.getElementById('food-form');
    const foodNameInput = document.getElementById('food-name');
    const expiryDateInput = document.getElementById('expiry-date');
    const foodCategoryInput = document.getElementById('food-category');
    const foodList = document.getElementById('food-list');
    const emptyState = document.getElementById('empty-state');
    
    // Header elements
    const greetingText = document.getElementById('greeting');
    const summaryText = document.getElementById('summary-text');
    
    // Date selection elements
    const quickDateBtns = document.querySelectorAll('.btn-quick-date[data-days]');
    const customDateBtn = document.getElementById('btn-custom-date');
    const customDateContainer = document.getElementById('custom-date-container');

    // State
    let selectedQuickDays = 1; // Default to Tomorrow
    let isCustomDate = false;

    // Set minimum date to today for the date picker
    const todayStr = new Date().toISOString().split('T')[0];
    expiryDateInput.setAttribute('min', todayStr);
    
    // Initialize Greeting
    setGreeting();

    // Load items from localStorage
    let foodItems = JSON.parse(localStorage.getItem('leftoverFoodItems')) || [];

    // Initial render
    renderItems();

    // --- Event Listeners ---

    // Quick Date Selection
    quickDateBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            quickDateBtns.forEach(b => b.classList.remove('active'));
            customDateBtn.classList.remove('active');
            
            // Set active
            btn.classList.add('active');
            selectedQuickDays = parseInt(btn.getAttribute('data-days'), 10);
            isCustomDate = false;
            
            // Hide custom date picker
            customDateContainer.classList.add('hidden');
            expiryDateInput.removeAttribute('required');
        });
    });

    // Custom Date Toggle
    customDateBtn.addEventListener('click', () => {
        quickDateBtns.forEach(b => b.classList.remove('active'));
        customDateBtn.classList.add('active');
        isCustomDate = true;
        
        customDateContainer.classList.remove('hidden');
        expiryDateInput.setAttribute('required', 'true');
        expiryDateInput.focus();
    });

    // Form submission
    foodForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let finalExpiryDate = '';
        
        if (isCustomDate) {
            finalExpiryDate = expiryDateInput.value;
        } else {
            const date = new Date();
            date.setDate(date.getDate() + selectedQuickDays);
            finalExpiryDate = date.toISOString().split('T')[0];
        }

        const newItem = {
            id: Date.now().toString(),
            name: foodNameInput.value.trim(),
            expiryDate: finalExpiryDate,
            category: foodCategoryInput.value,
            createdAt: new Date().toISOString()
        };

        foodItems.push(newItem);
        saveItems();
        renderItems();
        
        // Reset form name input
        foodNameInput.value = '';
        foodNameInput.focus();
    });

    // --- Helper Functions ---

    function setGreeting() {
        const hour = new Date().getHours();
        let greeting = 'Good evening';
        if (hour >= 5 && hour < 12) greeting = 'Good morning';
        else if (hour >= 12 && hour < 17) greeting = 'Good afternoon';
        
        greetingText.textContent = `${greeting}, favour 👋`;
    }

    function saveItems() {
        localStorage.setItem('leftoverFoodItems', JSON.stringify(foodItems));
    }

    function deleteItem(id) {
        foodItems = foodItems.filter(item => item.id !== id);
        saveItems();
        renderItems();
    }

    function renderItems() {
        foodList.innerHTML = '';
        
        // Update header summary
        updateHeaderSummary();
        
        if (foodItems.length === 0) {
            emptyState.classList.remove('hidden');
            return;
        }

        emptyState.classList.add('hidden');

        // Sort items by expiry date (closest first)
        const sortedItems = [...foodItems].sort((a, b) => new Date(a.expiryDate) - new Date(b.expiryDate));

        sortedItems.forEach(item => {
            const daysLeft = calculateDaysLeft(item.expiryDate);
            const statusInfo = getStatusInfo(daysLeft);
            
            const itemElement = document.createElement('div');
            itemElement.className = 'food-item';
            
            // Format category for display (extract emoji and text if possible)
            let categoryDisplay = item.category;
            const categoryMap = {
                'meal': 'Cooked Meal',
                'produce': 'Produce',
                'dairy': 'Dairy',
                'meat': 'Meat',
                'other': 'Other'
            };
            if (categoryMap[item.category]) {
                categoryDisplay = categoryMap[item.category];
            }
            
            itemElement.innerHTML = `
                <div class="item-info">
                    <span class="item-name">${escapeHTML(item.name)}</span>
                    <div class="item-meta">
                        <span class="category-tag">${categoryDisplay}</span>
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
                deleteItem(e.target.closest('.btn-delete').getAttribute('data-id'));
            });
        });
    }

    function updateHeaderSummary() {
        const total = foodItems.length;
        if (total === 0) {
            summaryText.textContent = '0 items · Nothing expires soon';
            return;
        }
        
        let expiringSoon = 0;
        foodItems.forEach(item => {
            const days = calculateDaysLeft(item.expiryDate);
            if (days <= 2) {
                expiringSoon++;
            }
        });
        
        const itemText = total === 1 ? '1 item' : `${total} items`;
        let soonText = 'Nothing expires soon';
        
        if (expiringSoon > 0) {
            soonText = `<span style="color: var(--status-urgent)">${expiringSoon} expiring soon</span>`;
        }
        
        summaryText.innerHTML = `${itemText} · ${soonText}`;
    }

    function calculateDaysLeft(expiryDateStr) {
        const expiry = new Date(expiryDateStr);
        expiry.setHours(23, 59, 59, 999); 
        
        const now = new Date();
        const diffTime = expiry - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        return diffDays;
    }

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

    function formatDate(dateString) {
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        // Adjust for timezone offsets by parsing it carefully, but standard toLocaleDateString works okay here
        const d = new Date(dateString);
        // add timezone offset to prevent date shifting back 1 day locally
        d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
        return d.toLocaleDateString(undefined, options);
    }

    function escapeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
});
