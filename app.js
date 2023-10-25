
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));






const app = express();

const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.render("index.ejs", {password: ""});
})

app.post("/password",(req,res)=>{
    function generateRandomPassword(length, useUppercase, useLowercase, useNumbers, useSymbols) {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_-+={}[]|\\:;\"\'<>,.?/';
      
        let allowedChars = '';
        if (useUppercase) allowedChars += uppercaseChars;
        if (useLowercase) allowedChars += lowercaseChars;
        if (useNumbers) allowedChars += numberChars;
        if (useSymbols) allowedChars += symbolChars;
      
        if (allowedChars.length === 0) {
          throw new Error('At least one character type must be selected.');
        }
      
        let password = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * allowedChars.length);
          password += allowedChars.charAt(randomIndex);
        }
      
        return password;
      }

  const passwordLength = parseInt(req.body.passwordLength, 12);
  const includeUppercase = req.body.upper === 'true';
  const includeLowercase = req.body.lower === 'true';
  const includeNumbers = req.body.number === 'true';
  const includeSymbols = req.body.symbols === 'true';

  // Call the generateRandomPassword function
  const generatedPassword = generateRandomPassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
  res.render("index.ejs", {password: generatedPassword });
})





app.listen(port, ()=>{
    console.log(`listening to port: ${port}`)
}
)



  
 
  





