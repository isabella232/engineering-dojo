## 👨‍🏭 Installation

```javascript
npm install
```

## 🧙‍♂️ Usage

### Dev - Nodemon live reload
```javascript
npm run dev-server
```

### Prod - Basic Node process
```javascript
npm run server
```

## 🤵 Directory Layout
```bash
.
├── common/                     # common usages - enums, functions...
│   ├── enums
│   └── validate
├── search/                     # search utilities (in real life with DB there's no need, perhaps ORM as a middleware)
│   └── search                  
├── user/                       # User entity directory 
│   └── user                    
├── test/                       # test directory (currently has only unit tests) 
│   └── unit                    
├── .gitignore                  
├── LICENSE                  
├── README.md                   
├── app.js                      # Entry point for server of service 
├── package-lock.json           
└── package.json                
```


## 👨‍🔬 Testing
```javascript
npm run test
```

## 👨‍💻 Routes
Just like a classic CRUD service, there are 4 operations: Create, Read, Update and Delete.

Routes of the service are:

##### GET /
