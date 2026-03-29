function ShoppingList(){
    const shoppingList = [
        "Shoes",
        "Bags",
        "Shorts",
        "T-shirts",
        "Sneakers"
    ]

    return(
        <>
        <h1>Shopping List</h1>
        <ul>
            {shoppingList.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        </>
    )
}

export default ShoppingList