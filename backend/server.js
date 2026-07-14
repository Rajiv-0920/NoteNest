import express from 'express';
import 'dotenv/config';
import { connectDB } from './lib/db.js';
import authRoutes from './routes/auth.route.js';
import noteRoutes from './routes/notes.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  'http://localhost:5173',
  '', // frontend - vercel
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  }),
);
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server Started at http://localhost:${PORT}/`);
});
