import React from 'react';
import ExampleComponent from './components/ExampleComponent';
import Aurora from './components/Aurora'; // Import Aurora

function App() {
    return (
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            {/* Aurora background */}
            <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />
            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#fff', padding: '2rem' }}>
                <h1>Welcome to My React Vite App</h1>
                <ExampleComponent />
            </div>
        </div>
    );
}

export default App;