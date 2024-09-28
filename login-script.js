const login_icon = document.getElementById("login-icon");
const home_icon = document.getElementById("home-icon");
const products_icon = document.getElementById("products-icon");
const about_us_icon = document.getElementById("about-us-icon");
const contact_icon = document.getElementById("contact-icon");
const my_account_icon=document.getElementById("my-account-icon");
const cart_icon=document.getElementById("cart-icon");

const home_section = document.getElementById("home-section");
const login_section = document.getElementById("login-section");
const products_section = document.getElementById("Products-section");
const about_us_section = document.getElementById("About-us-section");
const contact_section = document.getElementById("contact-section");
const cart_section=document.getElementById("cart-section");
const my_account_section=document.getElementById("my-account-section");

const sign_in_icon = document.getElementById("sign-in-icon");
const sign_n_form_div = document.getElementById("sign-in-form-div");
const login_form_div = document.getElementById("login-form-div");

let sin_in = false;

home_icon.addEventListener("click", function () {
  console.log("home");
  login_section.style.display = "none";
  home_section.style.display = "block";
  products_section.style.display = "block";
  about_us_section.style.display = "none";
  contact_section.style.display = "none";
  cart_section.style.display='none';
  my_account_section.style.display='none';
});

products_icon.addEventListener("click", function () {
  console.log("products");
  login_section.style.display = "none";
  home_section.style.display = "none";
  products_section.style.display = "block";
  about_us_section.style.display = "none";
  contact_section.style.display = "none";
  cart_section.style.display='none';
  my_account_section.style.display='none';
});

about_us_icon.addEventListener("click", function () {
  console.log("about us");
  login_section.style.display = "none";
  home_section.style.display = "none";
  products_section.style.display = "none";
  about_us_section.style.display = "block";
  contact_section.style.display = "none";
  cart_section.style.display='none';
  my_account_section.style.display='none';
});

contact_icon.addEventListener("click", function () {
  console.log("contact");
  login_section.style.display = "none";
  home_section.style.display = "none";
  products_section.style.display = "none";
  about_us_section.style.display = "none";
  contact_section.style.display = "block";
  cart_section.style.display='none';
  my_account_section.style.display='none';
});


login_icon.addEventListener("click", function () {
  console.log("login clicked");
  login_section.style.display = "block";
  home_section.style.display = "none";
  products_section.style.display = "none";
  about_us_section.style.display = "none";
  contact_section.style.display = "none";
  cart_section.style.display='none';
  my_account_section.style.display='none';
  login_form_div.style.display = "block";
  sign_n_form_div.style.display = "none";
});

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
      alert("Login successful!");
      // Redirect to homepage or user dashboard
      login_section.style.display = "none";
      home_section.style.display = "block";
      products_section.style.display = "none";
      about_us_section.style.display = "none";
      contact_section.style.display = "none";
      cart_section.style.display='none';
      sin_in = true;
      if(sin_in === true ){
        login_icon.style.display='none';
        my_account_icon.style.display='inline';
      }
    } else {
      document.getElementById("error").textContent =
        "Invalid username or password.";
    }
  });

sign_in_icon.addEventListener("click", function () {
  login_form_div.style.display = "none";
  sign_n_form_div.style.display = "block";
});

document
  .getElementById("sign-in-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("user-email").value;
    const userid = document.getElementById("user-id").value;
    const password = document.getElementById("user-password").value;

    if (email && userid && password) {
      // Redirect to homepage or user dashboard
      login_section.style.display = "none";
      home_section.style.display = "block";
      products_section.style.display = "none";
      about_us_section.style.display = "none";
      contact_section.style.display = "none";
      cart_section.style.display='none';

      sin_in = true;
      document.getElementById("error-2").textContent = "sign-in successfull";
      if(sin_in === true ){
        login_icon.style.display='none';
        my_account_icon.style.display='inline';
      }
      alert("sign in successful!");
    }
  });


  cart_icon.addEventListener('click',function(){
    cart_section.style.display='block';
    login_section.style.display = "none";
    home_section.style.display = "none";
    products_section.style.display = "none";
    about_us_section.style.display = "none";
    contact_section.style.display = "none";
    my_account_section.style.display='none';
    const cart_section_message=document.getElementById("cart-section-message");
    if(sin_in){
      cart_section_message.innerText="add items to your cart";
    }
    else{
      cart_section_message.innerText="please login to add items to your cart ";
    }
  })

  my_account_icon.addEventListener('click',function(){
    cart_section.style.display='none';
    login_section.style.display = "none";
    home_section.style.display = "none";
    products_section.style.display = "none";
    about_us_section.style.display = "none";
    contact_section.style.display = "none";
    my_account_section.style.display='block';
  })

  





// let product1_message=document.getElementById("product1-message");
// let product1_add=document.getElementById("product1-add");
// let product1_minus=document.getElementById("product1-minus");
// product1_add.addEventListener("click",function (){
//   let x= 0;
//   console.log(product1_message.innerHTML());
// })

function changeQuantity(productId, change) {
  const quantityDiv = document.getElementById(`${productId}-quantity`);
  let quantity = parseInt(quantityDiv.textContent);
  quantity = Math.max(0, quantity + change); // Ensure quantity does not go below 0
  quantityDiv.textContent = quantity;
}