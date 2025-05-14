import { useEffect, useState } from "react";
import { marked } from "marked";
import "../markdownPreview.css";
import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import { createNotes, getNote, updateNotes } from "../../api/notes";
import { toast } from "sonner";
import TurndownService from "turndown";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import { Box, Tab } from "@mui/material";
import TabList from "@mui/lab/TabList";
import { MarkdownGuide } from "../components/MarkdownGuide";
import { MarkdownPreview } from "../components/MarkdownPreview";
import { ThemeContext } from "@emotion/react";
import useThemeStore from "../store/useThemeStore";

export function NoteForm() {
  const [value, setValue] = useState("1");
  const [content, setContent] = useState("");
  const [previewContent, setPreviewContent] = useState("");
  const loaderData = useLoaderData();
  const note = loaderData?.data;
  const [title, setTitle] = useState("");
  const { theme } = useThemeStore();

  useEffect(() => {
    if (note) {
      const turndownService = new TurndownService();
      setTitle(note.title);
      const md = turndownService.turndown(note.content);
      setContent(md);
    }
  }, [note]);

  useEffect(() => {
    const htmlCode = marked.parse(content);
    setPreviewContent(htmlCode);
  }, [content]);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-white w-full dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-auto flex flex-col items-center justify-center px-4 py-8 mt-[50px]">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:max-w-[70%] rounded-lg border border-gray-300 dark:border-gray-700 p-4 sm:p-8 bg-white dark:bg-gray-800 shadow-lg">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Editor */}
          <Form method="post" className="flex-1 space-y-6 w-full">
            <h1 className="text-3xl font-bold text-primary mb-6 select-none">
              {note ? "Update Note" : "Write a Note"}
            </h1>

            {/* Title */}
            <div>
              <label htmlFor="title" className="block mb-1 font-medium">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter note title"
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Content */}
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="content"
              >
                Content (Markdown Supported)
              </label>
              <textarea
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                placeholder="Write your note in markdown..."
                rows={16}
                value={content}
                name="content"
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-2 mt-4">
              <Link
                to=".."
                className="px-4 py-2 bg-gray-300 text-[var(--text-color)] rounded-md hover:bg-gray-400"
              >
                Cancel
              </Link>
              <input
                type="submit"
                value="Save"
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90"
              />
            </div>
          </Form>

          {/* Right: Preview */}
          <div className="flex-1 space-y-4">
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange} aria-label="note tabs">
                  <Tab
                    label="Preview"
                    value="1"
                    style={{ color: theme === "dark" ? "white" : "" }}
                  />
                  <Tab
                    label="Guide"
                    value="2"
                    style={{ color: theme === "dark" ? "white" : "" }}
                  />
                </TabList>
              </Box>

              {/* Markdown Preview */}
              <TabPanel value="1" style={{ padding: 0 }}>
                <MarkdownPreview previewContent={previewContent} />
              </TabPanel>

              {/* Markdown Guide */}
              <TabPanel value="2" style={{ padding: 0 }}>
                <MarkdownGuide />
              </TabPanel>
            </TabContext>
          </div>
        </div>
      </div>
    </div>
  );
}

async function action({ request, params }) {
  const formData = await request.formData();

  const title = formData.get("title");
  const content = marked.parse(formData.get("content"));

  if (params.id) {
    await updateNotes(params.id, { title, content }, request.signal);
    toast.success("Your note has been updated!");
    return redirect(`/notes/${params.id}`);
  }

  try {
    const res = await createNotes({ title, content }, request.signal);
    toast.success("Note successfully created!");
    return redirect(`/notes/${res.data._id}`);
  } catch (error) {
    return toast.error(error.message);
  }
}

async function loader({ params }) {
  if (params?.id) {
    const res = await getNote(params.id);
    return res;
  }
  return null;
}

export const noteFormRoute = {
  action,
  loader,
  element: <NoteForm />,
};
