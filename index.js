

  // SIGNUP FORM CLICK EVENT
  const signinForm = document.getElementById('SignIn_button');

  signinForm.addEventListener("click", () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Black with 70% opacity
    overlay.style.zIndex = 1000;
    document.body.appendChild(overlay);
  
    const formContainer = document.createElement('div');
    formContainer.style.position = 'fixed'; 
    formContainer.style.top = '0.6%';
    formContainer.style.left = '33%';
    formContainer.style.height = '36rem';
    formContainer.style.width = '26rem';
    // formContainer.style.backgroundColor = 'white';
    formContainer.style.padding = '11px 5px';
    formContainer.style.border = '1px solid #ccc';
    formContainer.style.borderRadius = '5px';
    formContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    formContainer.style.zIndex = 1001;
   

formContainer.innerHTML = `
  <form id="signinForm" style="max-width: 400px; margin: auto; padding: 20px; background-color: rgba(255, 255, 255, 0.6); border-radius: 10px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); backdrop-filter: blur(10px);">
    <h2 style="text-align: center; font-family: 'Arial', sans-serif; color: #2c3e50; font-size: 1.6rem;">Sign In</h2>
    
    <label for="name" style="font-size: 1rem; color: #34495e; font-weight: bold;">Name</label>
    <input type="text" name="name" id="name" autocomplete="name" placeholder="Enter your name" required
      style="width: 100%; padding: 12px; margin: 10px 0 20px 0; border: 1px solid #2980b9; border-radius: 6px; font-size: 1rem; box-sizing: border-box; background-color: transparent; color: #34495e; transition: border 0.3s ease;">
    
    <label for="email" style="font-size: 1rem; color: #34495e; font-weight: bold;">Email</label>
    <input type="email" name="email" id="email" placeholder="Enter your email" required
      style="width: 100%; padding: 12px; margin: 10px 0 20px 0; border: 1px solid #2980b9; border-radius: 6px; font-size: 1rem; box-sizing: border-box; background-color: transparent; color: #34495e; transition: border 0.3s ease;">
    
    <label for="password" style="font-size: 1rem; color: #34495e; font-weight: bold;">Password</label>
    <input type="password" name="password" minlength="8" id="password" placeholder="Enter your password" required
      style="width: 100%; padding: 12px; margin: 10px 0 20px 0; border: 1px solid #2980b9; border-radius: 6px; font-size: 1rem; box-sizing: border-box; background-color: transparent; color: #34495e; transition: border 0.3s ease;">
    
    <label for="number" style="font-size: 1rem; color: #34495e; font-weight: bold;">Phone Number</label>
    <input type="number" name="number" id="number" oninput="if(this.value.length > 10) this.value = this.value.slice(0, 10);" 
      placeholder="Enter your number" required maxlength="10"
      style="width: 100%; padding: 12px; margin: 10px 0 20px 0; border: 1px solid #2980b9; border-radius: 6px; font-size: 1rem; box-sizing: border-box; background-color: transparent; color: #34495e; transition: border 0.3s ease;">
    
    <button type="submit" id="signInComplete" style="width: 100%; padding: 14px; background-color: #16a085; border: none; border-radius: 6px; color: #fff; font-size: 1.1rem; cursor: pointer; transition: background-color 0.3s ease, transform 0.3s;">
      Sign In
    </button>
    
    <button type="button" id="GoBack" style="width: 100%; padding: 14px; background-color: #f39c12; border: none; border-radius: 6px; color: #fff; font-size: 1.1rem; margin-top: 15px; cursor: pointer; transition: background-color 0.3s ease, transform 0.3s;">
      Go Back
    </button>
  </form>
`;




    document.body.appendChild(formContainer);
  
    const goBackBtn = document.getElementById('GoBack');
    goBackBtn.addEventListener("click", () => {
      formContainer.remove();
      overlay.remove();
    });
  
    const form = document.getElementById('signinForm');
    form.addEventListener("submit", (event) => {
      const number = document.getElementById('number');
      if (number.value.length !== 10) {
        event.preventDefault();
        alert("Please enter a valid 10-digit phone number.");
        return;
      }
      alert('Form submitted successfully!');
      formContainer.remove();
      overlay.remove();
    });
  });
  


// ADD TO CART CLICK EVENT 
const goToCart=document.getElementById('cart_button');
// goToCart.addEventListener("click",()=>{
//   location.href="/pages/cart.html"
// })


let cartQuantity=0;
const addCartButton=document.querySelectorAll('.AddCartBtn');
const removeCartBtn=document.querySelectorAll('.RemoveCartBtn');
addCartButton.forEach(element=>{
  element.addEventListener("click",()=>{
    cartQuantity=cartQuantity+1;
    goToCart.innerHTML=`<i class="ri-shopping-cart-2-line"></i> <sup>${cartQuantity}</sup> <br> Cart`;
  });
});
  
removeCartBtn.forEach(element=>{
  element.addEventListener("click",()=>{
    if(cartQuantity>0){
    cartQuantity=cartQuantity-1;
    goToCart.innerHTML=`<i class="ri-shopping-cart-2-line"></i> <sup>${cartQuantity}</sup> <br> Cart`;
  }
})
});



// BROWSER BY CATEGORY CLICK EVENT
const browseByCat=document.querySelectorAll('.product');
browseByCat.forEach(element=>{
element.addEventListener("click",()=>{
  location.href="browseByCategoryProduct.html";
})
})


// RANDOM PRODUCT CLICK EVENT
const randomProduct=document.querySelectorAll('.random_product');
randomProduct.forEach(element=>{
  element.addEventListener("click",(event)=>{
    if(event.target.classList=="AddCartBtn" || event.target.classList=="RemoveCartBtn"){
      event.stopPropagation();
    }
    else{
      location.href="browseByCategoryProduct.html";
    }
  })
})








