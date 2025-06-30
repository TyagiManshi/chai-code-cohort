<h1 align="center">
  Week 15 - Backend Foundations for LeetLab 🔥
</h1> 

<p align="center">
  This week, we began laying down the backend architecture for our own version of LeetCode – <strong>LeetLab</strong>! <br>
  With the guidance of <strong>Hitesh Sir, Piyush Sir, and Suraj Sir</strong>, we explored key backend concepts and <br>
  implemented an end-to-end authentication system, setting the stage for a production-ready coding platform.
</p>

<br>

### *Eraser Link 👇*  
- [LeetLab Backend Architecture](https://www.tldraw.com/f/bGoPX7VryK55ZKEcmQ5Di?d=v-1152.-1182.3424.1626.Z7o32-Fuw2PnxUY3ngYU0)

### *This week was packed with real-world backend learnings — not just theory, but building something impactful from the ground up!*  
- [Browse My LeetLab Backend Practice Files](https://github.com/TyagiManshi/chai-code-cohort/tree/main/weekly-reports/week-15/leetlab-backend)

<br>

## 𝗞𝗲𝘆 𝗧𝗮𝗸𝗲𝗮𝘄𝗮𝘆𝘀 ✍🏻

### **1️⃣ Project Setup & Core Dependencies**  
- Initialized Node.js project with `npm init`  
- Installed:  
  - **express** – backend server framework  
  - **cookie-parser** – for handling cookies securely  
  - **jsonwebtoken (JWT)** – for token-based authentication  
  - **dotenv** – managing environment variables  

### **2️⃣ Prisma + PostgreSQL**  
- Setup **PostgreSQL database**  
- Connected via **Prisma ORM**  
- Defined the **Problem model** for coding questions  
- Ran `npx prisma migrate dev` for database syncing  

### **3️⃣ Authentication Flow**  
- Implemented the **Singleton Pattern** for database connection  
- Developed signup/login APIs using JWTs stored in cookies  
- Middleware for verifying tokens and protected routes  

### **4️⃣ External API Integration (Judge0)**  
- Connected to **Judge0 API** for code execution functionality  
- Setup base route to send code and receive output  

<br>

