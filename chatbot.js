// Predefined FAQs and Responses
const faqs = [
    {
        question: "What services do you offer as a web developer?",
        answer: "I specialize in front-end and full-stack web development, focusing on building user-friendly, responsive, and interactive websites. I also work on personal and client projects, including gamified language learning apps."
    },
    {
        question: "Where can I see more of your past projects?",
        answer: "You can find my projects on GitHub. I’m also working on growing my online presence to showcase more of my work."
    }
];
    
// Global functions to make them accessible
function openChatModal() {
    const modal = document.getElementById('chatModal');
    const faqButtons = document.getElementById('faqButtons');
    const chatMessages = document.getElementById('chatMessages');
    
    // Clear previous content
    faqButtons.innerHTML = '';
    chatMessages.innerHTML = '';
    
    // Create FAQ buttons
    faqs.forEach((faq) => {
        const button = document.createElement('button');
        button.textContent = faq.question;
        button.classList.add('faq-button');
        button.addEventListener('click', () => sendFAQMessage(faq));
        faqButtons.appendChild(button);
    });

    // Add welcome message
    addMessage('AI', 'Welcome! I\'m your Future AI Assistant. How can I help you today?');

    // Add classes for modal and body
    document.body.classList.add('modal-open');
    
    // Show modal and trigger open animation
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('open');
    }, 10);
}

function closeChatModal() {
    const modal = document.getElementById('chatModal');
    
    // Remove open class to trigger closing animation
    modal.classList.remove('open');
    
    // Remove body class
    document.body.classList.remove('modal-open');
    
    // Hide modal after animation
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}
    
function addMessage(sender, message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender === 'AI' ? 'ai-message' : 'user-message');
    messageElement.textContent = `${sender}: ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
    
function sendFAQMessage(faq) {
    addMessage('User', faq.question);
    setTimeout(() => {
        addMessage('AI', faq.answer);
    }, 500);
}
    
function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    if (message) {
        addMessage('User', message);
        input.value = '';
        // AI response
        setTimeout(() => {
            addMessage('AI', "I'm processing your message. For now, please use the FAQ buttons for the most accurate information.");
        }, 500);
    }
}
    
// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const aiInteraction = document.querySelector('.ai-interaction');
    if (aiInteraction) {
        aiInteraction.addEventListener('click', openChatModal);
    }
    const userInput = document.getElementById('userInput');
    if (userInput) {
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});
