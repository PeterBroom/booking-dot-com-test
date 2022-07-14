# booking-dot-com-test
TBU front-end technical test


Welcome to Peter Broom - Booking.com technical test. This project uses React with the wonderful [Next.js](https://nextjs.org/) library.

## Getting Started

First you will hae to create your enviroment variables.
### Environment variables
You will need a .env.local file in the root of the directory for the base url endpoint:
- NEXT_PUBLIC_SEARCH_DOMAIN

*Be sure to never commit .env files to the repository

## Install
```bash
npm i
# or
yarn install
```

After you have installed the packages run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Devevlopment
This project uses the following:

### [NextJs](https://nextjs.org/)
NextJs has hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more to make light work of development.

The project is structered like so:

```
|__components
    |__page             Page components and pertaining styles
|__context              React context provider for search related data and functions
|__cypress              For writting tests
|__pages                Our app
    |__app.js           Our app which wraps the <SearchProvider> from the SearchContext around our pages
    |__document.js      The document layout
    |__index.js         Homepage
    |__api              For dynamic search api for users input
|__pages                Global styles

```
### [TailwindCSS](https://tailwindcss.com/)
The idea with Tailwind is that you can use it within your css/scss or simply use selectors in your html to style your layouts and elements without ever leaving your markup. For instance you would add some margins and padding like so - `className="mx-20 px-10"`. Or you can use a hybrid of both! To add in your css you would do the following:
```
.mySelector {
    background-image: (0deg, rgba(0,0,0,0) 0%, rgba($myColour,1) 100%), url('./image.png');
    @apply object-fit;
    ...
}
```
For purpose of this project Tailwind has been used lightly for simple styling of form elements for example along side scss.

## Testing
For testing this project uses [Cypress](https://www.cypress.io/) which is a test runner that uses Mocha and Chai. Writting tests is simple for developers but also testers can contribute without having prerequisite coding knowledge.

To see the end-to-end test simply use `yarn cypress open`. You will see the Cypress App open up and which kind of test you would like to see. This project has an e2e test that I have written. To see it click 'E@E Testing' and select which browser you would like to launch the test in.

Now you will see a file to be tested named `spec.cy.ts`. Once you click it the test will be performed. You can trace back over each part of the test to see the requests, responses and DOM snapshots with before and after states.