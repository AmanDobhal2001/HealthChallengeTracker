# Health Challenge Tracker

Health Challenge Tracker is a single-page application (SPA) developed in Angular 17, designed to track user workouts and display them in a user-friendly interface.

## Introduction

Workout Tracker is an Angular application that allows users to log their workouts. Users can input their names, select workout types, and specify workout durations. The application also provides features for searching and filtering workouts, as well as pagination for easy navigation through the list of users.

## Features

- **Workout Form**: Allows users to input their name, workout type, and workout minutes.
- **Workout List**: Displays a grid of user workouts with options for search, filtering by workout type, and pagination.
- **Responsive Design**: Ensures optimal viewing across a range of devices.
- **Data Storage**: Stores workout data in local storage.

## Technologies Used

- **Angular 17**: Front-end framework for building robust SPAs.
- **Tailwind CSS**: Provides utility-first CSS classes for rapid UI development.
- **ngx-pagination**: Library for implementing pagination in Angular applications.

## Getting Started

Follow these instructions to get a local copy of the project up and running on your machine.

### Prerequisites

- Visual Studio Code - Code Editing, Git Bash - Git command line , Node.js and npm installed on your development machine.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/AmanDobhal2001/health-tracker.git
   cd health-tracker
   ```

2. Install dependencies:
   `npm install`

### Development Server

- Run the application locally:
  `ng serve`

### Build

- To build the project for production:
  `ng build --prod
`

## Testing

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Unit tests for the components are written using Angular's testing utilities and Jasmine. You can run the tests using the following command:

##Code coverage report

Whole code coverage report is added to the `health-tracker/coverage`

### Test Cases for WorkoutFormComponent

- Component Creation: Checks if the component is created successfully.
- Form Validity: Tests the form's initial invalid state and its validity when all fields are filled.
- Form Submission: Ensures that the workout data is stored in local storage and that the router navigates to the workout list after form submission.

### Running Tests

- Run unit tests:
  `ng test`

## Development server

- I have Deploy the application on a hosting platform like: gitHub Pages
- https://amandobhal2001.github.io/HealthChallengeTracker/

- You can also Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Usage

- Navigate to the Add Workout page.
- Fill out the form with the user name, workout type, and workout duration.
- Submit the form to add the workout.
- Navigate to the Workout List page to view the list of users and their workouts.
- Use the search bar to find users by name.
- Use the filter option to filter users by workout type.
- Use pagination to navigate through the list if there are more than 5 users.

## Additional Information

Author: Aman Dobhal <br />
License: This project is licensed under the MIT License. See the LICENSE file for details.<br />
Contact: dobhalaman4@gmail.com

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.
