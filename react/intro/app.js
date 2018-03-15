const listOfProducts = ["meet, fruit", "smokes", "fourth", "fifth"];

const createProductList = () => {
     const myProducts = listOfProducts.map(elem => {
        return <Product />
    })
    console.log(myProducts);
    
}

const Product = () => {
    return <li>My product</li>
}

const ShoppingList = () => {
    return (
        <ul>
            {createProductList()}
        </ul>
    ) 
}

const App = () => {
    return (
            <div>
                <h1>Hi, from react</h1>
                <ShoppingList />
            </div>
        ) 
}

const rootElement = document.querySelector(".root")
ReactDOM.render(<App />, rootElement)