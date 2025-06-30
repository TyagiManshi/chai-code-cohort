<h1 align="center">
  Week 16 - Backend Foundations for LeetLab
</h1> 

<p align="center">
  This week, we leveled up the backend of <strong>LeetLab</strong> with hands-on implementation and deeper architecture. <br> We extended our problem model, set up local judge environments, and explored new code execution APIs like <strong>Sulu</strong>.
</p>

<br>

### *This week pushed us into a more advanced backend development mindset – thinking beyond CRUD and into actual platform logic like a true coding platform.*  
- [Browse My Backend Code Files](https://github.com/TyagiManshi/chai-code-cohort/tree/main/weekly-reports/week-16/leetlab-backend)

<br>

## 𝗞𝗲𝘆 𝗧𝗮𝗸𝗲𝗮𝘄𝗮𝘆𝘀 ✍🏻  

### **1️⃣ Problem Controller Logic**  
- Created custom controllers for handling problem creation  
- Validated input and stored structured problem data  
- Connected controllers to Express routes for full CRUD

### **2️⃣ Local Judge Setup (Judge0 + Docker)**  
- Installed **Judge0 CE** (Community Edition) using Docker  
- Configured Docker containers and tested local API requests  
- Learned how Judge0 executes code with sandboxing

### **3️⃣ Sulu API Exploration**  
- Evaluated **Sulu** as an alternative code execution service  
- Compared with Judge0 in terms of response, setup, and pricing  
- Setup routes to optionally support Sulu integration  

### **4️⃣ Problem Model Enhancements**  
- Extended the **Prisma schema** to include language, test cases, expected output, etc.  
- Linked problems with execution logic to be ready for frontend rendering
