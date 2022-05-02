import app from './src/app';
const PORT = (process.env.PORT || process.env.DEV_PORT || 5500) as number;

/*
 * LISTEN 👂
 */

app.listen(PORT, () => {
  console.log(`Server is running 🏃‍♂️ on ${process.env.NODE_ENV} mode at ${PORT} `);
});
