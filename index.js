// // DARK LIGHT THEME
// const darkTheme=document.getElementById('DarkTheme_button');
// const lightTheme=document.getElementById('LightTheme_button');
// const buttons=document.querySelectorAll('.side_button')

// darkTheme.addEventListener("click",()=>{
// document.body.classList.remove("light-theme");
// document.body.classList.add("dark-theme");
// lightTheme.classList.remove("hide");
// darkTheme.classList.add("hide");

// buttons.forEach(element=>{
//   buttons.classList.add("dark-theme");

// })
// })


// lightTheme.addEventListener("click",()=>{
//   document.body.classList.remove("dark-theme");
//   document.body.classList.add("light-theme");
//   darkTheme.classList.remove("hide");
//   lightTheme.classList.add("hide");
//   })


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
    formContainer.style.top = '24%';
    formContainer.style.left = '37%';
    formContainer.style.height = '20rem';
    formContainer.style.width = '22rem';
    formContainer.style.backgroundColor = 'white';
    formContainer.style.padding = '30px 20px';
    formContainer.style.border = '1px solid #ccc';
    formContainer.style.borderRadius = '5px';
    formContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    formContainer.style.zIndex = 1001;
    formContainer.innerHTML = `
      <form id="signinForm" style=" margin-left:55px;">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" autocomplete="name" placeholder="Enter your name here" required style="display:block; margin:10px; padding:5px;">
        <label for="password">Password</label>
        <input type="password" name="password" minlength="8" id="password" placeholder="Enter your password here" required style="display:block; margin:10px; padding:5px;">
        <label for="number">Phone Number</label>
        <input type="number" name="number" id="number"   oninput="if(this.value.length > 10) this.value = this.value.slice(0, 10);" 
 placeholder="Enter your number here" required maxlength="10" style="display:block; margin:10px; padding:5px;">
        <button type="submit" id="signInComplete" style="margin:5px 5px 5px 25px; border-radius:6px; border:none; height:2rem; width:4rem; padding:5px; background-color:#03C988; cursor:pointer">SignIn</button>
        <button type="button" id="GoBack" style="margin:5px; width:4rem; border-radius:6px; border:none; height:2rem; padding:5px; background-color:#F6B17A; cursor:pointer">GoBack</button>
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
  location.href="/browseByCategoryProduct.html";
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
      location.href="/browseByCategoryProduct.html";
    }
  })
})












