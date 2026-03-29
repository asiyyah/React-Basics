import Button from "./Button"
function ShoppingList(){
    const shoppingList = [
        "Shoes",
        "Bags",
        "Shorts",
        "T-shirts",
        "Scarf"
    ]

    return(
        <>
       
        {shoppingList.map((item, index) => (
            <h3 key={index}> {`Shopping item : ${item} and the key is ${index}`}</h3>
        ))}

<Button text="Add to Cart" />
        </>
    )
}

export default ShoppingList