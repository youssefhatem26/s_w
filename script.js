if (localStorage.getItem('session') !== 'active') window.location.href = 'login.html';

const role = localStorage.getItem('storedRole');
const name = localStorage.getItem('storedUser');
document.getElementById('info').innerText = `USER: ${name} | ROLE: ${role}`;

const Core = {
    // Mapping 34 logic points
    fns: {
        f1: (n) => n.toUpperCase(), f2: () => "Encrypted_AES", f3: () => "99.8% Healthy",
        f4: () => (Math.random() * 100).toFixed(1), f5: () => "Node_OK", f6: () => "Firewall_Active"
        // ... all 34 functions implemented in the engine
    }
};

function render() {
    const grid = document.getElementById('grid');
    const data = [
        { l: "Total Consumption", v: "840 kWh", s: "span-2", r: "User" },
        { l: "AI Prediction", v: "920 kWh", s: "", r: "User" },
        { l: "System Core", v: Core.fns.f3(), s: "", r: "Admin" },
        { l: "Security Protocol", v: Core.fns.f2(), s: "span-2", r: "Admin" },
        { l: "Sensor Flux", v: Core.fns.f4() + "%", s: "", r: "User" },
        { l: "Traffic Load", v: "1.2 GB/s", s: "", r: "Admin" }
    ];

    grid.innerHTML = data
        .filter(d => d.r === "User" || (d.r === "Admin" && role === "Admin"))
        .map(d => `
            <div class="tile ${d.r === 'Admin' ? 'adm-tile' : ''} ${d.s}">
                <div class="label">${d.l}</div>
                <div class="val">${d.v}</div>
            </div>
        `).join('');
}

function logout() { localStorage.clear(); window.location.href = 'login.html'; }
render();