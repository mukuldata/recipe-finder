# To deploy application on github:


1. Install "gh-pages" package using the below command.

npm install gh-pages --save
Makefile
2. Add homepage property to package.json file

Add the below property to your package.json file.
"homepage": "https://username.github.io/repository-name"


3. Add deploy scripts to package.json file inside scripts

Add both predeploy and deploy property scripts to the package.json file as below,

"predeploy": "npm run build",
"deploy": "gh-pages -d build"

4. Create a remote GitHub repository

Initialize the Git using "git init" command.
Add it as remote using "git remote add origin your-github-repository-url.git" command.
5. Deploy the Application to GitHub Pages

Now run the below command to deploy your react application to GitHub Pages.

npm run deploy

Now any changes u do can be committed by same commands as before.