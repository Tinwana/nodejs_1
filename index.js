const Express = require('express')


const app = Express();
const port = 3001;

app.get('/', (req, res) =>{
    console.log(req, res);
    
    return res.send(
            `<div class="login">
            <p>Login with Social Media or Manually</p>
            <div class="login__app login--facebook">
                <i class="fa-brands fa-facebook-f"></i>
                <span>Login with Facebook</span>
            </div>
            <div class="login__app login--twitter">
                <i class="fa-brands fa-twitter"></i>
                <span>Login with Twitter </span>
            </div>
            <div class="login__app login--google">
                <i class="fa-brands fa-google"></i>
                <span>Login with Google+</span>
            </div>
            <span class="sign--manually">Or sign in manually:</span>
            <form action="" class="login__form" id="login__form">
                <div class="input__form">
                    <input id="username" type="text" placeholder="Username" required class="login__input">
                    <span class="errorMessage"></span>
                </div>
                <div class="input__form">
                    <input id="password" type="password" placeholder="Password" required class="login__input">
                    <span class="errorMessage"></span>
                </div>
    
    
                <button class="btn btn--success"><a
                        href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjgyMDAyOTUyLCJjYWxsc2l0ZV9pZCI6MzQzNjE1NzkwMjAxNjQ0fQ%3D%3D&cuid=AYhmB_eBtebTqMQkN-TYs6HrOW2t-TGP2HhEqihqa2YdXAwkqQ3LNivaBLmHNo4oxsVUwE7_xr-X2TFC5ezEolz95fTnyhDyhMBicyqvrieTPQ&next">Login</a></button>
                <span>You don't have an account?<a
                        href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjgyMDAyODU5LCJjYWxsc2l0ZV9pZCI6MTMzMjk3MjM4NzAzNDMzN30%3D">Sign
                        up</a></span>
                <span><a
                        href="https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjgyMDAyODU5LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&ars=facebook_login">Forgot
                        password?</a></span>
            </form>
        </div>`
        
        
    );

})
app.listen(port), ()=>console.log(`example listening on port ${port}`);
