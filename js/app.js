// app.js - Main application logic and initialization

class App {
    constructor() {
        this.init();
    }

    init() {
        this.setupGigs();
        this.setupMessaging();
        this.setupProfile();
    }

    setupGigs() {
        // Handle gig posting
        const gigForm = document.getElementById('post-gig-form');
        if (gigForm) {
            gigForm.addEventListener('submit', (e) => this.handleGigSubmit(e));
        }

        // Handle gig filtering
        const filterInputs = document.querySelectorAll('.filter-select');
        filterInputs.forEach(input => {
            input.addEventListener('change', () => this.filterGigs());
        });
    }

    setupMessaging() {
        // Handle message sending
        const messageForm = document.getElementById('message-form');
        if (messageForm) {
            messageForm.addEventListener('submit', (e) => this.handleMessageSubmit(e));
        }

        // Handle conversation selection
        const conversations = document.querySelectorAll('.conversation-item');
        conversations.forEach(conv => {
            conv.addEventListener('click', () => this.loadConversation(conv));
        });
    }

    setupProfile() {
        // Handle profile updates
        const profileForm = document.getElementById('profile-form');
        if (profileForm) {
            profileForm.addEventListener('submit', (e) => this.handleProfileUpdate(e));
        }
    }

    async handleGigSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        try {
            // Simulate API call
            await this.saveGig(formData);
            alert('Gig posted successfully!');
            window.location.reload();
        } catch (error) {
            console.error('Failed to post gig:', error);
            alert('Failed to post gig. Please try again.');
        }
    }

    async handleMessageSubmit(e) {
        e.preventDefault();
        const messageInput = document.getElementById('message-input');
        const message = messageInput.value.trim();

        if (message) {
            try {
                // Simulate sending message
                await this.sendMessage(message);
                this.appendMessage(message, 'sent');
                messageInput.value = '';
            } catch (error) {
                console.error('Failed to send message:', error);
                alert('Failed to send message. Please try again.');
            }
        }
    }

    async handleProfileUpdate(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            // Simulate API call
            await this.updateProfile(formData);
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Failed to update profile:', error);
            alert('Failed to update profile. Please try again.');
        }
    }

    // Simulated API calls
    async saveGig(formData) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Gig saved:', Object.fromEntries(formData));
    }

    async sendMessage(message) {
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log('Message sent:', message);
    }

    async updateProfile(formData) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Profile updated:', Object.fromEntries(formData));
    }

    // UI Helpers
    appendMessage(message, type) {
        const messagesContainer = document.querySelector('.chat-messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);
        messageElement.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
                <span class="message-time">${new Date().toLocaleTimeString()}</span>
            </div>
        `;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    filterGigs() {
        // Implement gig filtering logic
        console.log('Filtering gigs...');
    }

    loadConversation(conversationElement) {
        // Implement conversation loading logic
        console.log('Loading conversation:', conversationElement.querySelector('h3').textContent);
    }
}

// Initialize application
const app = new App();
