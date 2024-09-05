// script.js
document.addEventListener('DOMContentLoaded', () => {
    const balanceElement = document.getElementById('balance');
    const pages = document.querySelectorAll('.page');
    const navButtons = document.querySelectorAll('.nav-button');
    const taskMessage = document.getElementById('task-message');

    // Example balance loading
    let balance = localStorage.getItem('ratcoinBalance');
    if (!balance) {
        balance = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
        localStorage.setItem('ratcoinBalance', balance);
    }
    balanceElement.textContent = `Balance: ${balance} RatCoin`;

    // Page navigation
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pageId = button.getAttribute('data-page');
            pages.forEach(page => {
                page.classList.toggle('active', page.id === pageId);
            });
        });
    });

    // Task completion
    document.getElementById('subscribe').addEventListener('click', () => {
        // Here you would integrate with Telegram API to check subscription
        taskMessage.textContent = 'You have completed the task and earned 1000 RatCoin!';
        balance = parseInt(balance) + 1000;
        localStorage.setItem('ratcoinBalance', balance);
        balanceElement.textContent = `Balance: ${balance} RatCoin`;
    });

    // Wallet addition
    document.getElementById('add-wallet').addEventListener('click', () => {
        document.getElementById('wallet-options').classList.toggle('hidden');
    });

    document.getElementById('submit-wallet').addEventListener('click', () => {
        const walletAddress = document.getElementById('wallet-address').value;
        if (walletAddress) {
            // Send wallet address to admin
            console.log(`Wallet address: ${walletAddress} sent to admin`);
            // You would replace this with actual logic to send the address
        }
    });
});
