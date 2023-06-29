import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';

function Notes() {
  const navigate = useNavigate();
  const notes = [
    { id: 1, title: 'Note 1', content: 'Content for note 1' },
    { id: 2, title: 'Note 2', content: 'Content for note 2' },
    { id: 3, title: 'Note 3', content: 'Content for note 3' },
    { id: 4, title: 'Note 4', content: 'Content for note 4' },
    { id: 5, title: 'Note 5', content: 'Content for note 5' },
    { id: 6, title: 'Note 6', content: 'Content for note 6' },
  ];

  const handleCardClick = (noteId) => {
    navigate(`/Notes/${noteId}`);
  }

  return (
    <Layout >
      <div className="m-4 p-4 text-gray-900">
        <h1 className="text-2xl font-bold mb-4">Notes</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div key={note.id} className="bg-white bg-opacity-80 rounded-lg shadow-md p-4 hover:shadow-lg hover:bg-opacity-100 transition duration-200 cursor-pointer" onClick={() => handleCardClick(note.id)}>
              <h2 className="text-lg font-medium mb-2">{note.title}</h2>
              <p className="text-gray-700">{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Notes;
