# task
# Step 1:
At first create a database named **"task_rahul"** in mysql and 
set **username, password, host and port** if any in the **"config.js"** file in the project root directory.
Set **"seedDB:true"** and **"seedDBForce:true"** for the first time in **"config.js** file. Enabling this will create the categories and product table in the database.

To change the port change the **www** file in the **./bin/ directory**. By default it will run on PORT 3000. **(Optional)**

# Step 2:
Use **"npm install"** to install all the project dependencies.

# Step 3:
Use **"npm start"** to run the project.

# Step 4:
To get number of products associated to each category, hit **"http://localhost:3000/all-categories"** from postman or any browser.

# Note: Set "seedDB:false" and "seedDBForce:false" if you want to run the project for second time. If not done then it wil try to create the table again which might throw some errors on your console.
