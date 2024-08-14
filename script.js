// Yeh function toggleForm ka naam diya gaya hai, yeh function ka kaam yeh hai ke
// jab user "Sign Up" ya "Login" link par click kare, to form ke content ko change karna.
function toggleForm(event) {
    // preventDefault() ka matlab yeh hai ke jo default kaam hota hai kisi element ka 
    // (is case mein, link ka page reload karna) usse rok do.
    event.preventDefault();

    // document.querySelector('.card-title') yeh line webpage par se "card-title" class wala element dhoondhti hai,
    // yeh element wo hai jisme "Login" ya "Sign Up" likha hota hai, jo humein dikhai deta hai.
    const cardTitle = document.querySelector('.card-title');
    
    // document.getElementById('loginForm') yeh line webpage se "loginForm" ID wala element dhoondhti hai,
    // yeh wo element hai jisme pura form hota hai, jisme hum email aur password dalte hain.
    const loginForm = document.getElementById('loginForm');
    
    // Yeh if statement check karti hai ke kya abhi jo form ka title hai (cardTitle.textContent) wo "Login" hai.
    if (cardTitle.textContent === 'Login') {
        // Agar title "Login" hai, to ab hum usse "Sign Up" mein badal denge.
        cardTitle.textContent = 'Sign Up';

        // Phir, loginForm.innerHTML ka matlab yeh hai ke jo form ke andar content hai, usse hum ab replace karenge.
        // Naya content wo hoga jo "Sign Up" form ke liye zaroori hai: email, password, aur confirm password fields.
        loginForm.innerHTML = `
            <div class="mb-3">
                <label for="signUpEmail" class="form-label">Email address</label>
                <div class="input-group">
                    <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                    <input type="email" class="form-control" id="signUpEmail" required>
                </div>
            </div>
            <div class="mb-3">
                <label for="signUpPassword" class="form-label">Password</label>
                <div class="input-group">
                    <span class="input-group-text"><i class="fas fa-lock"></i></span>
                    <input type="password" class="form-control" id="signUpPassword" required>
                </div>
            </div>
            <div class="mb-3">
                <label for="signUpConfirmPassword" class="form-label">Confirm Password</label>
                <div class="input-group">
                    <span class="input-group-text"><i class="fas fa-lock"></i></span>
                    <input type="password" class="form-control" id="signUpConfirmPassword" required>
                </div>
            </div>
            <button type="submit" class="btn btn-primary w-100">Sign Up</button>
        `;

        // Yeh line text ko update karne ke liye hai jo form ke neeche dikhai deta hai,
        // yeh text user ko batata hai ke agar account hai to "Login" karne ke liye link par click karo.
        document.querySelector('.text-center p').innerHTML = `Already have an account? <a href="#" id="toggleSignUp">Login</a>`;
    } else {
        // Agar title "Sign Up" hai, to ab hum usse "Login" mein badal denge.
        cardTitle.textContent = 'Login';
        
        // Phir, loginForm ka content "Login" form ke liye update kiya jayega,
        // jisme sirf email aur password fields hain.
        loginForm.innerHTML = `
            <div class="mb-3">
                <label for="loginEmail" class="form-label">Email address</label>
                <div class="input-group">
                    <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                    <input type="email" class="form-control" id="loginEmail" required>
                </div>
            </div>
            <div class="mb-3">
                <label for="loginPassword" class="form-label">Password</label>
                <div class="input-group">
                    <span class="input-group-text"><i class="fas fa-lock"></i></span>
                    <input type="password" class="form-control" id="loginPassword" required>
                </div>
            </div>
            <button type="submit" class="btn btn-primary w-100">Login</button>
        `;

        // Yeh line text ko update karne ke liye hai jo form ke neeche dikhai deta hai,
        // yeh text user ko batata hai ke agar account nahi hai to "Sign Up" karne ke liye link par click karo.
        document.querySelector('.text-center p').innerHTML = `Don't have an account? <a href="#" id="toggleSignUp">Sign Up</a>`;
    }

    // Yeh line ensure karti hai ke jab bhi form toggle hota hai, 
    // to naye link par click karne se dobara se yeh function call ho.
    document.getElementById('toggleSignUp').addEventListener('click', toggleForm);
}

// Yeh line ensure karti hai ke jab page pehli dafa load ho, 
// to "Sign Up" link par click hone par toggleForm function call ho.
document.getElementById('toggleSignUp').addEventListener('click', toggleForm);
