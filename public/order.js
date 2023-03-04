// Simulated data for past orders
const pastOrders = [
    {
      id: 1,
      date: "January 1, 2023",
      items: [
        { name: "Product A", price: 10 },
        { name: "Product B", price: 20 },
        { name: "Product C", price: 30 }
      ]
    },
    {
      id: 2,
      date: "December 1, 2022",
      items: [
        { name: "Product D", price: 15 },
        { name: "Product E", price: 25 }
      ]
    },
    {
      id: 3,
      date: "November 1, 2022",
      items: [
        { name: "Product F", price: 35 }
      ]
    }
  ];
  
  // Function to display past orders
  function displayPastOrders() {
    const pastOrdersList = document.getElementById("past-orders");
  
    // Clear any existing items in the list
    pastOrdersList.innerHTML = "";
  
    // Loop through each past order and create a list item for it
    pastOrders.forEach(order => {
      const li = document.createElement("li");
  
      const h3 = document.createElement("h3");
      h3.textContent = `Order #${order.id} - ${order.date}`;
      li.appendChild(h3);
  
      const p = document.createElement("p");
      order.items.forEach(item => {
        const span = document.createElement("span");
        span.textContent = `${item.name} - $${item.price}`;
        p.appendChild(span);
        p.appendChild(document.createElement("br"));
      });
      li.appendChild(p);
  
      pastOrdersList.appendChild(li);
    });
  }
  
  // Call the displayPastOrders function when the page loads
  window.onload = displayPastOrders;
  