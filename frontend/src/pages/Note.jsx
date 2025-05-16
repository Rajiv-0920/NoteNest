import "../markdownPreview.css";
import { MenuBtn } from "../components/MenuBtn";
import { getNote } from "../../api/notes";
import { ScrollRestoration, useParams } from "react-router-dom";
import { formatDate } from "../lib/utils";
import { marked } from "marked";
import { useEffect, useState } from "react";
import useNotesStore from "../store/useNotesStore";

function Note() {
  const { id } = useParams();
  const { note, getNote, isNoteLoading } = useNotesStore();
  const [content, setContent] = useState("");

  useEffect(() => {
    if (id) getNote(id);
    if (id && note.content) {
      setContent(marked.parse(note.content));
    }
  }, [id, getNote, note.content]);

  if (isNoteLoading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Loading notes...</p>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-3xl mx-auto h-[100%] min-h-screen w-full px-4">
        {/* Note */}
        <div className="flex justify-between items-start mt-[1.5rem]">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-primary">
              {note.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4">
              Created on: {formatDate(note.createdAt)}
            </p>
          </div>
          {/* <!-- Menu --> */}
          <MenuBtn id={note._id} isPrintable={true} />
        </div>
        <article>
          {/* <!-- Note Content --> */}
          <div
            className="prose dark:prose-invert max-w-full"
            dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
          />
        </article>
      </div>
      <ScrollRestoration />
    </>
  );
}

export async function loader({ params, request: { signal } }) {
  const { id } = params;
  return getNote(id, signal);
}

export const noteRoute = {
  loader,
  element: <Note />,
};
