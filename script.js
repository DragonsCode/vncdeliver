// vncViewer.js

// Function to create a draggable iframe with noVNC viewer
function createDraggableVNCViewer() {
    // Create a new div element
    var containerDiv = document.createElement('div');
    containerDiv.style.position = 'relative';
    containerDiv.style.overflowX = 'auto';
    containerDiv.style.overflowY = 'auto';
    containerDiv.style.resize = 'both';
    containerDiv.style.top = '50px';
    containerDiv.style.left = '50px';
    containerDiv.style.zIndex = '9999';
    containerDiv.style.cursor = 'move';

    var iframe = document.createElement('iframe');
    iframe.src = 'https://cleanly-devoted-adder.ngrok-free.app/vnc.html';
    iframe.width = '400';
    iframe.height = '300';
    iframe.style.border = 'none';
    iframe.setAttribute('draggable', 'true');

    // Append the iframe to the new div element
    containerDiv.appendChild(iframe);

    // Append the new div element to the body
    document.body.appendChild(containerDiv);

    // Make the iframe draggable
    iframe.addEventListener('mousedown', function (e) {
        e.preventDefault();
        var offsetX = e.clientX - iframe.getBoundingClientRect().left;
        var offsetY = e.clientY - iframe.getBoundingClientRect().top;

        function moveIframe(e) {
            iframe.style.left = (e.clientX - offsetX) + 'px';
            iframe.style.top = (e.clientY - offsetY) + 'px';
        }

        function stopMoving() {
            window.removeEventListener('mousemove', moveIframe);
            window.removeEventListener('mouseup', stopMoving);
        }

        window.addEventListener('mousemove', moveIframe);
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
