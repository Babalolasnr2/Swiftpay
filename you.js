// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load all data
    loadBanks();
    loadBeneficiaries();
    loadTransactions();
    loadNetworks();
    loadDataPlans();
    loadBillCategories();
    loadLoanProducts();
    
    // Set up event listeners
    setupNavigation();
    setupButtonListeners();
    setupFormSubmissions();
});

// Data loading functions
function loadBanks() {
    const banks = [
        { name: 'Access Bank', code: '044' },
        { name: 'Zenith Bank', code: '057' },
        { name: 'GTBank', code: '058' },
        { name: 'First Bank', code: '011' },
        { name: 'UBA', code: '033' }
    ];
    
    const select = document.getElementById('bank-select');
    banks.forEach(bank => {
        const option = document.createElement('option');
        option.value = bank.code;
        option.textContent = bank.name;
        select.appendChild(option);
    });
}

function loadBeneficiaries() {
    const beneficiaries = [
        { name: 'John D.', initials: 'JD' },
        { name: 'Amina S.', initials: 'AS' },
        { name: 'Mike K.', initials: 'MK' }
    ];
    
    const container = document.getElementById('beneficiary-list');
    
    beneficiaries.forEach(beneficiary => {
        const item = document.createElement('div');
        item.className = 'beneficiary-item';
        item.innerHTML = `
            <div class="beneficiary-avatar">${beneficiary.initials}</div>
            <div class="beneficiary-name">${beneficiary.name}</div>
        `;
        container.appendChild(item);
    });
    
    // Add "New" button
    const newItem = document.createElement('div');
    newItem.className = 'beneficiary-item';
    newItem.innerHTML = `
        <div class="beneficiary-avatar"><i class="fas fa-plus"></i></div>
        <div class="beneficiary-name">New</div>
    `;
    container.appendChild(newItem);
}

function loadTransactions() {
    const transactions = [
        { 
            type: 'Airtime Purchase', 
            details: 'MTN • Today, 10:30 AM', 
            amount: '-₦1,000', 
            icon: 'mobile-alt',
            isCredit: false
        },
        { 
            type: 'Money Received', 
            details: 'From John Doe • Yesterday', 
            amount: '+₦15,000', 
            icon: 'exchange-alt',
            isCredit: true
        },
        { 
            type: 'Electricity Bill', 
            details: 'IKEDC • 2 days ago', 
            amount: '-₦5,430', 
            icon: 'lightbulb',
            isCredit: false
        },
        { 
            type: 'Data Subscription', 
            details: 'Airtel • 3 days ago', 
            amount: '-₦2,000', 
            icon: 'database',
            isCredit: false
        }
    ];
    
    const container = document.getElementById('transactions-list');
    
    transactions.forEach(transaction => {
        const item = document.createElement('div');
        item.className = 'transaction-item';
        item.innerHTML = `
            <div class="transaction-left">
                <div class="transaction-icon">
                    <i class="fas fa-${transaction.icon}"></i>
                </div>
                <div class="transaction-details">
                    <h4>${transaction.type}</h4>
                    <p>${transaction.details}</p>
                </div>
            </div>
            <div class="transaction-amount ${transaction.isCredit ? 'credit' : 'debit'}">${transaction.amount}</div>
        `;
        container.appendChild(item);
    });
}

function loadNetworks() {
    const networks = [
        { name: 'MTN', color: '#ffcc00' },
        { name: 'Airtel', color: '#ed1c24' },
        { name: 'Glo', color: '#00a859' },
        { name: '9mobile', color: '#00a859' }
    ];
    
    const airtimeContainer = document.getElementById('airtime-networks');
    const dataContainer = document.getElementById('data-networks');
    
    networks.forEach(network => {
        const item = document.createElement('div');
        item.className = 'network-item';
        item.setAttribute('data-network', network.name.toLowerCase());
        item.innerHTML = `
            <div class="network-logo" style="color: ${network.color};">
                <i class="fas fa-sim-card"></i>
            </div>
            <div class="action-name">${network.name}</div>
        `;
        
        // Clone for both airtime and data pages
        airtimeContainer.appendChild(item.cloneNode(true));
        dataContainer.appendChild(item.cloneNode(true));
    });
}

function loadDataPlans() {
    const plans = [
        { size: '1GB', price: '₦500', validity: '30 days', daily: '50MB' },
        { size: '2.5GB', price: '₦1,000', validity: '30 days', daily: '100MB' },
        { size: '5.5GB', price: '₦2,000', validity: '30 days', daily: '200MB' }
    ];
    
    const container = document.getElementById('data-plans');
    
    plans.forEach(plan => {
        const card = document.createElement('div');
        card.className = 'plan-card';
        card.innerHTML = `
            <div class="plan-header">
                <div class="plan-size">${plan.size}</div>
                <div class="plan-amount">${plan.price}</div>
            </div>
            <div class="plan-details">
                <span>${plan.validity} validity</span>
                <span>Daily: ${plan.daily}</span>
            </div>
        `;
        container.appendChild(card);
    });
}

function loadBillCategories() {
    const categories = [
        { name: 'TV', icon: 'tv' },
        { name: 'Electricity', icon: 'bolt' },
        { name: 'Water', icon: 'tint' },
        { name: 'Internet', icon: 'wifi' },
        { name: 'Cable TV', icon: 'gamepad' },
        { name: 'Education', icon: 'school' },
        { name: 'Betting', icon: 'money-bill-wave' },
        { name: 'More', icon: 'ellipsis-h' }
    ];
    
    const container = document.getElementById('bill-categories');
    
    categories.forEach(category => {
        const item = document.createElement('div');
        item.className = 'bill-item';
        item.innerHTML = `
            <div class="bill-icon">
                <i class="fas fa-${category.icon}"></i>
            </div>
            <div class="action-name">${category.name}</div>
        `;
        container.appendChild(item);
    });
}

function loadLoanProducts() {
    const loans = [
        { 
            name: 'Quick Loan', 
            amount: 'Up to ₦50,000', 
            details: 'Get instant access to funds with our quick loan. Repay in 30 days with low interest.' 
        },
        { 
            name: 'Personal Loan', 
            amount: 'Up to ₦200,000', 
            details: 'Flexible personal loans with repayment periods up to 12 months.' 
        },
        { 
            name: 'Business Loan', 
            amount: 'Up to ₦500,000', 
            details: 'Grow your business with our low-interest business loans.' 
        }
    ];
    
    const container = document.getElementById('loan-products');
    
    loans.forEach(loan => {
        const card = document.createElement('div');
        card.className = 'loan-card';
        card.innerHTML = `
            <div class="loan-header">
                <div class="loan-name">${loan.name}</div>
                <div class="loan-amount">${loan.amount}</div>
            </div>
            <div class="loan-details">
                ${loan.details}
            </div>
            <button class="loan-btn">Apply Now</button>
        `;
        container.appendChild(card);
    });
}

// Navigation functions
function setupNavigation() {
    // Bottom navigation
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });
    
    // Quick actions
    document.querySelectorAll('.action-item').forEach(item => {
        item.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });
    
    // Back buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            showPage('home-page');
        });
    });
}

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the selected page
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.add('active');
    }
    
    // Update bottom nav active state
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === pageId) {
            item.classList.add('active');
        }
    });
}

// Button and form handlers
function setupButtonListeners() {
    // Header buttons
    document.getElementById('notifications-btn').addEventListener('click', function() {
        alert('Notifications will be shown here');
    });
    
    document.getElementById('scan-qr-btn').addEventListener('click', function() {
        alert('QR scanner would open here');
    });
    
    // Balance actions
    document.getElementById('add-money-btn').addEventListener('click', function() {
        alert('Add money functionality would go here');
    });
    
    document.getElementById('transfer-btn').addEventListener('click', function() {
        showPage('transfer-page');
    });
    
    // See all transactions
    document.getElementById('see-all-transactions').addEventListener('click', function() {
        alert('All transactions would be shown here');
    });
}

function setupFormSubmissions() {
    // Transfer form
    document.getElementById('transfer-now-btn').addEventListener('click', function() {
        const bank = document.getElementById('bank-select').value;
        const accountNumber = document.getElementById('account-number').value;
        const amount = document.getElementById('transfer-amount').value;
        
        if (!bank) {
            alert('Please select a bank');
            return;
        }
        
        if (!accountNumber) {
            alert('Please enter account number');
            return;
        }
        
        if (!amount) {
            alert('Please enter amount');
            return;
        }
        
        alert(`Transfer of ₦${amount} to account ${accountNumber} (${bank}) would be processed here`);
        showPage('home-page');
    });
    
    // Airtime purchase
    document.getElementById('buy-airtime-btn').addEventListener('click', function() {
        const phone = document.getElementById('airtime-phone').value;
        const amount = document.getElementById('airtime-amount').value;
        
        if (!phone) {
            alert('Please enter phone number');
            return;
        }
        
        if (!amount) {
            alert('Please enter amount');
            return;
        }
        
        alert(`Airtime purchase of ₦${amount} for ${phone} would be processed here`);
        showPage('home-page');
    });
    
    // Data purchase
    document.getElementById('buy-data-btn').addEventListener('click', function() {
        const phone = document.getElementById('data-phone').value;
        const selectedPlan = document.querySelector('.plan-card.selected');
        
        if (!phone) {
            alert('Please enter phone number');
            return;
        }
        
        if (!selectedPlan) {
            alert('Please select a data plan');
            return;
        }
        
        const planSize = selectedPlan.querySelector('.plan-size').textContent;
        const planAmount = selectedPlan.querySelector('.plan-amount').textContent;
        
        alert(`Data purchase of ${planSize} (${planAmount}) for ${phone} would be processed here`);
        showPage('home-page');
    });
    
    // Make data plans selectable
    document.addEventListener('click', function(e) {
        if (e.target.closest('.plan-card')) {
            document.querySelectorAll('.plan-card').forEach(c => {
                c.classList.remove('selected');
            });
            e.target.closest('.plan-card').classList.add('selected');
        }
    });
    
    // Profile menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            const menuId = this.id.replace('-menu', '');
            alert(`${menuId.replace('-', ' ')} menu item clicked`);
        });
    });
    
    // Loan application buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('loan-btn')) {
            const loanName = e.target.closest('.loan-card').querySelector('.loan-name').textContent;
            alert(`Applying for ${loanName}`);
        }
    });
    
    // Network selection
    document.addEventListener('click', function(e) {
        if (e.target.closest('.network-item')) {
            const network = e.target.closest('.network-item').getAttribute('data-network');
            alert(`${network.toUpperCase()} selected`);
        }
    });
}