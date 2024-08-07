const darkModeCheckbox = document.getElementById("dark-mode");
const bodyElement = document.body;
const profile_dropdown = document.querySelector(".profile-dropdown");
const menu_container = document.querySelector(".menu-container");
const menu_links = document.querySelectorAll(".menu-links");
const menu_icon = document.querySelector(".menu-icon");
const profile_icon = document.querySelector(".profile-icon");
const create_note_button = document.querySelector(".create-note-button");
const urgent_icon = document.querySelector(".urgent-icon");
const folders_container = document.querySelector(".folders-container");
const folders_arrow = document.querySelector(".folders-arrow");
const folder_pinned_notes = document.querySelector(".folder-pinned-notes");
const folder_recent_notes = document.querySelector(".folder-recent-notes");
const note_container = document.querySelector(".note-container");
const urgent_notes_container = document.querySelector(".urgent-notes");
const note_folder_arrow = document.querySelector(".note-folder-arrow");
const note_folder_select = document.querySelector(".note-folder-select");
const selected_folder_display = document.querySelector(
  ".selected-folder-display"
);
const cancel_note = document.querySelector(".note-cancel");
const small_note = document.querySelectorAll(".small-note");
const noteForm = document.querySelector(".note-form");
const create_or_update_note = document.querySelector(".note-save");
const delete_button_icon = document.querySelector(".delete-icon");
const delete_modal = document.querySelector(".delete-modal");
const create_folder_button = document.querySelector(".create-folder-button");
const folder_delete_buttons = document.querySelectorAll(".folder-delete");
const delete_folder_modal = document.querySelector(".delete-folder-modal");
const delete_folder_text = document.querySelector(".delete-folder-text");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const profile_dropdown_links = document.querySelectorAll(".profile-dropdown-link");
const modals = document.querySelectorAll(".modal"); 
const open_door = document.querySelector(".open-door");
const note_title = document.querySelector(".note-title");
const pin_icon = document.querySelector(".pin-icon");
const note_text = document.querySelector(".note-text");
const due_date = document.querySelector(".due-date");
const folder_selection = document.querySelector(".folder-selection");
const details_board_container = document.querySelector(".details-board-container");
const create_note_button_folder = document.querySelector(".create-note-button-folder");
const all_search_main = document.querySelector(".all-search-main");
/*This code is for setting up all the class changes for dark mode and keeping them in local storage*/
const toggleDarkMode = () => {
  darkModeCheckbox.checked = localStorage.getItem("darkMode") === "true";
  if (darkModeCheckbox.checked) {
    console.log("Dark mode is on",note_title);
    bodyElement.classList.add("body-dark-mode");
    menu_container.classList.add("menu-container-dark");
    profile_dropdown.classList.add("profile-dropdown-dark");
    if (create_note_button) {
      create_note_button.classList.add("create-note-button-dark")
    };
    moon.classList.add("moon-dark");
    sun.classList.add("sun-dark");
    profile_dropdown_links.forEach((profile_dropdown_link) => {
      profile_dropdown_link.classList.add("profile-dropdown-link-dark");
    modals.forEach((modal) => {
      modal.classList.add("modal-dark");
    open_door.classList.add("open-door-dark");
    note_container.classList.add("note-container-dark");
    note_title.classList.add("note-title-dark");
    pin_icon.classList.add("pin-icon-dark");
    note_text.classList.add("note-text-dark");
    cancel_note.classList.add("note-cancel-dark");
    create_or_update_note.classList.add("note-save-dark");
    due_date.classList.add("due-date-dark");
    folder_selection.classList.add("folder-selection-dark");
    note_folder_arrow.classList.add("note-folder-arrow-dark");
    document.querySelectorAll(".small-note").forEach((small_note) => {
      small_note.classList.add("small-note-dark");
    })
    if (folders_container) {
      folders_container.classList.add("folders-container-dark");
      create_folder_button.classList.add("create-folder-button-dark");
      folder_delete_buttons.forEach((folder_delete_button) => {
        folder_delete_button.classList.add("folder-delete-dark");
      })
      details_board_container.classList.add("details-board-container-dark");
      create_note_button_folder.classList.add("create-note-button-folder-dark");
    }
    if (all_search_main) {
      all_search_main.classList.add("all-search-main-dark");
    }
    })
    });
  } else {
    console.log("Dark mode is off",moon,sun);
    bodyElement.classList.remove("body-dark-mode");
    menu_container.classList.remove("menu-container-dark");
    profile_dropdown.classList.remove("profile-dropdown-dark");
    if (create_note_button) {
      create_note_button.classList.remove("create-note-button-dark")
    };
    moon.classList.remove("moon-dark");
    sun.classList.remove("sun-dark");
    profile_dropdown_links.forEach((profile_dropdown_link) => {
      profile_dropdown_link.classList.remove("profile-dropdown-link-dark");
    modals.forEach((modal) => {
      modal.classList.remove("modal-dark");
    open_door.classList.remove("open-door-dark");  
    note_container.classList.remove("note-container-dark");
    note_title.classList.remove("note-title-dark");
    pin_icon.classList.remove("pin-icon-dark");
    note_text.classList.remove("note-text-dark");
    cancel_note.classList.remove("note-cancel-dark");
    create_or_update_note.classList.remove("note-save-dark");
    due_date.classList.remove("due-date-dark");
    folder_selection.classList.remove("folder-selection-dark");
    note_folder_arrow.classList.remove("note-folder-arrow-dark");
    document.querySelectorAll(".small-note").forEach((small_note) => {
      small_note.classList.remove("small-note-dark");
    })
    if (folders_container) {
      folders_container.classList.remove("folders-container-dark");
      create_folder_button.classList.remove("create-folder-button-dark");
      folder_delete_buttons.forEach((folder_delete_button) => {
        folder_delete_button.classList.remove("folder-delete-dark");
      })
      details_board_container.classList.remove("details-board-container-dark");
      create_note_button_folder.classList.remove("create-note-button-folder-dark");
    }
    if (all_search_main) {
      all_search_main.classList.remove("all-search-main-dark");
    }
    }) 
    });
  }
};
darkModeCheckbox.addEventListener("change", function () {
  if (darkModeCheckbox.checked) {
    localStorage.setItem("darkMode", "true");
  } else {
    localStorage.setItem("darkMode", "false");
  }
  toggleDarkMode();
});
document.addEventListener("DOMContentLoaded", toggleDarkMode);
/*This code is for seeting up the dropdown menus in the nav bar for small screens */
/* This code is for setting up listeners for when the user clicks outside of any open menus causing them to close*/
window.addEventListener("click", function (event) {
  if (
    !profile_dropdown.contains(event.target) &&
    profile_dropdown.classList.contains("opened")
  ) {
    profile_dropdown.classList.remove("opened");
  }

  if (
    !menu_container.contains(event.target) &&
    menu_container.classList.contains("opened")
  ) {
    menu_container.classList.remove("opened");
  }
});
function displayProfile() {
  if (!profile_dropdown.classList.contains("opened")) {
    setTimeout(() => profile_dropdown.classList.add("opened"), 50);
    profile_icon.classList.add("active");
  } else {
    profile_dropdown.classList.remove("opened");
    profile_icon.classList.remove("active");
  }
}
function displayMenu() {
  if (!menu_container.classList.contains("opened")) {
    setTimeout(() => menu_container.classList.add("opened"), 50);
    menu_icon.classList.add("active");
  } else {
    menu_container.classList.remove("opened");
    menu_icon.classList.remove("active");
  }
}
/* Code to hide urgent icon on click*/
function noUrgentNotes() {
  //check to see if there are any notes rendered int he urgent note container//
  try {
    if (urgent_notes_container.childElementCount > 0) {
      urgent_icon.style.display = "flex";
    } else {
      urgent_icon.style.display = "none";
    }
  } catch (error) {
    return;
  }
}
noUrgentNotes();
function removeUrgentIcon() {
  urgent_icon.style.display = "none";
}
/* This code is for setting up the active class in the nav bar when the user enters a link*/
document.addEventListener("DOMContentLoaded", function () {
  menu_links.forEach(function (menu_links) {
    if (menu_links.href === window.location.href) {
      menu_links.classList.add("active");
    }
  });
  if (localStorage.getItem("darkMode") === "true") {
    darkModeCheckbox.checked = true;
  }
  if (localStorage.getItem("darkMode") === "false") {
    darkModeCheckbox.checked = false;
    bodyElement.classList.remove("body-dark-mode");
  }
});
function hideFolders() {
  folders_container.classList.toggle("closed");
  if (folders_arrow.style.transform === "rotate(0deg)") {
    folders_arrow.style.transform = "rotate(180deg)";
  } else {
    folders_arrow.style.transform = "rotate(0deg)";
  }
}
function handleResizeFolders() {
  if (window.innerWidth > 700) {
    if (folders_container.classList.contains('closed')) {
      folders_container.classList.remove('closed');
    }

  }
}
window.addEventListener("resize", handleResizeFolders);
function openNote() {
  const note_container = document.querySelector(".note-container");
  if (!note_container.classList.contains("opened")) {
    note_container.classList.add("opened");
  }
  delete_modal.style.display = "none";
}
function updateSelectedFolder() {
  // Get the selected option
  var selectedOption =
    note_folder_select.options[note_folder_select.selectedIndex];
  // Get the selected value
  var selectedValue = selectedOption.textContent;
  // Update the content of the paragraph element
  selected_folder_display.textContent = selectedValue;
}
function flipArrow() {
  note_folder_arrow.classList.toggle("flip");
}
function closeNote() {
  const note_container = document.querySelector(".note-container");
  if (note_container.classList.contains("opened")) {
    note_container.classList.remove("opened");
  }
  clearNoteData();
}
//CODE FOR SUBMISSION VERIFICATION GOES HERE (THERE IS MORE IN VIEWS)//
noteForm.addEventListener("submit", function (event) {
  if (exampleTimePickable.value && !input_date.value) {
    alert("Error: A note cannot have a time value without a date value.");
    event.preventDefault(); // Prevent form submission
    return;
  }
  if (create_or_update_note.value === "Create Note") {
    createNote();
    event.preventDefault(); // Prevent form submission
  } else if (create_or_update_note.value === "Update Note") {
    updateNote();
    event.preventDefault(); // Prevent form submission
  }
});
//=====================CODE FOR VIEWING NOTES GOES HERE (FUNCTIONS LIKE CLEARING INPUT DATA, CLOSING THE NOTE, COVERTING DATA FOR VIEWING)=====================//////
function viewNote(container) {
  // Get the note ID from the container's data attribute or any other appropriate source
  const noteId = container.dataset.noteId; // Assuming you have a data attribute named "data-note-id" on each note container

  // Fetch note details
  fetch("/get_note/" + noteId + "/")
    .then((response) => response.json())
    .then((data) => {
      // Process the received data
      // For example, update the modal with the note details
      updateNoteWithData(data);
    })
    .catch((error) => {
      console.error("Error fetching note details:", error);
    });
}

// Function to update note and open with note details
function updateNoteWithData(data) {
  // Update the modal with the note
  document.querySelector(".note-title").value = data.title;
  document.querySelector(".note-pin").checked = data.pinned;
  document.querySelector(".note-text").value = data.text;
  if (data.due_time) {
    document.querySelector(".time").value = convertToTimeInputFormat(
      data.due_time
    );
  }
  if (data.due_date) {
    document.querySelector(".date").value = convertDateToInputFormat(
      data.due_date
    );
  }
  if (data.folder) {
    document.querySelector(".selected-folder-display").textContent =
      data.folder;
    //loop through all options of note_folder_select and select the one that matches the folder name//
    for (let option of note_folder_select.options) {
      if (option.textContent === data.folder) {
        option.selected = true;
        break;
      }
    }
  }
  create_or_update_note.value = "Update Note";
  delete_button_icon.style.display = "block";
  noteId = data.id;
  openNote();
}
function clearNoteData() {
  delete_button_icon.style.display = "none";
  create_or_update_note.value = "Create Note";
  document.querySelector(".note-title").value = "";
  document.querySelector(".note-pin").checked = false;
  document.querySelector(".note-text").value = "";
  document.querySelector(".time").value = "";
  document.querySelector(".date").value = "";
  note_folder_select.options[0].selected = true; // Set to the first option (assuming it's the default option)
  updateSelectedFolder();
  closeDeleteModal();
  // Update the selected folder display
}
function convertDateToInputFormat(dateString) {
  const originalDateString = dateString;
  const [year, month, day] = originalDateString.split("-");
  const date = new Date(year, month - 1, day);
  const formattedMonth = String(date.getMonth() + 1);
  const formattedDay = String(date.getDate());
  const formattedDateString = `${formattedMonth}/${formattedDay}/${year}`;
  return formattedDateString;
}
function convertToTimeInputFormat(timeString) {
  // Original time string in the format 'HH:mm:ss'
  var originalTimeStr = timeString;

  // Parse the time string into a Date object
  var timeObj = new Date("1970-01-01T" + originalTimeStr);

  // Get hours and minutes separately
  var hours = timeObj.getHours();
  var minutes = timeObj.getMinutes();

  // Determine AM/PM
  var meridiem = hours >= 12 ? "pm" : "am";

  // Adjust hours for 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;
  var formattedTime =
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    meridiem;
  return formattedTime;
}
////////////////////--------MODALS GO HERE-------------------//////////////////////////
const logout_modal = document.querySelector(".logout-modal");
const change_password_modal = document.querySelector(".change-password-modal");
const delete_user_modal = document.querySelector(".delete-user-modal");
const email_modal = document.querySelector(".email-modal");
function clickOutsideModalHandler(modal) {
  document.addEventListener("click", function (event) {
    if (
      !modal.contains(event.target) &&
      !profile_dropdown.contains(event.target) &&
      !create_folder_button.contains(event.target)
    ) {
      modal.style.display = "none";
      document.removeEventListener("click", clickOutsideModalHandler);
    }
  });
}
function openModal(modal) {
  document.querySelectorAll(".modal").forEach(function (modalElement) {
    modalElement.style.display = "none";
  });
  modal.style.display = "flex";
  clickOutsideModalHandler(modal); // Attach listener when opening modal
}
function openCreateFolderModal() {
  const create_folder_modal = document.querySelector(".create-folder-modal");
  if (create_folder_modal.style.display === "flex") {
    create_folder_modal.style.display = "none";
  } else {
    create_folder_modal.style.display = "flex";
  }
}
function closeModal(modal) {
  modal.style.display = "none";
}
// Open modals

// Close modals
function closeModals() {
  closeModal(logout_modal);
  closeModal(change_password_modal);
  closeModal(delete_user_modal);
  closeModal(email_modal);
}
//Code for delete node modal//
function openDeleteModal() {
  delete_modal.style.display = "flex";
}
function closeDeleteModal() {
  delete_modal.style.display = "none";
}
//////////////////////---------AJAX REQUEST  START HERE ---------------------///////////////
function getCookie(name) {
  const cookieValue = document.cookie.match(
    "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
  );
  return cookieValue ? cookieValue.pop() : "";
}
function createFolder(event) {
  event.preventDefault(event);
  const csrftoken = getCookie("csrftoken");
  fetch("create_folder", {
    method: "POST",
    headers: {
      "X-CSRFToken": csrftoken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: document.querySelector(".folder-name-input").value,
    }),
  })
    .then((response) => response.json()) // Parse the JSON response from the server
    .then((data) => {
      if (data.error) {
        alert("Cannot create a folder with the same name");
        return;
      }
      updateFolderList(data);
      openCreateFolderModal();
    });
}
function createNote() {
  const csrftoken = getCookie("csrftoken");
  fetch("create_note", {
    method: "POST",
    headers: {
      "X-CSRFToken": csrftoken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: document.querySelector(".note-title").value,
      text: document.querySelector(".note-text").value,
      due_date: document.querySelector(".date").value,
      due_time: document.querySelector(".time").value,
      pinned: document.querySelector(".note-pin").checked,
      folder: document.querySelector(".note-folder-select").value,
    }),
  })
    .then((response) => response.json()) // Parse the JSON response from the server
    .then((data) => {
      if (
        data &&
        data.containers_to_update.includes("update_urgent") &&
        document.body.querySelector(".urgent-notes")
      ) {
        updateUrgentNotes(data);
      }
      if (
        data &&
        data.containers_to_update.includes("update_pinned") &&
        document.body.querySelector(".pinned-notes")
      ) {
        updatePinnedtNotes(data);
      }

      if (
        data &&
        data.folder &&
        document.body.querySelector(".folder-recent-notes") &&
        data.folder === document.querySelector(".folder-name").textContent
      ) {
        addFolderAllNotes(data);
        if (data.pinned === true) {
          addFolderPinnedNotes(data);
        }
      }
      if (document.body.querySelector(".recent-notes")) {
        updateRecentNotes(data);
      }
    });
  closeNote();
}
function updateNote() {
  const csrftoken = getCookie("csrftoken");
  fetch("update_note/" + noteId + "/", {
    method: "POST",
    headers: {
      "X-CSRFToken": csrftoken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: document.querySelector(".note-title").value,
      text: document.querySelector(".note-text").value,
      due_date: document.querySelector(".date").value,
      due_time: document.querySelector(".time").value,
      pinned: document.querySelector(".note-pin").checked,
      folder: document.querySelector(".note-folder-select").value,
    }),
  })
    .then((response) => response.json()) // Parse the JSON response from the server
    .then((data) => {
      // Assuming the server returns the deleted note's ID in the 'id' field of the JSON response
      // Call another function and pass the deleted note's ID as a parameter
      updateNoteUI(data);
    })
    .catch((error) => {
      console.error("Error deleting note:", error);
    });
  closeNote();
}
//-------------------AJAX FOR MODALS---------------------//
function deleteNote() {
  const csrftoken = getCookie("csrftoken");
  fetch("delete_note/" + noteId + "/", {
    method: "POST",
    headers: {
      "X-CSRFToken": csrftoken,
    },
  })
    .then((response) => response.json()) // Parse the JSON response from the server
    .then((data) => {
      // Assuming the server returns the deleted note's ID in the 'id' field of the JSON response
      const deletedNoteId = data.id;

      // Call another function and pass the deleted note's ID as a parameter
      deleteNoteUI(deletedNoteId);
    })
    .catch((error) => {
      console.error("Error deleting note:", error);
    });

  closeNote();
}
function changePassword(event) {
  event.preventDefault(); // Prevent default form submission behavior
  const csrftoken = getCookie("csrftoken");
  // Get form data
  const form = document.querySelector(".change-password-form");
  oldPassword = form.querySelector(".oldPassword").value;
  newPassword = form.querySelector(".newPassword").value;
  confirmPassword = form.querySelector(".confirmPassword").value;
  // Make AJAX request
  fetch("change_password", {
    method: "POST",
    headers: {
      "X-CSRFToken": csrftoken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    }),
  })
    .then((response) => {
      if (response.ok) {
        // Handle successful password change
        alert(
          `Password changed successfully from ${oldPassword} to ${newPassword}`
        );
      } else {
        // Handle error response
        response.json().then((data) => {
          if (data && data.error) {
            // Access the error message from the JSON response
            const errorMessage = data.error;
            alert("Failed to change password: " + errorMessage);
            console.error("Failed to change password:", errorMessage);
          } else {
            // Handle case when error message is not provided
            alert("Failed to change password");
            console.error("Failed to change password:", response.statusText);
          }
        });
      }
    })
    .catch((error) => {
      alert(
        "An error occurred while changing your password. Please try again later."
      );
      // Handle network errors or other fetch-related errors
      console.error("Fetch error:", error);
    });
  closeModal(document.querySelector(".change-password-modal"));
}
function deleteUser(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const csrftoken = getCookie("csrftoken");
  fetch("delete_user", {
    method: "POST",
    headers: {
      "X-CSRFToken": csrftoken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: document.querySelector("#password").value,
    }),
  }).then((response) => {
    if (response.ok) {
      // Handle successful password change
      alert(`Account deleted successfully`);
      window.location.reload();
    } else {
      // Handle error response
      response.json().then((data) => {
        console.log(data);
        if (data && data.error) {
          // Access the error message from the JSON response
          const errorMessage = data.error;
          alert("Failed to delete user: " + errorMessage);
          console.error("Failed to delete user:", errorMessage);
        } else {
          // Handle case when error message is not provided
          alert("Failed to delete user");
          console.error("Failed to delete user", response.statusText);
        }
      });
    }
  });
  closeModal(document.querySelector(".delete-user-modal"));
}
function logoutUser(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const csrftoken = getCookie("csrftoken");
  fetch("logout", {
    method: "POST",
    headers: {
      "X-CSRFToken": csrftoken,
    },
  }).then((response) => {
    // Handle the response, such as checking for a successful logout
    if (response.ok) {
      // Redirect to the login page after successful logout
      window.location.href = "/accounts/login"; // Replace '/accounts/login' with your actual login page URL
    }
  });
}
function addEmail(event) {
  event.preventDefault();
  const csrftoken = getCookie("csrftoken");
  fetch("add_email", {
    method: "POST",
    headers: {
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify({
      email: document.querySelector(".email").value,
    }),
  }).then((response) => {
    if (response.ok) {
      closeModal(document.querySelector(".email-modal"));
    } else {
      // Handle error response
      response.json().then((data) => {
        if (data && data.error) {
          // Access the error message from the JSON response
          const errorMessage = data.error;
          alert("Failed to add email: " + errorMessage);
          console.error("Failed to add email:", errorMessage);
        } else {
          // Handle case when error message is not provided
          alert("Failed to add email");
          console.error("Failed to add email:", response.statusText);
        }
      });
    }
  });
}

////////////////////-------------------UPDATE UI FIELDS UPON AJAX REQUEST GOES HERE-------------------////////////

/////////////////////////CREATING NOTES FOR THE DASHBOARD AND FOLDER/////////////////
function htmlNote(note) {
  const div = document.createElement("div");
  div.classList.add("small-note");
  div.setAttribute("data-note-id", note.id);
  div.onclick = () => viewNote(div);
  div.innerHTML = `
    <p class="small-note-title">${note.title}</p>
    <p class="small-note-date">${note.created}</p>
  `;
  return div;
  ewwwwwwwwwwwwwwwwwwwdffffffr;
}
function updateUrgentNotes(note) {
  //append an html div into the update_soon div
  const urgent_notes = document.querySelector(".urgent-notes");
  note.created = convertDatetoText(note.created);
  const div = htmlNote(note);
  note.due_date = convertDatetoText(note.due_date);
  div.querySelector(".small-note-date").textContent = "Due:" + note.due_date;
  urgent_notes.prepend(div);
}
function updatePinnedtNotes(note) {
  const pinned_notes = document.querySelector(".pinned-notes");
  note.created = convertDatetoText(note.created);
  const div = htmlNote(note);
  pinned_notes.prepend(div);
}
function updateRecentNotes(note) {
  const recent_notes = document.querySelector(".recent-notes");
  console.log(recent_notes);
  note.created = convertDatetoText(note.created);
  const div = htmlNote(note);
  console.log(div);
  recent_notes.prepend(div);
}
function addFolderAllNotes(note) {
  console.log(note);
  const folder_notes = document.querySelector(".folder-recent-notes");
  note.created = convertDatetoText(note.created);
  const div = htmlNote(note);
  folder_notes.prepend(div);
}
function addFolderPinnedNotes(note) {
  console.log(note);
  const folder_pinned_notes = document.querySelector(".folder-pinned-notes");
  note.created = convertDatetoText(note.created);
  const div = htmlNote(note);
  folder_pinned_notes.prepend(div);
}
function updateFolderList(folder) {
  const folderBoard = document.querySelector(".folder-board");
  const anchorTag = document.createElement("a");
  anchorTag.classList.add("folder-link");
  anchorTag.setAttribute("onclick", `openFolder('${folder.id}')`);
  anchorTag.textContent = folder.name;
  folderBoard.prepend(anchorTag);
  option = document.createElement("option");
  option.value = folder.id;
  option.text = folder.name;
  note_folder_select.appendChild(option);
}
function updateFolderAllNotes(notes) {
  const folder_recent_notes = document.querySelector(".folder-recent-notes");
  folder_recent_notes.innerHTML = "";
  for (let note of notes) {
    note.created = convertDatetoText(note.created);
    note = htmlNote(note);
    folder_recent_notes.append(note);
  }
}
function updateFolderPinnedNotes(notes) {
  const folder_pinned_notes = document.querySelector(".folder-pinned-notes");
  folder_pinned_notes.innerHTML = "";
  for (let note of notes) {
    note.created = convertDatetoText(note.created);
    note = htmlNote(note);
    folder_pinned_notes.append(note);
  }
}
function switchFolderNotes(x) {
  if (x === 1) {
    folder_recent_notes.style.display = "flex";
    folder_pinned_notes.style.display = "none";
  } else if (x === 2) {
    folder_pinned_notes.style.display = "flex";
    folder_recent_notes.style.display = "none";
  }
}
/////////////////DELETING NOTES AND UPDATING THE UI FIELDS HERE////////////////////
function deleteNoteUI(note) {
  document.body
    .querySelectorAll("[data-note-id='" + note + "']")
    .forEach((div) => div.remove());
}
function convertDatetoText(date) {
  const dateObj = new Date(date);
  const options = {
    month: "short",
    day: "numeric",
    ordinal: "numeric",
    year: "numeric",
  };
  return dateObj.toLocaleString("en-US", options);
}
function updateNoteUI(note) {
  note.created = convertDatetoText(note.created);
  document.body
    .querySelectorAll("[data-note-id='" + note.id + "']")
    .forEach((div) => (div.innerHTML = htmlNote(note).innerHTML));
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function updateFolderName(data) {
  document.querySelector(".folder-name").textContent = data;
}
function openFolder(id) {
  fetch("open_folder/" + id + "/")
    .then((response) => response.json())
    .then((data) => {
      updateFolderAllNotes(data.all_notes);
      updateFolderPinnedNotes(data.pinned_notes);
      updateFolderName(data.folder_name);
    });
}
function openDeleteFolderModal(id, name, modal, open_modal_button) {
  console.log(id, name, modal);
  modal.style.display = "flex";
  modal.dataset.folderId = id;
  modal.dataset.folderName = name;
  delete_folder_text.textContent = "Delete " + name + " folder?";
}
function deleteFolder() {
  folder_id = delete_folder_modal.dataset.folderId;
  fetch("delete_folder/" + folder_id + "/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      deleteFolderList(data);
      delete_folder_modal.style.display = "none";
    });
}
function deleteFolderList(data) {
  console.log(data, "--------------------");
  var deletedFolderId = data.deletedFolderId;
  var folderContainers = document.querySelectorAll(".folder-container");
  folderContainers.forEach(function (folderContainer) {
    // Get the data-folder-id attribute of the current folder container
    var folderId = parseInt(folderContainer.dataset.folderId);
    // Check if the data-folder-id matches the deletedFolderId
    if (folderId === deletedFolderId) {
      // Remove the folder container from the DOM
      folderContainer.remove();
    }
  });
}
////////////////////------------------------SEARCHING RELATED CODE---------------------------/////////////////
var all_search_form = document.querySelector(".search-all");
var search_all_notes = document.querySelector(".search-result-container");
var currently_searching = document.querySelector(".currently-searching-span");
var folder_search_form = document.querySelector(".search-folder");
var folder_name = document.querySelector(".folder-name");
var currently_searching_folder = document.querySelector(
  ".currently-searching-folder-span"
);
var search_dash = document.querySelector(".search-dash");
var folder_all_notes = document.querySelector(".folder-recent-notes");

if (all_search_form) {
  all_search_form.addEventListener("submit", function (event) {
    event.preventDefault();
    var search = document.querySelector(".search-input-all").value;
    currently_searching.textContent = search
      ? search
      : "Searching All Notes..."; // Set 'all' if search is empty
    var url = "/search_all/" + encodeURIComponent(search) + "/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        updateSearchNotes(data);
      });
  });
}
if (search_dash) {
  search_dash.addEventListener("submit", function (event) {
    event.preventDefault();
    var search = document.querySelector(".search-input-dash").value;
    if (!search) {
      search = " ";
    }
    window.location.href =
      "/search_all_from_dash/" + encodeURIComponent(search) + "/";
  });
}
function updateSearchNotes(data) {
  search_all_notes.innerHTML = "";
  for (let note of data.all_notes) {
    note.created = convertDatetoText(note.created);
    note = htmlNote(note);
    search_all_notes.append(note);
  }
}
if (folder_search_form) {
  folder_search_form.addEventListener("submit", function (event) {
    event.preventDefault();
    var search = document.querySelector(".folder-search-input").value;
    currently_searching_folder.textContent = search
      ? search
      : "Showing all notes in " + current_folder + " folder"; // Set 'all' if search is empty
    current_folder = folder_name.textContent;
    if (!current_folder) {
      alert("Please select a folder to search in first");
      return;
    }
    console.log(current_folder, search);
    var url =
      "search_folder/?folder=" +
      encodeURIComponent(current_folder) +
      "&search=" +
      encodeURIComponent(search);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateFolderSearchNotes(data);
      });
  });
}
function updateFolderSearchNotes(notes) {
  folder_all_notes.innerHTML = "";
  console.log(notes);
  for (let note of notes.notes) {
    note.created = convertDatetoText(note.created);
    note = htmlNote(note);
    folder_all_notes.append(note);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  if (document.body.contains(document.querySelector(".from_dash_activate"))) {
    document.querySelector(".from_dash_activate").click();
  }
});
function fromDash() {
  search = document.querySelector(".from_dash_activate").textContent;
  currently_searching.textContent = search ? search : "Searching All Notes..."; // Set 'all' if search is empty
  var url = "/search_all/" + encodeURIComponent(search) + "/";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      updateSearchNotes(data);
    });
}
