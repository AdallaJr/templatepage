// Sample array of objects
const products = [
    {
      image: "productImages/name cards.png",
      name: "Name cards",
      price: 19.99,
      description: "Description 1"
    },
    {
      image: "productImages/name cards.png",
      name: "Product 2",
      price: 29.99,
      description: "Description 2"
    },
    {
      image: "productImages/name cards.png",
      name: "Name cards",
      price: 19.99,
      description: "Description 1"
    },
    {
      image: "productImages/name cards.png",
      name: "Product 2",
      price: 29.99,
      description: "Description 2"
    },
    {
      image: "productImages/name cards.png",
      name: "Name cards",
      price: 19.99,
      description: "Description 1"
    },
    {
      image: "productImages/name cards.png",
      name: "Product 2",
      price: 29.99,
      description: "Description 2"
    },
    {
      image: "productImages/name cards.png",
      name: "Name cards",
      price: 19.99,
      description: "Description 1"
    },
    {
      image: "productImages/name cards.png",
      name: "Product 2",
      price: 29.99,
      description: "Description 2"
    }
    // Add more objects as needed
  ];
  
  window.onload = function() {
    const productsContainer = document.getElementById('productsContainer');
  
    // Iterate over each object in the array
    products.forEach(function(product) {
      // Create the container div for each product
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
  
      // Create the image element and set the source
      const imageElement = document.createElement('img');
      imageElement.src = product.image;
      imageElement.classList.add('product-image');
    
      // Create the div for the name
      const nameDiv = document.createElement('div');
      nameDiv.textContent = product.name;
  
      // Create the div for the price
      const priceDiv = document.createElement('div');
      priceDiv.textContent = `$${product.price.toFixed(2)}`;
  
      // Create the div for the description
      const descriptionDiv = document.createElement('div');
      descriptionDiv.textContent = product.description;
  
      // Append the elements to the productDiv
      productDiv.appendChild(imageElement);
      productDiv.appendChild(nameDiv);
      productDiv.appendChild(priceDiv);
      productDiv.appendChild(descriptionDiv);
  
      // Append the productDiv to the productsContainer
      productsContainer.appendChild(productDiv);
    });
  };
  