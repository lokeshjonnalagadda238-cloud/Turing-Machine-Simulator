const MACHINES = {
    unary_add: {
        name: 'Unary Addition',
        defaultInput: 'aaa+aa',
        startState: 'q0',
        transitions: [
            { from: 'q0', read: 'a', write: 'a', dir: 'R', to: 'q0' },
            { from: 'q0', read: '+', write: '_', dir: 'R', to: 'q1' },
            { from: 'q1', read: 'a', write: 'a', dir: 'R', to: 'q1' },
            { from: 'q1', read: '_', write: '_', dir: 'L', to: 'q2' },
            { from: 'q2', read: 'a', write: 'a', dir: 'R', to: 'qA' },
            { from: 'q2', read: '_', write: 'a', dir: 'R', to: 'qA' },
            { from: 'q0', read: '_', write: '_', dir: 'R', to: 'qA' },
        ]
    },
    palindrome: {
        name: 'Palindrome Checker',
        defaultInput: 'abba',
        startState: 'q0',
        transitions: [
            { from: 'q0', read: 'a', write: 'X', dir: 'R', to: 'qa' },
            { from: 'q0', read: 'b', write: 'X', dir: 'R', to: 'qb' },
            { from: 'q0', read: 'X', write: 'X', dir: 'R', to: 'qA' },
            { from: 'q0', read: '_', write: '_', dir: 'R', to: 'qA' },
            { from: 'qa', read: 'a', write: 'a', dir: 'R', to: 'qa' },
            { from: 'qa', read: 'b', write: 'b', dir: 'R', to: 'qa' },
            { from: 'qa', read: 'X', write: 'X', dir: 'L', to: 'q1' },
            { from: 'qa', read: '_', write: '_', dir: 'L', to: 'q1' },
            { from: 'qb', read: 'a', write: 'a', dir: 'R', to: 'qb' },
            { from: 'qb', read: 'b', write: 'b', dir: 'R', to: 'qb' },
            { from: 'qb', read: 'X', write: 'X', dir: 'L', to: 'q2' },
            { from: 'qb', read: '_', write: '_', dir: 'L', to: 'q2' },
            { from: 'q1', read: 'a', write: 'X', dir: 'L', to: 'q0' },
            { from: 'q1', read: 'b', write: 'b', dir: 'L', to: 'qR' },
            { from: 'q1', read: 'X', write: 'X', dir: 'L', to: 'q0' },
            { from: 'q2', read: 'b', write: 'X', dir: 'L', to: 'q0' },
            { from: 'q2', read: 'a', write: 'a', dir: 'L', to: 'qR' },
            { from: 'q2', read: 'X', write: 'X', dir: 'L', to: 'q0' },
        ]
    },
    equal_ab: {
        name: "Equal a's and b's",
        defaultInput: 'aabb',
        startState: 'q0',
        transitions: [
            { from: 'q0', read: 'a', write: 'X', dir: 'R', to: 'q1' },
            { from: 'q0', read: 'Y', write: 'Y', dir: 'R', to: 'q3' },
            { from: 'q0', read: '_', write: '_', dir: 'R', to: 'qR' },
            { from: 'q1', read: 'a', write: 'a', dir: 'R', to: 'q1' },
            { from: 'q1', read: 'b', write: 'Y', dir: 'L', to: 'q2' },
            { from: 'q1', read: 'Y', write: 'Y', dir: 'R', to: 'q1' },
            { from: 'q1', read: '_', write: '_', dir: 'R', to: 'qR' },
            { from: 'q2', read: 'a', write: 'a', dir: 'L', to: 'q2' },
            { from: 'q2', read: 'X', write: 'X', dir: 'R', to: 'q0' },
            { from: 'q2', read: 'Y', write: 'Y', dir: 'L', to: 'q2' },
            { from: 'q3', read: 'Y', write: 'Y', dir: 'R', to: 'q3' },
            { from: 'q3', read: '_', write: '_', dir: 'R', to: 'qA' },
        ]
    },
    unary_mult: {
        name: 'Unary Multiplication',
        defaultInput: 'aa*aaa',
        startState: 'q0',
        transitions: [
            { from: 'q0', read: 'a', write: 'X', dir: 'R', to: 'q1' },
            { from: 'q0', read: '*', write: '*', dir: 'R', to: 'q5' },
            { from: 'q0', read: '_', write: '_', dir: 'R', to: 'qR' },
            { from: 'q1', read: 'a', write: 'a', dir: 'R', to: 'q1' },
            { from: 'q1', read: 'X', write: 'X', dir: 'R', to: 'q1' },
            { from: 'q1', read: '*', write: '*', dir: 'R', to: 'q2' },
            { from: 'q2', read: 'a', write: 'a', dir: 'R', to: 'q2' },
            { from: 'q2', read: 'Z', write: 'Z', dir: 'R', to: 'q2' },
            { from: 'q2', read: '_', write: 'Z', dir: 'L', to: 'q3' },
            { from: 'q3', read: 'a', write: 'a', dir: 'L', to: 'q3' },
            { from: 'q3', read: 'Z', write: 'Z', dir: 'L', to: 'q3' },
            { from: 'q3', read: '*', write: '*', dir: 'L', to: 'q4' },
            { from: 'q4', read: 'a', write: 'a', dir: 'L', to: 'q4' },
            { from: 'q4', read: 'X', write: 'X', dir: 'R', to: 'q1' },
            { from: 'q5', read: 'Z', write: 'a', dir: 'R', to: 'q5' },
            { from: 'q5', read: '*', write: '_', dir: 'R', to: 'q5' },
            { from: 'q5', read: '_', write: '_', dir: 'R', to: 'qA' },
        ]
    },
    copy: {
        name: 'String Copy',
        defaultInput: 'aaa',
        startState: 'q0',
        transitions: [
            { from: 'q0', read: 'a', write: 'X', dir: 'R', to: 'q1' },
            { from: 'q0', read: '_', write: '_', dir: 'R', to: 'q4' },
            { from: 'q0', read: 'B', write: 'B', dir: 'R', to: 'q4' },
            { from: 'q1', read: 'a', write: 'a', dir: 'R', to: 'q1' },
            { from: 'q1', read: 'B', write: 'B', dir: 'R', to: 'q1' },
            { from: 'q1', read: '_', write: 'B', dir: 'L', to: 'q2' },
            { from: 'q2', read: 'a', write: 'a', dir: 'L', to: 'q2' },
            { from: 'q2', read: 'B', write: 'B', dir: 'L', to: 'q2' },
            { from: 'q2', read: 'X', write: 'a', dir: 'R', to: 'q0' },
            { from: 'q4', read: 'X', write: 'a', dir: 'R', to: 'q4' },
            { from: 'q4', read: 'B', write: 'a', dir: 'R', to: 'q4' },
            { from: 'q4', read: '_', write: '_', dir: 'R', to: 'qA' },
        ]
    }
};

let tape = [], head = 0, state = 'q0', stepCount = 0, halted = false, autoTimer = null;
let transitions = [], acceptState = 'qA', rejectState = 'qR', startState = 'q0';
let lastRuleIndex = -1, currentKey = 'unary_add';
let speed = 500;

function loadMachine(key) {
    currentKey = key;
    const m = MACHINES[key];
    document.getElementById('tape-input').value = m.defaultInput;
    transitions = m.transitions;
    startState = m.startState || 'q0';
    acceptState = 'qA';
    rejectState = 'qR';
    initTape(m.defaultInput);
    renderDiagram(key);
}

function initTape(input) {
    pauseAuto();
    tape = input.split('');
    while (tape.length < 20) tape.push('_');
    head = 0; state = startState; stepCount = 0; halted = false; lastRuleIndex = -1;
    renderTape(); renderState(); renderDeltaTable(); clearLog();
    log('Initialized. Tape: [' + input + ']  Start state: ' + state, 'event');
    document.getElementById('btn-step').disabled = false;
    document.getElementById('btn-run').disabled = false;
}

function log(msg, cls) {
    const el = document.getElementById('exec-log');
    const d = document.createElement('div');
    d.className = cls || '';
    d.textContent = msg;
    el.appendChild(d);
    el.scrollTop = el.scrollHeight;
}
function clearLog() { document.getElementById('exec-log').innerHTML = ''; }

function renderTape() {
    const vis = 13, half = Math.floor(vis / 2);
    let start = Math.max(0, head - half);
    while (tape.length < start + vis + 4) tape.push('_');
    const td = document.getElementById('tape-display');
    const ir = document.getElementById('idx-row');
    td.innerHTML = ''; ir.innerHTML = '';
    for (let i = start; i < start + vis; i++) {
        const sym = tape[i] || '_';
        const c = document.createElement('div');
        c.className = 'cell';
        if (i === head) c.classList.add('head');
        if (sym === '_') c.classList.add('blank');
        if (['X', 'Y', 'Z', 'B'].includes(sym)) c.classList.add('marked');
        c.textContent = sym;
        td.appendChild(c);
        const ix = document.createElement('div');
        ix.className = 'idx'; ix.textContent = i;
        ir.appendChild(ix);
    }
}

function renderState() {
    const b = document.getElementById('state-badge');
    b.textContent = state;
    b.className = 'state-badge ' + (halted
        ? (state === acceptState ? 'accept' : state === rejectState ? 'reject' : 'halt')
        : 'running');
    document.getElementById('chip-step').textContent = 'Step ' + stepCount;
    document.getElementById('chip-head').textContent = 'Head: ' + head;
    document.getElementById('chip-sym').textContent = 'Reading: ' + (tape[head] || '_');
    renderDiagram(currentKey);
}

function renderDeltaTable() {
    const tbody = document.getElementById('delta-body');
    tbody.innerHTML = '';
    transitions.forEach((r, i) => {
        const tr = document.createElement('tr');
        if (i === lastRuleIndex) tr.className = 'active-rule';
        tr.innerHTML = `<td>${r.from}</td><td>${r.read}</td><td>${r.write}</td><td>${r.dir}</td><td>${r.to}</td>`;
        tbody.appendChild(tr);
    });
}

function findRule(st, sym) {
    return transitions.findIndex(r => r.from === st && r.read === sym);
}

function step() {
    if (halted) return;
    while (tape.length <= head + 4) tape.push('_');
    const sym = tape[head] || '_';
    const ri = findRule(state, sym);
    lastRuleIndex = ri;
    if (ri === -1) {
        halted = true; state = rejectState;
        renderTape(); renderState(); renderDeltaTable();
        log('No rule for (' + state + ', ' + sym + ') → REJECT', 'reject');
        pauseAuto(); return;
    }
    const r = transitions[ri];
    log('Step ' + (stepCount + 1) + ': δ(' + r.from + ', ' + r.read + ') → write=' + r.write + ', move=' + r.dir + ', next=' + r.to);
    tape[head] = r.write;
    state = r.to;
    stepCount++;
    if (r.dir === 'R') head++; else if (head > 0) head--;
    if (state === acceptState || state === rejectState) {
        halted = true;
        log('Halted in ' + state + ' after ' + stepCount + ' steps.', state === acceptState ? 'accept' : 'reject');
        pauseAuto();
    }
    renderTape(); renderState(); renderDeltaTable();
}

function updateSpeed(v) {
    speed = 1000 - parseInt(v);
    document.getElementById('speed-label').textContent = speed > 700 ? 'slow' : speed > 350 ? 'medium' : 'fast';
}

function runAuto() {
    if (halted || autoTimer) return;
    document.getElementById('btn-pause').disabled = false;
    document.getElementById('btn-run').disabled = true;
    function tick() { step(); if (!halted) autoTimer = setTimeout(tick, speed); }
    tick();
}

function pauseAuto() {
    if (autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
    document.getElementById('btn-pause').disabled = true;
    document.getElementById('btn-run').disabled = false;
}

function resetMachine() {
    const inp = document.getElementById('tape-input').value || MACHINES[currentKey].defaultInput;
    transitions = MACHINES[currentKey].transitions;
    startState = MACHINES[currentKey].startState || 'q0';
    acceptState = 'qA'; rejectState = 'qR';
    initTape(inp);
}

/* STATE DIAGRAM */
function renderDiagram(key) {
    const m = MACHINES[key]; if (!m) return;
    const svg = document.getElementById('state-svg');
    const allStates = [...new Set(m.transitions.flatMap(r => [r.from, r.to]))];
    if (!allStates.includes('qA')) allStates.push('qA');
    if (!allStates.includes('qR')) allStates.push('qR');
    const n = allStates.length;
    const cx = 410, cy = 170, r2 = 125;
    const pos = {};
    allStates.forEach((s, i) => {
        const angle = (2 * Math.PI * i / n) - Math.PI / 2;
        pos[s] = { x: cx + r2 * Math.cos(angle), y: cy + r2 * Math.sin(angle) };
    });

    let out = `<defs>
<marker id="ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
  <path d="M1 1L7 4L1 7" fill="none" stroke="#888" stroke-width="1.5" stroke-linecap="round"/>
</marker></defs>`;

    const edgeMap = {};
    m.transitions.forEach(r => {
        const k = r.from + '|' + r.to;
        if (!edgeMap[k]) edgeMap[k] = { from: r.from, to: r.to, labels: [] };
        edgeMap[k].labels.push(r.read + '/' + r.write + ',' + r.dir);
    });

    Object.values(edgeMap).forEach(e => {
        const p1 = pos[e.from], p2 = pos[e.to]; if (!p1 || !p2) return;
        const lbl = e.labels.slice(0, 2).join(' | ') + (e.labels.length > 2 ? ' …' : '');
        if (e.from === e.to) {
            out += `<path d="M${p1.x - 12},${p1.y - 22} C${p1.x - 35},${p1.y - 85} ${p1.x + 35},${p1.y - 85} ${p1.x + 12},${p1.y - 22}" fill="none" stroke="#bbb" stroke-width="1.2" marker-end="url(#ah)"/>`;
            out += `<text x="${p1.x}" y="${p1.y - 68}" text-anchor="middle" font-size="9" fill="#888" font-family="Arial">${lbl}</text>`;
        } else {
            const mx = (p1.x + p2.x) / 2, my = (p1.y + p2.y) / 2;
            const dx = p2.x - p1.x, dy = p2.y - p1.y, len = Math.sqrt(dx * dx + dy * dy);
            const nx = -dy / len * 18, ny = dx / len * 18;
            const sx = p1.x + dx / len * 26, sy = p1.y + dy / len * 26;
            const ex = p2.x - dx / len * 26, ey = p2.y - dy / len * 26;
            out += `<path d="M${sx},${sy} Q${mx + nx},${my + ny} ${ex},${ey}" fill="none" stroke="#bbb" stroke-width="1.2" marker-end="url(#ah)"/>`;
            out += `<text x="${mx + nx * 1.5}" y="${my + ny * 1.5}" text-anchor="middle" font-size="9" fill="#888" font-family="Arial">${lbl}</text>`;
        }
    });

    allStates.forEach(s => {
        const p = pos[s]; if (!p) return;
        const isAcc = s === 'qA', isRej = s === 'qR', isCur = (s === state && !halted);
        const fill = isAcc ? '#d4edda' : isRej ? '#f8d7da' : isCur ? '#e6f2ff' : '#ffffff';
        const stroke = isAcc ? '#28a745' : isRej ? '#dc3545' : isCur ? '#007bff' : '#cccccc';
        const tcol = isAcc ? '#155724' : isRej ? '#721c24' : isCur ? '#0056b3' : '#333333';
        const sw = (isAcc || isRej || isCur) ? 2 : 1;
        out += `<circle cx="${p.x}" cy="${p.y}" r="24" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
        if (isAcc || isRej) out += `<circle cx="${p.x}" cy="${p.y}" r="19" fill="none" stroke="${stroke}" stroke-width="0.8" stroke-dasharray="3,2"/>`;
        out += `<text x="${p.x}" y="${p.y + 1}" text-anchor="middle" dominant-baseline="central" font-size="11" font-weight="bold" fill="${tcol}" font-family="Arial">${s}</text>`;
    });

    const sp = pos[m.startState || 'q0'];
    if (sp) {
        out += `<path d="M${sp.x - 55},${sp.y} L${sp.x - 26},${sp.y}" fill="none" stroke="#aaa" stroke-width="1.5" marker-end="url(#ah)"/>`;
        out += `<text x="${sp.x - 58}" y="${sp.y + 1}" text-anchor="end" font-size="9" fill="#888" dominant-baseline="central" font-family="Arial">start</text>`;
    }

    svg.innerHTML = out;
}

function loadCustom() {
    const lines = document.getElementById('custom-rules').value.trim().split('\n');
    const errEl = document.getElementById('custom-err');
    const ts = [];
    for (const line of lines) {
        if (!line.trim()) continue;
        const m = line.match(/^(\w+)\s*,\s*(.+?)\s*→\s*(\w+)\s*,\s*(.+?)\s*,\s*(L|R)$/);
        if (!m) { errEl.textContent = 'Parse error: ' + line; return; }
        ts.push({ from: m[1], read: m[2].trim(), write: m[4].trim(), dir: m[5], to: m[3] });
    }
    errEl.textContent = '';
    transitions = ts; startState = 'q0'; acceptState = 'qA'; rejectState = 'qR';
    MACHINES['__custom'] = { name: 'Custom TM', defaultInput: document.getElementById('custom-input').value, startState: 'q0', transitions: ts };
    currentKey = '__custom';
    initTape(document.getElementById('custom-input').value || '_');
    switchTab('simulate');
}

function switchTab(t) {
    ['simulate', 'theory', 'diagram', 'custom'].forEach(id => {
        document.getElementById('tab-' + id).style.display = id === t ? '' : 'none';
    });
    document.querySelectorAll('.tab').forEach((el, i) => {
        el.classList.toggle('active', ['simulate', 'theory', 'diagram', 'custom'][i] === t);
    });
    if (t === 'diagram') renderDiagram(currentKey);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadMachine('unary_add');
});
