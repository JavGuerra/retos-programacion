const elDialog = el("#error");
const elErrMsg = el("#errMsg");
const btnOK = el("#ok");

btnOK.onclick = closeDialog;

/**
 * Obtains a requested element
 * @param {string} el element to be obtained
 * @returns requested element
 */
function el(el) { return document.querySelector(el); }

/**
 * Creates a new element inside a parent element with or without content
 * @param {node} parent within the element to be created
 * @param {string} element to create
 * @param {string} content to contain the new element (optional)
 * @returns the appended element
 */
function createEl(parent, element, content = null) {
  const newEl = document.createElement(element);
  if (content) newEl.innerHTML = content;
  return parent.appendChild(newEl);
}

/**
 * Changes the disabled status of a given button
 * @param {node} button to change
 * @param {Boolean} status enabled/disabled
 */
function setInactiveBtn(button, status) {
  button.disabled = status;
  button.setAttribute("aria-disabled", status);
}

/**
 * Opens the modal window with a message
 * @param {String} mensaje to show
 */
function openDialog(message) {
  elErrMsg.innerHTML = message;
  elDialog.showModal();
}

/**
* Close the modal window
*/
function closeDialog() { elDialog.close(); }

/**
 * Gets a random integer within the range.
 * @param {Number} min value of range
 * @param {Number} max value if range
 * @returns integer
 */
function getRndInt(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

/**
 * Mixes the elements of an Array according to the Fisher-Yates method
 * @param {Array} arr
 * @returns array
 */
function fisherYatesShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }
  return arr;
}

export { el, createEl, setInactiveBtn, openDialog, getRndInt, fisherYatesShuffle };
