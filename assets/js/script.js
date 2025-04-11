function toggleWindow(id) {
    const win = document.getElementById(id);
    const taskbar = document.getElementById('taskbarButtons');
    const taskButton = taskbar.querySelector(`[data-window='${id}']`);
    const isVisible = win.style.display === 'block';

    // Hide start menu on open
    if (!isVisible) toggleStartMenu(false);

    win.style.display = isVisible ? 'none' : 'block';

    if (!taskButton && !isVisible) {
        const btn = document.createElement('div');
        btn.className = 'taskbar-button';
        btn.setAttribute('data-window', id);

        const icon = document.createElement('img');
        if (id === 'cvWindow') icon.src = '/assets/img/comp.png';
        else if (id === 'galleryWindow') icon.src = '/assets/img/cert.png';
        else if (id === 'aboutWindow') icon.src = '/assets/img/about2.png';
        else if (id === 'internetWindow') icon.src = '/assets/img/internet.png';
        else if (id === 'shortly') icon.src = '/assets/img/shortly.png';
        else if (id === 'adcare') icon.src = '/assets/img/adcare.png';
        else if (id === 'wmp') icon.src = '/assets/img/wmp.png';
        else if (id === 'emailwindow') icon.src = '/assets/img/email.png';

        const label = document.createElement('span');
        label.textContent = win.querySelector('.title-bar-text').innerText;

        btn.appendChild(icon);
        btn.appendChild(label);
        btn.onclick = () => toggleWindow(id);
        taskbar.appendChild(btn);

        const vid = win.querySelector('video');
        if (vid) {
            vid.play();
        }
    }
}


function minimizeWindow(id) {
    document.getElementById(id).style.display = 'none';
}

function resizeWindow(id) {
    const win = document.getElementById(id);
    if (win.classList.contains('fullscreen')) {
        win.style.width = '300px';
        win.style.height = '300px';
        win.style.top = '100px';
        win.style.left = '200px';
        win.classList.remove('fullscreen');
    } else {
        win.style.top = '0';
        win.style.left = '0';
        win.style.width = '100vw';
        win.style.height = '96vh';
        win.classList.add('fullscreen');
    }
}

function closeWindow(id) {
    const win = document.getElementById(id);
    win.style.display = 'none';
    const taskButton = document.querySelector(`[data-window='${id}']`);
    if (taskButton) taskButton.remove();
}

function toggleStartMenu(forceClose = null) {
    const menu = document.getElementById('startMenu');
    if (forceClose === true) {
        menu.style.display = 'none';
    } else if (forceClose === false) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    }
}


document.querySelectorAll('.draggable').forEach(el => {
    let isDragging = false;
    let offsetX, offsetY;

    el.querySelector('.title-bar').addEventListener('mousedown', e => {
        e.preventDefault();
        isDragging = true;
        offsetX = e.clientX - el.offsetLeft;
        offsetY = e.clientY - el.offsetTop;
        el.style.zIndex = 1000;
    });

    document.addEventListener('mousemove', e => {
        if (!isDragging) return;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const elementWidth = el.offsetWidth;
        const elementHeight = el.offsetHeight;

        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;

        // Clamp within viewport bounds
        newLeft = Math.max(0, Math.min(windowWidth - elementWidth, newLeft));
        newTop = Math.max(0, Math.min(windowHeight - elementHeight, newTop));

        el.style.left = `${newLeft}px`;
        el.style.top = `${newTop}px`;
    });


    document.addEventListener('mouseup', () => isDragging = false);
});

document.querySelectorAll('.window').forEach(win => {
    const handles = [
        ['resize-top', 'ns-resize'],
        ['resize-bottom', 'ns-resize'],
        ['resize-left', 'ew-resize'],
        ['resize-right', 'ew-resize'],
        ['resize-corner', 'nwse-resize']
    ];

    handles.forEach(([className, cursor]) => {
        const handle = document.createElement('div');
        handle.className = `resize-handle ${className}`;
        // handle.style.cursor = cursor;
        win.appendChild(handle);

        handle.addEventListener('mousedown', e => {
            e.preventDefault();
            const startX = e.clientX;
            const startY = e.clientY;
            const startWidth = win.offsetWidth;
            const startHeight = win.offsetHeight;
            const startTop = win.offsetTop;
            const startLeft = win.offsetLeft;

            function onMouseMove(ev) {
                if (className === 'resize-top') {
                    const delta = ev.clientY - startY;
                    win.style.top = `${startTop + delta}px`;
                    win.style.height = `${startHeight - delta}px`;
                } else if (className === 'resize-bottom') {
                    win.style.height = `${startHeight + (ev.clientY - startY)}px`;
                } else if (className === 'resize-left') {
                    const delta = ev.clientX - startX;
                    win.style.left = `${startLeft + delta}px`;
                    win.style.width = `${startWidth - delta}px`;
                } else if (className === 'resize-right') {
                    win.style.width = `${startWidth + (ev.clientX - startX)}px`;
                } else if (className === 'resize-corner') {
                    win.style.width = `${startWidth + (ev.clientX - startX)}px`;
                    win.style.height = `${startHeight + (ev.clientY - startY)}px`;
                }
            }

            function onMouseUp() {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    });
});

document.addEventListener('click', function (e) {
    const startMenu = document.getElementById('startMenu');
    const startButton = document.querySelector('.xp-button');

    if (!startMenu.contains(e.target) && !startButton.contains(e.target)) {
        startMenu.style.display = 'none';
    }
});

let z = 10;
document.addEventListener('click', function (e) {
    if (e.target.closest('.window')) {
        z++;
        e.target.closest('.window').style.zIndex = z;
    }
});

let offsetX, offsetY;

document.addEventListener('touchstart', function (e) {
    const header = e.target.closest('.window .title-bar');
    if (!header) return;

    const win = header.closest('.window');
    const touch = e.touches[0];
    const rect = win.getBoundingClientRect();
    const offsetX = touch.clientX - rect.left;
    const offsetY = touch.clientY - rect.top;

    function move(touchEvent) {
        const t = touchEvent.touches[0];
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const elementWidth = win.offsetWidth;
        const elementHeight = win.offsetHeight;

        let newLeft = t.clientX - offsetX;
        let newTop = t.clientY - offsetY;

        // Clamp to stay within viewport
        newLeft = Math.max(0, Math.min(windowWidth - elementWidth, newLeft));
        newTop = Math.max(0, Math.min(windowHeight - elementHeight, newTop));

        win.style.left = `${newLeft}px`;
        win.style.top = `${newTop}px`;
    }

    function end() {
        document.removeEventListener('touchmove', move);
        document.removeEventListener('touchend', end);
    }

    document.addEventListener('touchmove', move);
    document.addEventListener('touchend', end);
});


const fakeCursor = document.getElementById('fake-cursor');

function showCursor(e) {
    fakeCursor.style.left = e.touches[0].clientX + 'px';
    fakeCursor.style.top = e.touches[0].clientY + 'px';
    fakeCursor.style.display = 'block';
}

function moveCursor(e) {
    fakeCursor.style.left = e.touches[0].clientX + 'px';
    fakeCursor.style.top = e.touches[0].clientY + 'px';
}

function hideCursor() {
    fakeCursor.style.display = 'none';
}

document.addEventListener('touchstart', showCursor);
document.addEventListener('touchmove', moveCursor);
document.addEventListener('touchend', hideCursor);

// const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
// const desktopFrame = document.getElementById('desktopFrame');
// const mobileFrame = document.getElementById('mobileFrame');

// if (isMobile) {
//     desktopFrame.style.display = 'none';
//     mobileFrame.style.display = 'block';
// }

document.querySelectorAll('#galleryWindow [role="tablist"] button').forEach(button => {
    button.addEventListener('click', () => {
        const tablist = button.parentElement;
        const windowBody = tablist.parentElement;
        const tabs = tablist.querySelectorAll('button');
        const panels = windowBody.querySelectorAll('[role="tabpanel"]');

        // Deselect all tabs and hide all panels
        tabs.forEach(tab => tab.setAttribute('aria-selected', 'false'));
        panels.forEach(panel => panel.hidden = true);

        // Select the clicked tab and show the corresponding panel
        button.setAttribute('aria-selected', 'true');
        const panelId = button.getAttribute('aria-controls');
        const panel = windowBody.querySelector(`#${panelId}`);
        if (panel) panel.hidden = false;
    });
});

function updateClock() {
    const clock = document.getElementById('xp-clock');
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12

    clock.textContent = `${hours}:${minutes} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock(); // initial call

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('boot-screen').style.display = 'none';
    }, 4000); // Show boot screen for 4 seconds
});

function shutdownXP() {
    document.getElementById('shutdown-screen').style.display = 'block';
}

// Boot on double click
document.getElementById('shutdown-screen').addEventListener('dblclick', () => {
    // Show booting screen again
    showBootScreen();
});

function showBootScreen() {
    const boot = document.getElementById('boot-screen');
    const shutdown = document.getElementById('shutdown-screen');

    shutdown.style.display = 'none';
    boot.style.display = 'flex';

    setTimeout(() => {
        boot.style.display = 'none';
    }, 4000); // match your boot animation duration
}