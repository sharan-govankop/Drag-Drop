// Store the dragged item
let draggedItem = null;

// Store the initial state of the first container
const initialContainerState = document.getElementById('drag-container').innerHTML;

// Drag event handler
function drag(event) {
  draggedItem = event.target;
  event.dataTransfer.setData('text/plain', null);
  event.target.style.opacity = '0.5'; // Change opacity while dragging
  event.target.classList.add('dragging');
}

// Allow drop event handler
function allowDrop(event) {
  event.preventDefault();
}

// Drop event handler
function drop(event) {
  event.preventDefault();
  draggedItem.style.opacity = '1'; // Reset opacity
  draggedItem.classList.remove('dragging'); 

  // Append the dragged item to the drop container
  const dropContainer = event.target;
  dropContainer.appendChild(draggedItem);

  // Display success message
  const successMessage = document.querySelector('.success-message');
  successMessage.style.display = 'block';

  // Reset draggedItem
  draggedItem = null;
}

// Reset button event handler
function reset() {
  // Clear the drop container
  const dropContainer = document.querySelector('.drop-container');
  dropContainer.innerHTML = '<p><strong>Drop Here</strong></p>';

  // Reset success message
  const successMessage = document.querySelector('.success-message');
  successMessage.style.display = 'none';

  // Restore the initial state of the first container
  const dragContainer = document.getElementById('drag-container');
  dragContainer.innerHTML = initialContainerState;
}
