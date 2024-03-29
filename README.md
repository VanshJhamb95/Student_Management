**#Student Result Management System**
</br></br>
</br>
Welcome to the enhanced Student Result Management System, a powerful MERN Stack application designed to efficiently manage students' academic results. This documentation provides an in-depth guide on features and usage of the application.
</br></br>

**Features**
</br></br>

User Authentication Secure user registration and login functionality. Implementation of password hashing with Passport JWT for enhanced security.
Class Management Create, edit, and delete classes effortlessly. Define exams, assignments, and answer sheets for each class, promoting seamless organization.
Student Management Seamlessly add, edit, and remove students. Store detailed student information, including names, emails, and additional details.
Result Recording and Calculation Record student grades for exams, assignments, and answer sheets. Automatic calculation of overall grades based on predefined weightage. View and update student grades as necessary.
</br></br></br>
Report Generation Generate detailed reports for individual students or the entire class. Include crucial information such as percentages, result verdicts, and answer sheet marks. Usage
</br></br>
Once the application is up and running, utilize the following functionalities:
</br>
</br>
Login: Use your credentials to log into the application. If you're a new user, sign up for an account. Create a Class: After logging in, create a new class by providing essential information such as class name, subject, and term. Add Students: Once a class is created, add students by providing their details, including name, email, and other relevant information. Record Grades: For each student, record grades for various assignments, exams, and answer sheets. The application will automatically calculate the overall grade based on predefined weightage. Generate Reports: Generate detailed reports for individual students or the entire class, including grades, attendance, and additional information.
</br>
</br>
Tech Stack MongoDB: NoSQL database for efficient data storage. Express: Backend framework for building RESTful APIs. React: Frontend framework for creating responsive user interfaces. Node.js: JavaScript runtime environment for scalable server-side applications. JWT: JSON Web Token for secure user authentication and authorization. Bcrypt: Password hashing library for robust password storage.
</br>
</br>

#   S R M 
 
 #   S t u d e n t M a n a g e m e n t 
 
 #   S t u d e n t M a n a g e m e n t 

 </br></br></br>
## Installation
</br></br>

To set up SmartBook locally, follow these steps:

</br></br>
- Clone the repository:
  
</br></br>
      git clone https://github.com/VanshJhamb95/Student_Management.git
  
      
</br></br>
- Install the required dependencies for backend or at Root directory:
  </br></br>

      npm install
  
    </br> </br>
- Navigate to the client directory:
  
</br></br>
       cd client
  </br></br>
    
- Install the dependencies for the client:
  
</br></br>
       npm i react-router-dom redux react-redux axios antd @reduxjs/toolkit react-hot-toast or npm install
  </br>
  </br>  
- Create a .env file in the root directory with the following environment variables:
  
</br></br>

       mongo_url = mongodb+srv://<user>:<pass>@cluster0.l17quyr.mongodb.net/database
       
       </br>

       jwt_secret = A_Secret_Value
       
  </br></br>

- Start the server:
  </br>
</br>
       npm start
 </br> 
    </br>
- In a new terminal window, navigate to the client directory:
  
</br></br>
       cd client
  
  </br>  </br>
- Start the client:
  </br></br>

       npm start
  
    </br>
- Access the application. Open your web browser and visit http://localhost:3000 to access the Smartbook application.
</br>
 
