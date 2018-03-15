const listOfProducts = ["meet", "fruit", "smokes", "fourth", "fifth"];

const capitalize = (arr) => {                                       // i just cant work with uppercase :D
    const goodLooking = arr.map(element => {
        const firstChar = element.charAt(0).toUpperCase()
        const restOfWord = element.substring(1)
        return firstChar + restOfWord
    });
    
    return goodLooking
}

const goodLooking = capitalize(listOfProducts)

const createProductList = () => {
    return goodLooking.map((elem, i) => <Product name={elem} key={i} /> )    
}


const Product = (props) => {
    return <li>{props.name}</li>
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