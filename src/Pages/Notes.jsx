import React from 'react';
import Layout from '../Components/Layout/Layout';

function Notes() {
  const notes = [
    { title: 'Note 1', content: 'Content for note 1' },
    { title: 'Note 2', content: 'Content for note 2' },
    { title: 'Note 3', content: 'Content for note 3' },
    { title: 'Note 4', content: 'Content for note 4' },
    { title: 'Note 5', content: 'Content for note 5' },
    { title: 'Note 6', content: 'Content for note 6' },
  ];

  return (
    <Layout >
      <div className="m-4 p-4">
        <h1 className="text-2xl font-bold mb-4">Notes</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div key={note.title} className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold mb-2">{note.title}</h2>
              <p>{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Notes;
