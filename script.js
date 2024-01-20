// vncViewer.js

// Function to create a draggable iframe with noVNC viewer
function createDraggableVNCViewer() {
    // Create a new div element
    var containerDiv = document.createElement('div');
    containerDiv.style.borderTop = '5px solid #ccc';
    containerDiv.style.width = '400px';
    containerDiv.style.height = '300px';
    containerDiv.style.position = 'fixed';
    containerDiv.style.overflowX = 'auto';
    containerDiv.style.overflowY = 'auto';
    containerDiv.style.resize = 'both';
    containerDiv.style.top = '50px';
    containerDiv.style.left = '50px';
    containerDiv.style.zIndex = '9999';

    var iframe = document.createElement('iframe');
    iframe.src = 'https://cleanly-devoted-adder.ngrok-free.app/vnc.html';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = 'none';
    iframe.setAttribute('draggable', 'true');

    // Append the iframe to the new div element
    containerDiv.appendChild(iframe);

    // Append the new div element to the body
    document.body.appendChild(containerDiv);

    containerDiv.addEventListener('mousedown', function (e) {
        e.preventDefault();
        var offsetX = e.clientX - containerDiv.getBoundingClientRect().left;
        var offsetY = e.clientY - containerDiv.getBoundingClientRect().top;

        function moveContainerDiv(e) {
            containerDiv.style.left = (e.clientX - offsetX) + 'px';
            containerDiv.style.top = (e.clientY - offsetY) + 'px';
        }

        function stopMoving() {
            window.removeEventListener('mousemove', moveContainerDiv);
            window.removeEventListener('mouseup', stopMoving);
        }

        window.addEventListener('mousemove', moveContainerDiv);
        window.addEventListener('mouseup', stopMoving);
    });

    // Function to toggle iframe visibility on key combination (Ctrl + Shift + H)
    function toggleVisibility(event) {
        if (event.ctrlKey && event.shiftKey && event.key === 'H') {
            iframe.style.display = (iframe.style.display === 'none') ? 'block' : 'none';
        }
    }

    // Add event listener to the document for keypress events
    document.addEventListener('keydown', toggleVisibility);
}

// Call the function to create the draggable iframe when the script is loaded
createDraggableVNCViewer();
