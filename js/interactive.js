// ROI Calculator
class ROICalculator {
    constructor() {
        this.form = document.getElementById('roi-calculator');
        this.setupEventListeners();
    }

    calculateROI(employees, clients, leadVolume) {
        const monthlyTimesSaved = employees * 5; // hours saved per employee
        const potentialRevenue = clients * 100; // potential revenue per client
        const leadConversionImprovement = leadVolume * 0.2; // 20% improvement in lead conversion

        return {
            timeSaved: monthlyTimesSaved,
            revenue: potentialRevenue,
            leadImprovement: leadConversionImprovement
        };
    }

    setupEventListeners() {
        this.form?.addEventListener('submit', (e) => {
            e.preventDefault();
            const employees = parseInt(document.getElementById('employees').value);
            const clients = parseInt(document.getElementById('clients').value);
            const leadVolume = parseInt(document.getElementById('leads').value);

            const results = this.calculateROI(employees, clients, leadVolume);
            this.displayResults(results);
        });
    }

    displayResults(results) {
        const resultsDiv = document.getElementById('roi-results');
        if (resultsDiv) {
            resultsDiv.innerHTML = `
                <div class="results-content">
                    <h3>Your Potential ROI with CRM Pro</h3>
                    <ul>
                        <li>Time Saved: ${results.timeSaved} hours/month</li>
                        <li>Potential Additional Revenue: $${results.revenue}/month</li>
                        <li>Lead Conversion Improvement: ${results.leadImprovement} leads/month</li>
                    </ul>
                    <button class="cta-button">Start Free Trial</button>
                </div>
            `;
        }
    }
}

// Live Chat
class LiveChat {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.setupChat();
    }

    setupChat() {
        const chatButton = document.createElement('button');
        chatButton.className = 'chat-button';
        chatButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>';
        
        chatButton.addEventListener('click', () => this.toggleChat());
        document.body.appendChild(chatButton);
    }

    toggleChat() {
        if (!this.chatWindow) {
            this.createChatWindow();
        }
        this.isOpen = !this.isOpen;
        
        const button = document.querySelector('.chat-button');
        const chatWindow = this.chatWindow;
        
        if (this.isOpen) {
            button.classList.add('active');
            chatWindow.classList.add('active');
        } else {
            button.classList.remove('active');
            chatWindow.classList.remove('active');
        }
    }

    createChatWindow() {
        this.chatWindow = document.createElement('div');
        this.chatWindow.className = 'chat-window';
        this.chatWindow.innerHTML = `
            <div class="chat-header">
                <h3>Chat with Us</h3>
                <button class="close-chat">×</button>
            </div>
            <div class="chat-messages"></div>
            <div class="chat-input">
                <input type="text" placeholder="Type your message..." aria-label="Chat message">
                <button class="send-message">Send</button>
            </div>
        `;
        
        const closeButton = this.chatWindow.querySelector('.close-chat');
        const sendButton = this.chatWindow.querySelector('.send-message');
        const input = this.chatWindow.querySelector('input');
        
        closeButton.addEventListener('click', () => this.toggleChat());
        sendButton.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
        
        document.body.appendChild(this.chatWindow);
    }

    sendMessage() {
        const input = this.chatWindow.querySelector('input');
        const message = input.value.trim();
        if (message) {
            this.addMessage('user', message);
            input.value = '';
            // Simulate bot response
            setTimeout(() => {
                this.addMessage('bot', 'Thanks for your message! Our team will get back to you shortly.');
            }, 1000);
        }
    }

    addMessage(sender, text) {
        const messagesDiv = this.chatWindow.querySelector('.chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.textContent = text;
        messagesDiv.appendChild(messageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}

// Exit Intent Popup
class ExitIntentPopup {
    constructor() {
        this.shown = false;
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('mouseleave', (e) => {
            if (e.clientY <= 0 && !this.shown) {
                this.showPopup();
            }
        });
    }

    showPopup() {
        this.shown = true;
        const popup = document.createElement('div');
        popup.className = 'exit-popup';
        popup.innerHTML = `
            <div class="popup-content">
                <button class="close-popup" onclick="exitIntent.closePopup()">×</button>
                <h3>Wait! Don't Miss Out!</h3>
                <p>Start your free trial now and get 20% off your first 3 months!</p>
                <button class="cta-button">Start Free Trial</button>
            </div>
        `;
        document.body.appendChild(popup);
    }

    closePopup() {
        const popup = document.querySelector('.exit-popup');
        if (popup) {
            popup.remove();
        }
    }
}

// Live Usage Stats
class LiveStats {
    constructor() {
        this.stats = {
            activeUsers: 1234,
            trialsStarted: 567,
            tasksCompleted: 89012
        };
        this.setupStats();
        this.startUpdating();
    }

    setupStats() {
        const statsContainer = document.getElementById('live-stats');
        if (statsContainer) {
            this.updateDisplay();
        }
    }

    updateDisplay() {
        const statsContainer = document.getElementById('live-stats');
        if (statsContainer) {
            statsContainer.innerHTML = `
                <div class="stat">
                    <span class="stat-number">${this.stats.activeUsers}</span>
                    <span class="stat-label">Active Users</span>
                </div>
                <div class="stat">
                    <span class="stat-number">${this.stats.trialsStarted}</span>
                    <span class="stat-label">Trials Started Today</span>
                </div>
                <div class="stat">
                    <span class="stat-number">${this.stats.tasksCompleted}</span>
                    <span class="stat-label">Tasks Completed</span>
                </div>
            `;
        }
    }

    startUpdating() {
        setInterval(() => {
            this.stats.activeUsers += Math.floor(Math.random() * 5);
            this.stats.trialsStarted += Math.floor(Math.random() * 2);
            this.stats.tasksCompleted += Math.floor(Math.random() * 10);
            this.updateDisplay();
        }, 3000);
    }
}

// Initialize all interactive elements
document.addEventListener('DOMContentLoaded', () => {
    window.roiCalculator = new ROICalculator();
    window.liveChat = new LiveChat();
    window.exitIntent = new ExitIntentPopup();
    window.liveStats = new LiveStats();
});
