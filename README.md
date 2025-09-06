
Built by https://www.blackbox.ai

---

# Quản Trị Viên

## Project Overview
Quản Trị Viên is a simple web-based login application designed for administrators to securely log in using a key code. The application features a user-friendly interface with modern aesthetics, providing a seamless experience for users on various devices.

## Installation
To get started with the Quản Trị Viên application, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/quản-trị-viên.git
    cd quản-trị-viên
    ```

2. Open `index.html` in your preferred web browser.

You can optionally set up a local server using tools like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for a better development experience.

## Usage
1. Open the application in your web browser.
2. Enter your KEY code in the input field.
3. Click the "Đăng nhập" (Login) button to submit your credentials.

If you enter a valid key code (e.g., `admin123`), you will be redirected to the dashboard (currently simulated). Otherwise, an error message will prompt you to try again.

## Features
- **Responsive Design:** The application is designed to work on various screen sizes, ensuring accessibility on mobile and desktop devices.
- **Password Visibility Toggle:** Users can toggle the visibility of the input for better usability.
- **Basic Validation:** Ensures that the KEY code is provided and meets the required length before submission.
- **User Feedback:** Provides instantaneous feedback for actions performed by the user, including success or error messages.
- **Animation Effects:** The login form features subtle animations for a modern look.

## Dependencies
This project does not utilize any external dependencies from a `package.json` file, making it lightweight and simple to deploy and run.

## Project Structure
The folder structure of the project is as follows:

```
quản-trị-viên/
│
├── index.html      # The main HTML file for the application
├── styles.css      # The CSS file for styling the application
└── script.js       # The JavaScript file containing the login functionality and interactions
```

## Contributing
Contributions are welcome! Feel free to submit a pull request for any improvements or additional features.

## License
This project is open-source and available under the MIT License.