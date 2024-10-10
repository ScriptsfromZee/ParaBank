# Parabank

Parabank is a web application designed to simulate banking functionalities, allowing users to interact with a realistic banking environment. This application serves as a demo for testing various banking features and functionalities.

## Overview

Purpose: The site provides a simulated banking environment where users can perform banking operations like account management, transactions, and more.

User Interface: Parabank features a clean and user-friendly interface that allows easy navigation through its various functionalities, including account creation, balance checking and transaction processing.

## Key Features

Account Management: Users can create and manage their bank accounts, including viewing account details and transaction history.

Transaction Handling: Users can perform a few transactions like pay bills, request loans, etc. 

User Authentication: Secure login functionality enables users to access their accounts safely.

## Functionality

Creating Accounts: Users can register for new accounts by providing necessary personal information.

Depositing Funds: Users can add money to their accounts through the deposit feature.

Withdrawing Funds: The application allows users to withdraw money from their accounts.

Viewing Transactions: Users can view their transaction history for better financial tracking.


### Automation and Testing

Parabank is often utilized in automated testing scenarios, particularly with tools like Cypress or Selenium, to validate banking functionalities. The tests cover various aspects of the application, ensuring that all features work as intended. The tests present here were written using Cypress. 

## Prerequisites

Have an IDE installed on your computer to be able to view the code locally.

Have a good working knowledge of Git and Github and well as JavaScript.

Have a browser installed on your computer.

## Setup

Open a command line terminal (Git bash preferrably) and navigate to a directory where you would like to save the work folder using cd.

Clone the repository with git clone https://github.com/ScriptsfromZee/ParaBank

To get the current working tree, git fetch --all, then checkout to "main" branch.

Finally, run the test scripts within the e2e folder by doing the following:

Navigate to the root directory with a command line terminal.

Run npm install, this install all the project dependencies.

If you have chrome installed run npm run cy-chrome or npm run cy-firefox if you have firefox installed to start the test.




