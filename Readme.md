# Dynamic Form Application

Welcome to the Dynamic-Form-Application! This repository contains the server-side as well as client-side code for our web application.

Client-side was build using react with vite and tailwindCSS for styling and the backend was build using node.js, express.js and mysql for database.

### User Interface

- Two Form Buttons:
  - Clicking either button navigates the user to the respective form.
  - The form heading dynamically changes to "Form A" or "Form B" based on the button clicked.

### Form Details

- Shared Input Fields:
  - Name: A text input field.
  - Country Code: A dropdown selection populated with a predefined list of country codes.
  - Phone Number: A text input field

### Form Validation:

- Name: Ensures the field is not empty and contains only alphabetic characters.
- Country Code: Ensures a selection is made from the predefined list of country codes.
- Phone Number: Ensures the field contains only numeric characters and matches the format specified by the selected country code.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your local machine.
- [npm](https://www.npmjs.com/) (Node Package Manager) installed.

## Getting Started

To get a local copy up and running, follow these simple steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MohdSaquib114/Dynamic-Form-Application.git

   ```

2. **Go to the backend directory**

   ```bash
   cd Backend

   ```

3. **Install dependencies**

   ```bash
   npm install

   ```

4. **Create environment variable (.env) file in ./Backend/ and add below variables in .env file**

   ```plaintext
   PORT = 4000
   DATABASE_URL = Your  remote or local mysql database url
   SPREADSHEET_ID = Your spreadsheet url id
   //Generate credentials.json file from google developer console to set value to all the below variables
   GOOGLE_APPLICATION_CREDENTIALS= your generated google credentials
   GOOGLE_SHEETS_PRIVATE_KEY=your private google key
   GOOGLE_SHEETS_CLIENT_EMAIL=your google client email

   ```

5. **Start the backend project**

   ```bash
   npm start

   ```

6. **To Start the backend project for development**

   ```bash
   npm run dev

   ```

7. **Go to the react or ./Frontend directory**

   ```bash
   cd..
   cd Frontend

   ```

8. **Install dependencies**

   ```bash
   npm install

   ```

9. **Start react application**

   ```bash
   npm run dev
   ```
