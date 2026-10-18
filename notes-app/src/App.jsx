import { useRef } from "react";

function App() {
  // Reference to the native <dialog> element
  const dialogRef = useRef(null);

  // Open the modal
  function openDialog() {
    dialogRef.current.showModal();
  }

  // Close the modal
  function closeDialog() {
    dialogRef.current.close();
  }

  // Delete task
  function handleDelete() {
    alert("Task deleted!");
    closeDialog();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">

      {/* Main Card */}
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

        {/* Header */}
        <h1 className="text-3xl font-bold">
          My Task App
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your tasks with React.
        </p>

        {/* Task */}
        <div className="mt-8 flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800 p-4">

          <div>
            <h2 className="font-semibold">
              Learn React
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Learn React dialogs
            </p>
          </div>

          {/* Open Dialog Button */}
          <button
            type="button"
            onClick={openDialog}
            className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700 active:scale-95"
          >
            Delete
          </button>

        </div>

      </div>


      {/* =========================
          DIALOG / MODAL
      ========================== */}

      <dialog
        ref={dialogRef}
        className="
          w-[calc(100%-2rem)]
          max-w-md
          rounded-2xl
          border
          border-slate-700
          bg-slate-900
          p-0
          text-white
          shadow-2xl
          backdrop:bg-black/70
          backdrop:backdrop-blur-sm
        "
      >

        {/* Dialog Content */}
        <div className="p-6">

          {/* Icon */}
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-500">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9.303 3.376c.704 1.22-.176 2.749-1.587 2.749H4.284c-1.411 0-2.291-1.53-1.587-2.75L10.413 4.5c.705-1.22 2.469-1.22 3.174 0l7.716 13.626ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>

          </div>


          {/* Title */}
          <h2 className="mt-4 text-center text-2xl font-bold">
            Delete Task?
          </h2>


          {/* Description */}
          <p className="mt-2 text-center text-slate-400">
            Are you sure you want to delete
            <span className="font-semibold text-white">
              {" "}Learn React
            </span>
            ?
          </p>


          {/* Buttons */}
          <div className="mt-6 flex gap-3">

            {/* Cancel */}
            <button
              type="button"
              onClick={closeDialog}
              className="
                flex-1
                rounded-lg
                border
                border-slate-700
                bg-slate-800
                px-4
                py-2.5
                font-medium
                text-white
                transition
                hover:bg-slate-700
              "
            >
              Cancel
            </button>


            {/* Delete */}
            <button
              type="button"
              onClick={handleDelete}
              className="
                flex-1
                rounded-lg
                bg-red-600
                px-4
                py-2.5
                font-medium
                text-white
                transition
                hover:bg-red-700
                active:scale-95
              "
            >
              Delete
            </button>

          </div>

        </div>

      </dialog>

    </div>
  );
}

export default App;