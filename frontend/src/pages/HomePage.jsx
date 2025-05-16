import { redirect } from "react-router-dom";
import { getNotes } from "../../api/notes";
import { NoNotesPage } from "../components/NoNotesPage";
import { NotesCardPage } from "../components/NotesCardPage";
import { MainSkeletonLayout } from "../skeleton/MainSkeletonLayout";
import { useEffect } from "react";
import useNotesStore from "../store/useNotesStore";

function HomePage() {
  const { notes, getNotes, isNotesLoading } = useNotesStore();

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  if (isNotesLoading) {
    return <MainSkeletonLayout />;
  }

  return (
    <div className="flex-grow  mx-auto w-full px-4 flex flex-col justify-center items-center select-none">
      {notes.length === 0 ? <NoNotesPage /> : <NotesCardPage notes={notes} />}
    </div>
  );
}

async function loader() {
  const token = localStorage.getItem("jwtToken");
  if (!token) {
    return redirect("/login");
  }
  return await getNotes();
}

export const homePageRoute = {
  loader,
  element: <HomePage />,
};
