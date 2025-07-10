# Infinite Employee List Viewer

This utility renders an infinite scrolling list of employee records with essential details. It also includes a "Load 10 More" button to manually append more data.

## 🚀 Features

- Displays employee data in a clean, scrollable list.
- Infinite scroll loads data as user scrolls near the bottom.
- "Load 10 More" button adds the next batch of employees.
- Smooth UX with lazy rendering and state optimization.
- Uses mock JSON data with 50 sample employees.
- Optimized for large datasets with scalable performance.

## 📋 Employee Data Fields

Each employee item contains:

- 🧑 Name
- 🆔 Employee ID
- 📅 Date of Birth
- 🏠 Address
- 🔐 14-digit National Identity Number
- 🏦 Bank Number
- 👥 Team
- 🏢 Department (e.g., HR, FE, BE, DevOps, CEO, etc.)
- 👤 Nominee
- 💸 Salary (6–8 digits)

<img width="1266" height="990" alt="Screenshot 2025-07-11 at 1 17 12 AM" src="https://github.com/user-attachments/assets/2c400287-c30d-4779-8a73-9f4ae390722d" />
<img width="1021" height="1003" alt="Screenshot 2025-07-11 at 1 15 52 AM" src="https://github.com/user-attachments/assets/9c78d08c-6e83-41ee-83bb-fb8f04231916" />


## 🔧 How It Works

- The component loads an initial batch of employees.
- As the user scrolls and hits the bottom threshold, more data is loaded.
- A "Load 10 More" button allows manual loading as well.

## 🛠 Technologies Used

- ReactJS
- useState, useEffect, useRef
- CSS Modules
- IntersectionObserver API (for scroll detection)

## 📦 Future Improvements

- Add search and filter functionality (e.g., filter by department).
- Add sorting (e.g., salary high to low).
- Add pagination support as fallback for very large datasets.

## 🖼 Screenshot

> (You can add a screenshot of your working UI here once available.)

---

## 💡 Interview Tip

This is a common UI/UX question in frontend interviews. Focus on:
- Scroll event handling
- Lazy loading data
- Memory and performance optimization
