// vncViewer.js

// Function to create a draggable iframe with noVNC viewer
function createDraggableVNCViewer() {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://cleanly-devoted-adder.ngrok-free.app/vnc.html';
    iframe.width = '400';
    iframe.height = '300';
    iframe.style.position = 'fixed';
    iframe.style.top = '50px';
    iframe.style.left = '50px';
    iframe.style.border = '5px solid #ccc';
    iframe.style.borderRadius = '5px';
    iframe.style.resize = 'both';
    iframe.style.zIndex = '9999';
    iframe.setAttribute('draggable', 'true');

    document.body.appendChild(iframe);

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
