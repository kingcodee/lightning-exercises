const bean = "Colombian"
const style = "Espresso"
const size = "Medium"
const customer = {
    firstname: "Johann",
    lastname: "Abramovitz"
}

const finalMessage = `${size} ${bean} ${style} is ready for ${customer.firstname} ${customer.lastname}
}`

document.querySelector("#completedOrders")
    .innerHTML = finalMessage