export default function Home() {

  return <div>
    <h1 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
      Home
    </h1>
    <h1>Hello, Mantine + React!</h1>
    <p>This is your barebones app.</p>
    <video
      controls
      preload="metadata"
      width="640"
      height="360"
      src="http://localhost:5140/api/VideoFetch/projectlilithsample1"
    >
      Your browser does not support the video tag.
    </video>
    <h2>Welcome to my Developer Portfolio</h2>
  </div>;
}