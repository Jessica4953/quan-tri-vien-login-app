document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const keyCodeInput = document.getElementById('keyCode');
    const togglePasswordButton = document.getElementById('togglePassword');
    
    // Password toggle functionality
    togglePasswordButton.addEventListener('click', function() {
        const type = keyCodeInput.getAttribute('type') === 'password' ? 'text' : 'password';
        keyCodeInput.setAttribute('type', type);
        
        // Update the eye icon
        const eyeIcon = togglePasswordButton.querySelector('svg path');
        if (type === 'text') {
            // Eye with slash (hidden)
            eyeIcon.setAttribute('d', 'M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5S21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12S9.24 7 12 7S17 9.24 17 12S14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12S10.34 15 12 15S15 13.66 15 12S13.66 9 12 9Z');
        } else {
            // Regular eye icon
            eyeIcon.setAttribute('d', 'M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5S21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12S9.24 7 12 7S17 9.24 17 12S14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12S10.34 15 12 15S15 13.66 15 12S13.66 9 12 9Z');
        }
    });
    
    // Form submission handling
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const keyCode = keyCodeInput.value.trim();
        
        // Basic validation
        if (!keyCode) {
            showMessage('Vui lòng nhập mã KEY', 'error');
            keyCodeInput.focus();
            return;
        }
        
        if (keyCode.length < 3) {
            showMessage('Mã KEY phải có ít nhất 3 ký tự', 'error');
            keyCodeInput.focus();
            return;
        }
        
        // Simulate login process
        showMessage('Đang xử lý...', 'info');
        
        // Disable form during processing
        const submitButton = loginForm.querySelector('.login-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Đang xử lý...';
        submitButton.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // For demo purposes, show success message
            // In real implementation, this would make an API call
            if (keyCode === 'admin123') {
                showMessage('Đăng nhập thành công!', 'success');
                // Redirect would happen here
                setTimeout(() => {
                    window.location.href = '/dashboard'; // Example redirect
                }, 1500);
            } else {
                showMessage('Mã KEY không đúng. Vui lòng thử lại.', 'error');
                keyCodeInput.select();
            }
        }, 1500);
    });
    
    // Input validation on typing
    keyCodeInput.addEventListener('input', function() {
        const value = this.value;
        
        // Remove any existing error styling
        this.style.borderColor = '';
        
        // Clear any existing messages when user starts typing
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }
    });
    
    // Function to show messages
    function showMessage(text, type = 'info') {
        // Remove existing message
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message element
        const message = document.createElement('div');
        message.className = `message message-${type}`;
        message.textContent = text;
        
        // Add styles
        message.style.cssText = `
            margin-top: 15px;
            padding: 12px;
            border-radius: 8px;
            font-size: 14px;
            text-align: center;
            animation: fadeInUp 0.3s ease-out;
        `;
        
        // Set colors based on type
        switch (type) {
            case 'error':
                message.style.background = 'rgba(255, 107, 107, 0.2)';
                message.style.color = '#ff6b6b';
                message.style.border = '1px solid rgba(255, 107, 107, 0.3)';
                break;
            case 'success':
                message.style.background = 'rgba(81, 207, 102, 0.2)';
                message.style.color = '#51cf66';
                message.style.border = '1px solid rgba(81, 207, 102, 0.3)';
                break;
            case 'info':
            default:
                message.style.background = 'rgba(116, 185, 255, 0.2)';
                message.style.color = '#74b9ff';
                message.style.border = '1px solid rgba(116, 185, 255, 0.3)';
                break;
        }
        
        // Insert message after the form
        loginForm.appendChild(message);
        
        // Auto-remove success and info messages after 3 seconds
        if (type !== 'error') {
            setTimeout(() => {
                if (message.parentNode) {
                    message.remove();
                }
            }, 3000);
        }
    }
    
    // Add enter key support for better UX
    keyCodeInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            loginForm.dispatchEvent(new Event('submit'));
        }
    });
    
    // Focus on input field when page loads
    keyCodeInput.focus();
});
