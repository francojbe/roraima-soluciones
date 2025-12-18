import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import jwt from 'jsonwebtoken';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || 'roraima-secret-key-change-me';

// Middleware
app.use(cors());
app.use(express.json());

// Paths
const DATA_DIR = path.join(__dirname, '../data');
const UPLOADS_DIR = path.join(DATA_DIR, 'uploads');
const CONTENT_FILE = path.join(DATA_DIR, 'content.json');
const DEFAULT_CONTENT_FILE = path.join(__dirname, 'content.json');

// Ensure data content and uploads directories exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR);

// Initialize content.json if not exists
if (!fs.existsSync(CONTENT_FILE)) {
    if (fs.existsSync(DEFAULT_CONTENT_FILE)) {
        fs.copyFileSync(DEFAULT_CONTENT_FILE, CONTENT_FILE);
        console.log('Initialized content.json from default');
    } else {
        console.warn('Default content.json not found!');
        fs.writeFileSync(CONTENT_FILE, '{}');
    }
}

// Multer setup for images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_DIR);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../dist')));
// Serve uploaded files
app.use('/uploads', express.static(UPLOADS_DIR));

// --- API ROUTES ---

// Auth Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Login
app.post('/api/auth/login', (req, res) => {
    const { password } = req.body;
    // Simple password check (replace with env var in production)
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

    if (password === ADMIN_PASSWORD) {
        const token = jwt.sign({ role: 'admin' }, SECRET_KEY, { expiresIn: '24h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Get Content
app.get('/api/content', (req, res) => {
    fs.readFile(CONTENT_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Error reading content' });
        res.json(JSON.parse(data));
    });
});

// Update Content (Protected)
app.post('/api/content', authenticateToken, (req, res) => {
    const newContent = req.body;
    fs.writeFile(CONTENT_FILE, JSON.stringify(newContent, null, 4), (err) => {
        if (err) return res.status(500).json({ error: 'Error saving content' });
        res.json({ message: 'Content updated successfully', content: newContent });
    });
});

// Upload Image (Protected)
app.post('/api/upload', authenticateToken, upload.single('image'), (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    const fileUrl = `/uploads/${req.file.filename}`;
    res.json({ url: fileUrl });
});

// Catch-all handler for React SPA
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
