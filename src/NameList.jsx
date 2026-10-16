import { useState } from 'react';

function NameList() {
  const names = ['Apple', 'Banana', 'Cherry', 'Mango'];
  const [selectedName, setSelectedName] = useState(null);

  return (
    <div style={{
      maxWidth: '300px',
      margin: '40px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontFamily: 'Arial'
    }}>
      <h3>Name List</h3>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {names.map((name) => (
          <li
            key={name}
            onClick={() => setSelectedName(name)}
            style={{
              padding: '10px',
              marginBottom: '5px',
              border: '1px solid #aaa',
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor:
                selectedName === name ? '#f0f8ff' : '#fff'
            }}
          >
            {name}
          </li>
        ))}
      </ul>

      {selectedName && (
        <p>
          You clicked on: <strong>{selectedName}</strong>
        </p>
      )}
    </div>
  );
}

export default NameList;