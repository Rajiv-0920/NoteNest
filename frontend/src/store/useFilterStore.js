// import { create } from "zustand";

// const getFilteredAndSortedNotes = (notes, search, filter) => {
//   const filtered = notes.filter((note) =>
//     note.title.toLowerCase().includes(search.toLowerCase())
//   );

//   if (filter === "1") {
//     return [...filtered].sort(
//       (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//     );
//   }

//   if (filter === "2") {
//     return [...filtered].sort(
//       (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
//     );
//   }

//   return filtered;
// };

// const useNotesStore = create((set) => ({
//   search: "",
//   filter: "",
//   showNotes: [],

//   setSearch: (search, notes) =>
//     set((state) => ({
//       search,
//       showNotes: getFilteredAndSortedNotes(notes, search, state.filter),
//     })),

//   setFilter: (filter, notes) =>
//     set((state) => ({
//       filter,
//       showNotes: getFilteredAndSortedNotes(notes, state.search, filter),
//     })),

//   setNotes: (notes) =>
//     set((state) => ({
//       showNotes: getFilteredAndSortedNotes(notes, state.search, state.filter),
//     })),
// }));

// export default useNotesStore;
