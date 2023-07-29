import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';

function Note() {
  const { noteId } = useParams();
  const [note, setNote] = useState({
    id: noteId,
    title: 'Note Title',
    content: 'Note Content',
  });

  const handleTitleChange = (event) => {
    setNote({
      ...note,
      title: event.target.value,
    });
  }

  const handleContentChange = (event) => {
    setNote({
      ...note,
      content: event.target.value,
    });
  }

  return (
    <Layout>
      <div className=" h-[calc(100vh-5.9rem)] m-4 p-6 bg-white bg-opacity-60 rounded-lg shadow-md ">
        {/* <h1 className="text-2xl font-bold mb-4 text-center">Note {note.id}</h1> */}
        <div className="mb-4">
          <input type="text" id="title" name="title" value={note.title} onChange={handleTitleChange} placeholder="Title" className="w-full bg-transparent border-b border-gray-300 focus:border-gray-400 text-xl font-medium text-gray-700 focus:outline-none focus:shadow-sm  rounded " />
        </div>
        <div>
          <textarea id="content" name="content" rows={10} value={note.content} onChange={handleContentChange} placeholder="Start writing ... " className="w-full bg-transparent border-b border-gray-300 focus:border-gray-400 text-base font-normal text-gray-700 focus:outline-none focus:shadow-sm  rounded"></textarea>
        </div>
      </div>
    </Layout>
  );
}

export default Note;
