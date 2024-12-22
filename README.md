 Student Record System

This project is a simple CRUD application for managing student records, built using:
- **Frontend**: Next.js
- **Backend**: API routes in Next.js
- **State Management**: Zustand
- **Database**: Supabase

---

## Features
1. **Add Students**: Add new student records to the database.
2. **View Students**: Display a list of all students.
3. **Search Students**: Filter students based on their names using a search query.
4. **Update Students**: Edit existing student records.
5. **Delete Students**: Remove student records from the database.
6. **Real-Time Updates**: Fetch data dynamically from Supabase.

---

## Technologies Used

### Frontend
- **Next.js**: For building the user interface and handling API routes.
- **Zustand**: For lightweight state management.
- **React Icons**: For intuitive action buttons (e.g., delete).

### Backend
- **Next.js API Routes**: Server-side functionality for fetching, updating, and deleting records.

### Database
- **Supabase**: For database and authentication.

---

## Setup Instructions

### Prerequisites
1. **Node.js** and **npm/yarn** installed.
2. Supabase account with a project created.

### Step 1: Clone the Repository
```bash
# Clone the repository
git clone <repository_url>

# Navigate into the project directory
cd student-record-system
```

### Step 2: Install Dependencies
```bash
# Install required packages
npm install
```

### Step 3: Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```plaintext
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_KEY=your-supabase-anon-key
```

### Step 4: Run the Application
```bash
# Start the development server
npm run dev
```
Access the app at `http://localhost:3000`.

---

## Folder Structure
```
project-root
├── pages
│   ├── api
│   │   ├── records.js       # API endpoint for fetching records
│   │   └── deleteRecord.js  # API endpoint for deleting a record
│   └── index.js             # Main page for the app
├── components
│   ├── StudentTable.js      # Component to display the student table
│   └── Model.js             # Modal for adding/updating students
├── store
│   └── store.js             # Zustand store for state management
├── .env                     # Environment variables
├── package.json
└── README.md
```

---

## API Endpoints

### GET `/api/records`
Fetch all student records from Supabase.

### DELETE `/api/deleteRecord`
Delete a student record by ID.

### POST/PUT `/api/addOrUpdateRecord`
Add  a student record.


### POST/PUT `/api/EditApi`
update name of student.

---

## Zustand Store
The `store.js` file manages the state of the application. Key functions include:
- `fetchStudents`: Fetch all student records from the backend.
- `deleteStudent`: Delete a student by ID.
- `setSearchQuery`: Update the search query.
- `filteredStudents`: Return a filtered list of students based on the search query.

---

## Supabase Configuration
1. Create a table named `students` with the following schema:
   - `id`: UUID (Primary Key)
   - `Name`: Text
   - `cohort`: Text
   - `batch`: Text
   - `sub`: Text
   - `last`: Date
   - `date`: Date
   - `online`: Boolean

2. Copy the project URL and anonymous key to the `.env` file.

---

## Future Improvements
- Add authentication with Supabase.
- Implement pagination for large datasets.
- Enhance the UI with additional features like sorting.
- Add more robust error handling.

---

## deployed link
### https://student-record-system-with-supabase.vercel.app/



![image](https://github.com/user-attachments/assets/c8a000ac-c345-4c83-9484-9788f2778c25)
![image](https://github.com/user-attachments/assets/f96e9a7d-61df-4feb-ada6-e2eb7440d233)

