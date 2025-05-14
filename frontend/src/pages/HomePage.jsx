import { redirect, useLoaderData, useNavigation } from "react-router-dom";
import { getNotes } from "../../api/notes";
import { NoNotesPage } from "../components/NoNotesPage";
import { NotesCardPage } from "../components/NotesCardPage";
import { MainSkeletonLayout } from "../skeleton/MainSkeletonLayout";
import { useEffect, useState } from "react";

function HomePage() {
  const loaderData = useLoaderData();
  const notes = loaderData.data;

  const { state } = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex-grow  mx-auto w-full px-4 flex flex-col justify-center items-center select-none">
      {notes.length === 0 ? (
        <NoNotesPage />
      ) : state === "loading" || loading ? (
        <MainSkeletonLayout />
      ) : (
        <NotesCardPage notes={notes} />
      )}
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
