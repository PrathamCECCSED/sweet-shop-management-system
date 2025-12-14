# 🧪 Test Report – Sweet Shop Management System

## Overview
This document summarizes the testing performed for the **Sweet Shop Management System**.  
The goal of testing was to validate the correctness, reliability, and role-based behavior of the backend APIs and frontend interactions.

Testing was performed following a **Test-Driven Development (TDD) mindset**, focusing on core business logic before UI polish.

---

## Testing Approach

- **Backend API Testing**
  - Manual API testing using `curl` and REST clients
  - Validation against MongoDB Atlas
  - JWT-based authentication checks

- **Frontend Testing**
  - Manual functional testing via browser
  - Role-based UI validation (Admin vs User)
  - Form validation and error handling

---

## Tools Used

- Node.js + Express (Backend)
- MongoDB Atlas
- curl (Command-line API testing)
- Browser DevTools
- GitHub Codespaces

---

## Test Scenarios & Results

### 1️⃣ Authentication Tests

| Test Case | Expected Result | Actual Result | Status |
|----------|----------------|---------------|--------|
| User Registration | User registered successfully | User created in DB | ✅ Pass |
| Duplicate Registration | Error message shown | Correct error returned | ✅ Pass |
| User Login | JWT token returned | Token received | ✅ Pass |
| Invalid Login | Error response | Error shown | ✅ Pass |

---

### 2️⃣ Authorization & Role-Based Access

| Test Case | Expected Result | Status |
|---------|----------------|--------|
| Admin can add sweet | Allowed | ✅ Pass |
| User cannot add sweet | Blocked | ✅ Pass |
| Admin can delete sweet | Allowed | ✅ Pass |
| User cannot delete sweet | Blocked | ✅ Pass |

---

### 3️⃣ Sweet Management (CRUD)

| Test Case | Expected Result | Status |
|---------|----------------|--------|
| Add Sweet | Sweet saved in DB | ✅ Pass |
| View Sweets | List returned | ✅ Pass |
| Update Sweet | Data updated | ✅ Pass |
| Delete Sweet | Removed from DB | ✅ Pass |

---

### 4️⃣ Inventory Operations

| Test Case | Expected Result | Status |
|---------|----------------|--------|
| Purchase Sweet | Quantity decreases by 1 | ✅ Pass |
| Purchase Out-of-Stock Sweet | Blocked | ✅ Pass |
| Restock Sweet (Admin) | Quantity increases | ✅ Pass |

---

### 5️⃣ Search & Filter

| Test Case | Expected Result | Status |
|---------|----------------|--------|
| Search by name | Matching sweets returned | ✅ Pass |
| Partial match | Results shown | ✅ Pass |
| No match | Empty list | ✅ Pass |

---

## Test Summary

- **Total Test Cases Executed:** 18
- **Passed:** 18
- **Failed:** 0
- **Overall Result:** ✅ Successful

---

## Notes on TDD

While full automated test coverage was not implemented, the project followed a **TDD mindset**:
- Core logic was validated before UI polish
- Edge cases were manually tested
- Errors were fixed iteratively (Red → Green → Refactor)

This approach ensured stability and correctness of the system.

---

## Conclusion

The Sweet Shop Management System meets all functional requirements and behaves correctly across different user roles.  
The system is stable, secure, and ready for further enhancements or production hardening.
