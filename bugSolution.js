```javascript
// pages/index.js
export default async function Home() {
  const data = await fetch('/api/hello')
  const jsonData = await data.json()
  return (
    <div>Hello, world! {jsonData.message}</div>
  );
}
```
```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from the server!' });
}
```