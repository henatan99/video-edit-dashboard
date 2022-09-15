# A video editing dashboard with custom styling

A simple Video editing responsive page with a from containing different input fields. It is built by NextJS and plain CSS. 

[Live Link](https://video-edit-dashboard.vercel.app/)

![Screenshot](docs/desktop-view.gif)
![Screenshot](docs/laptop-tablet-view.gif)
![Screenshot](docs/mobile-view.gif)

## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


### Prerequisites

- Node.JS
- React

### SetUp 
- Clone the repository 
`git clone https://github.com/henatan99/video-edit-dashboard.git`

- cd to the project directory 
`cd video_edit_dashboard`

- Install dependancies 
`npm install`

- And follow the App Usage instructions in the next section

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Usage
Run the app in local server and experiment with it. 

For linter checks and auto-correct
- `npm run lint` or 
- `yarn lint`

### Changes made
![Screenshot](docs/react-data-table.gif)

- In this commit the changes made are:

1. Install react-data-table-component from npm

2. Add a table component which has the following props
  - title
  - columns
  - data
  - defaultSortField
  - striped
  - pagination
  - subHeader

 - The defaultSortField, striped and pagination props have boolean values in which we choose if the table is striped, has pagination and default sorting functionalites

 - The title is just a text of the table title
 - The data is the data object with all the table row attributes, in our case, an array of obects like:

   ```
    const data = [
    {
      id: 1,
      customer: "John Deo",
      order_id: "91412314",
      photo: "/assets/chris_evans.jpg",
      product: {
        name: "iPhone 8",
        quantity: 10
      },
      date: "17-2-2017",
      status: "Pending",
      showButtons: true
    },
    {
        id: 1,
        customer: "David Heys",
        order_id: "91412314",
        photo: "/assets/chris_evans.jpg",
        product: {
          name: "iPhone 8",
          quantity: 10
        },
        date: "17-2-2017",
        status: "Pending",
        showButtons: true
      },

    ```
 - The columns is also an object that maps the table rows attributes with the data object.

   ```

     const columns = [
    {
      name: "Customer",
      selector: "customer",
      sortable: true,
      grow: 2
    },
    {
      name: "OrderId",
      selector: "order_id",
      sortable: true,
      hide: "sm"
    },

  ```

    It also allows has a `cell` optional attribute so that we can have a node inside the row cell and it takes the row argument. With this option we can render buttons and inner components with custom styling. In addition, the buttons can have `onClick` event handlers, which can be used to edit or delete the `row` data. Unfortunately, I could not work on the button click events due to time limitations.


## Authors

👤 **Henok Mossissa**

- GitHub: [@henatan99](https://github.com/henatan99)
- Twitter: [@henatan99](https://twitter.com/henatan99)
- LinkedIn: [Henok Mossissa](https://www.linkedin.com/in/henok-mekonnen-2a251613/)

## :handshake: Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a :star:️ if you like this project!

## Acknowledgment 

- [FLATICON](https://www.flaticon.com/) for nice icons
- [aevue](https://www.aevue.com/)

## :memo: License

This project is [MIT](./LICENSE) licensed.