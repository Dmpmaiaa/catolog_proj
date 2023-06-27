# Product Catalog


[![Product Catalog video showcase](https://img.youtube.com/vi/uH-V_cEFf4w/0.jpg)](https://www.youtube.com/watch?v=uH-V_cEFf4w)
https://youtu.be/uH-V_cEFf4w
This Product Catalog project is a web application built with:

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)

## Table of Contents

- [Installation](#installation)
- [Description](#description)
- [Usage](#usage)

## Installation

To set up and run the project locally, follow these steps:

1. Make sure you have [Node.js](https://nodejs.org) installed.
2. Clone this repository to your local machine using the following command: **https://github.com/Dmpmaiaa/catolog_proj**
3. Navigate to the project directory
4. Install the required dependencies using [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/): `yarn install` or `npm install`
5. Open MongoDB Compass and ensure it is running on `localhost:27017`. If you haven't installed MongoDB, please refer to the [official documentation](https://docs.mongodb.com/manual/installation/) for installation instructions.
6. Start the development server within the same terminal window: npm run dev && open http://localhost:3000 or yarn dev && open http://localhost:3000

This command will simultaneously start the development server and open the application in your default web browser.

# Description

The Product Catalog Web Application is a platform that allows users to authenticate to manage and organize their product inventory. Users can register products, edit categories, access a list of all products, filter products by name or category, update product data, and delete products from their catalog. 
JWT authentication was implemented using Next-Auth.

## What Can Be Improved

- Apply Unit Testing to Backend APIs: Implement unit tests for the backend APIs to ensure stability and reliability.
- Refine the Filter Feature: Allow sorting by both name and category for more refined search options.
- Enhance User Notifications and Feedback: Provide clear notifications and feedback to inform users about successful actions and errors.
- Improve CSS Consistency and Behavior: Review and refine CSS styling to ensure visual consistency and expected behavior.

## Lessons Learned

During the development of this project, I had the opportunity to learn and grow in several areas. Some of the key learnings include:

- **Working with TypeScript:** This project served as my first experience with TypeScript, and it was a significant learning process. I gained a deeper understanding of TypeScript's static typing, type inference, and how it enhances code reliability and maintainability.
- **Implementing JWT Authentication and Next-Auth:** This project introduced me to the world of JWT Authentication and the Next-Auth library. I learned how to secure my backend APIs using JWT tokens, handle user authentication and authorization, and leverage the features provided by Next-Auth for seamless integration.
- **Exploring Next.js App Router:** With the release of Next.js 13, I had the opportunity to use the new App Router feature. This allowed me to navigate between pages more efficiently, manage route transitions, and handle client-side navigation.
