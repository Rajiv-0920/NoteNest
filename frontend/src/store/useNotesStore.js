import { create } from "zustand";
import { baseApi } from "../../api/base";
import { toast } from "sonner";

const getFilteredAndSortedNotes = (notes, search, filter) => {
  const filtered = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  if (filter === "1") {
    return [...filtered].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  if (filter === "2") {
    return [...filtered].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }

  return filtered;
};

const useNotesStoreTest = create((set) => ({
  notes: [],
  note: {},
  filteredNotes: [],
  search: "",
  filter: "1",
  isNoteLoading: false,
  isNotesLoading: false,

  getNote: async (id) => {
    set({ isNoteLoading: true });
    const res = await baseApi.get(`/notes/${id}`).then((res) => res.data.data);
    set({ note: res, isNoteLoading: false });
  },

  getNotes: async () => {
    set({ isNotesLoading: true });
    const res = await baseApi.get("/notes").then((res) => res.data);
    set({ notes: res.data, isNotesLoading: false });
  },

  deleteNote: async (id) => {
    set({ isNotesLoading: true });

    try {
      await baseApi.delete(`/notes/${id}`);
      toast.success("Your note has been deleted!");
      set((state) => {
        const filtered = state.notes.filter((note) => {
          return String(note._id) !== String(id);
        });
        return {
          notes: filtered,
          isNotesLoading: false,
        };
      });
    } catch (error) {
      set({ isNotesLoading: false });
      toast.error("Failed to delete the note.");
      console.error("Delete failed:", error);
    }
  },

  setSearch: (search, notes) =>
    set((state) => ({
      search,
      filteredNotes: getFilteredAndSortedNotes(notes, search, state.filter),
    })),

  setFilter: (filter, notes) =>
    set((state) => ({
      filter,
      filteredNotes: getFilteredAndSortedNotes(notes, state.search, filter),
    })),

  setNotes: (notes) =>
    set((state) => ({
      filteredNotes: getFilteredAndSortedNotes(
        notes,
        state.search,
        state.filter
      ),
    })),
}));

export default useNotesStoreTest;
