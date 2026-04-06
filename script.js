

  // =============================================
  //  DATA — 28 Students
  // =============================================
  let students = [
    { id:1,  name:"Aarav Mehta",      roll:"2501730001", email:"aarav@krmu.edu",    att:90, asgn:88, int:42, study:5, sub:95 },
    { id:2,  name:"Priya Singh",      roll:"2501730002", email:"priya@krmu.edu",    att:85, asgn:82, int:38, study:4, sub:90 },
    { id:3,  name:"Rohit Sharma",     roll:"2501730003", email:"rohit@krmu.edu",    att:60, asgn:45, int:20, study:1, sub:55 },
    { id:4,  name:"Sneha Gupta",      roll:"2501730004", email:"sneha@krmu.edu",    att:78, asgn:70, int:32, study:3, sub:80 },
    { id:5,  name:"Karan Verma",      roll:"2501730005", email:"karan@krmu.edu",    att:40, asgn:30, int:15, study:1, sub:40 },
    { id:6,  name:"Ananya Joshi",     roll:"2501730006", email:"ananya@krmu.edu",   att:92, asgn:91, int:46, study:6, sub:98 },
    { id:7,  name:"Vikram Patel",     roll:"2501730007", email:"vikram@krmu.edu",   att:55, asgn:40, int:18, study:1, sub:45 },
    { id:8,  name:"Divya Nair",       roll:"2501730008", email:"divya@krmu.edu",    att:88, asgn:85, int:40, study:5, sub:92 },
    { id:9,  name:"Arjun Tiwari",     roll:"2501730009", email:"arjun@krmu.edu",    att:72, asgn:68, int:30, study:3, sub:75 },
    { id:10, name:"Meera Kapoor",     roll:"2501730010", email:"meera@krmu.edu",    att:95, asgn:94, int:48, study:7, sub:99 },
    { id:11, name:"Shubham Sharma",   roll:"2501730396", email:"shubham@krmu.edu",  att:82, asgn:78, int:36, study:4, sub:85 },
    { id:12, name:"Nikhil Shekhawat", roll:"2501730370", email:"nikhil@krmu.edu",   att:99, asgn:99, int:99, study:7, sub:99 },
    { id:13, name:"Pawan Chauhan",    roll:"2501730411", email:"pawan@krmu.edu",    att:50, asgn:42, int:19, study:1, sub:48 },
    { id:14, name:"Rohan Chauhan",    roll:"2501730429", email:"rohan@krmu.edu",    att:76, asgn:72, int:33, study:3, sub:78 },
    { id:15, name:"Vinayak Singh",    roll:"2501730491", email:"vinayak@krmu.edu",  att:84, asgn:80, int:37, study:4, sub:88 },
    { id:16, name:"Pooja Rawat",      roll:"2501730016", email:"pooja@krmu.edu",    att:65, asgn:58, int:25, study:2, sub:60 },
    { id:17, name:"Rahul Yadav",      roll:"2501730017", email:"rahul@krmu.edu",    att:45, asgn:35, int:16, study:1, sub:42 },
    { id:18, name:"Sakshi Mishra",    roll:"2501730018", email:"sakshi@krmu.edu",   att:89, asgn:87, int:43, study:5, sub:94 },
    { id:19, name:"Tarun Bhatt",      roll:"2501730019", email:"tarun@krmu.edu",    att:73, asgn:66, int:29, study:2, sub:70 },
    { id:20, name:"Ritu Pandey",      roll:"2501730020", email:"ritu@krmu.edu",     att:91, asgn:89, int:45, study:6, sub:96 },
    { id:21, name:"Sumit Rajput",     roll:"2501730021", email:"sumit@krmu.edu",    att:58, asgn:48, int:22, study:1, sub:50 },
    { id:22, name:"Nisha Kulkarni",   roll:"2501730022", email:"nisha@krmu.edu",    att:80, asgn:76, int:35, study:3, sub:82 },
    { id:23, name:"Harsh Agarwal",    roll:"2501730023", email:"harsh@krmu.edu",    att:70, asgn:64, int:28, study:2, sub:72 },
    { id:24, name:"Neha Bajaj",       roll:"2501730024", email:"neha@krmu.edu",     att:87, asgn:84, int:41, study:5, sub:91 },
    { id:25, name:"Amit Kumar",       roll:"2501730025", email:"amit@krmu.edu",     att:42, asgn:32, int:14, study:1, sub:38 },
    { id:26, name:"Simran Bhatia",    roll:"2501730026", email:"simran@krmu.edu",   att:83, asgn:79, int:36, study:4, sub:86 },
    { id:27, name:"Dev Malhotra",     roll:"2501730027", email:"dev@krmu.edu",      att:67, asgn:62, int:26, study:2, sub:63 },
    { id:28, name:"Kajal Soni",       roll:"2501730028", email:"kajal@krmu.edu",    att:93, asgn:92, int:47, study:6, sub:97 },
  ];

  let currentRole = 'teacher';
  let editingId   = null;
  let myCharts    = {};

  // =============================================
  //  PREDICTION LOGIC
  // =============================================

  function calcScore(s) {
    return (s.att / 100) * 25
         + (s.asgn / 100) * 20
         + (s.int / 50) * 25
         + Math.min(s.study / 6, 1) * 10
         + (s.sub / 100) * 20;
  }

  function getCategory(score) {
    if (score >= 70) return 'Good';
    if (score >= 45) return 'Average';
    return 'At-Risk';
  }

  function getCatStyle(cat) {
    if (cat === 'Good')    return { color: '#2dc653', bg: '#e8f8ee', border: '#b7eccc', icon: '✅', badge: 'badge-good', barClass: 'good' };
    if (cat === 'Average') return { color: '#f4a02e', bg: '#fff7e6', border: '#fdd9a0', icon: '⚠️', badge: 'badge-avg',  barClass: 'avg'  };
    return                        { color: '#e63946', bg: '#fff0f0', border: '#ffcccc', icon: '🚨', badge: 'badge-risk', barClass: 'risk' };
  }

  function getInitials(name) {
    return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  }

  function getRecs(cat, s) {
    if (cat === 'Good') return [
      { icon: '🏅', text: 'Encourage participation in advanced assignments and competitions.' },
      { icon: '📚', text: 'Suggest supplementary reading and research projects.' },
      { icon: '🤝', text: 'This student can serve as a peer mentor to others.' },
    ];
    if (cat === 'Average') return [
      { icon: '📋', text: `Attendance is ${s.att}% — ${s.att < 75 ? 'needs improvement.' : 'keep it up!'}` },
      { icon: '✏️', text: 'Schedule regular check-ins to review assignment difficulties.' },
      { icon: '📖', text: 'Recommend joining study groups and practice sessions.' },
    ];
    return [
      { icon: '🚨', text: 'Schedule immediate parent-teacher meeting.' },
      { icon: '📉', text: `Attendance is critically low at ${s.att}%. Investigate reasons.` },
      { icon: '🧑‍🏫', text: 'Assign a personal academic mentor for daily support.' },
      { icon: '📝', text: 'Create an individualized improvement plan with weekly targets.' },
    ];
  }

  // =============================================
  //  LOGIN / LOGOUT
  // =============================================

  function pickRole(role, el) {
    currentRole = role;
    document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
  }

  function doLogin() {
    if (document.getElementById('login-pass').value !== 'password') {
      document.getElementById('login-error').style.display = 'block';
      return;
    }
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('app').style.display = 'block';

    const names = { teacher: 'Aryan Sharma', admin: 'Admin User', student: 'Student' };
    const name  = names[currentRole];
    document.getElementById('user-avatar').textContent = getInitials(name);
    document.getElementById('user-name').textContent   = name;

    startApp();
  }

  function doLogout() {
    document.getElementById('app').style.display = 'none';
    document.getElementById('login-page').style.display = 'flex';
    document.getElementById('login-error').style.display = 'none';
  }

  // =============================================
  //  APP START
  // =============================================

  function startApp() {
    refreshStats();
    renderTable();
    renderDashLists();
    renderAlerts();
    renderSummary();
    livePredict();
    buildCharts();
  }

  function refreshStats() {
    const all  = students.map(s => ({ ...s, score: calcScore(s), cat: getCategory(calcScore(s)) }));
    const good = all.filter(s => s.cat === 'Good').length;
    const avg  = all.filter(s => s.cat === 'Average').length;
    const risk = all.filter(s => s.cat === 'At-Risk').length;
    const total = students.length;

    document.getElementById('stat-total').textContent    = total;
    document.getElementById('stat-good').textContent     = good;
    document.getElementById('stat-avg').textContent      = avg;
    document.getElementById('stat-risk').textContent     = risk;
    document.getElementById('stat-good-pct').textContent = Math.round(good / total * 100) + '% of class';
    document.getElementById('stat-avg-pct').textContent  = Math.round(avg  / total * 100) + '% of class';
    document.getElementById('stat-risk-pct').textContent = Math.round(risk / total * 100) + '% of class';
    document.getElementById('sb-count').textContent      = total;
    document.getElementById('sb-alerts').textContent     = risk;
  }

  // =============================================
  //  CHARTS
  // =============================================

  function buildCharts() {
    const all  = students.map(s => ({ ...s, score: calcScore(s), cat: getCategory(calcScore(s)) }));
    const good = all.filter(s => s.cat === 'Good').length;
    const avg  = all.filter(s => s.cat === 'Average').length;
    const risk = all.filter(s => s.cat === 'At-Risk').length;

    Object.values(myCharts).forEach(c => c && c.destroy());
    myCharts = {};

    Chart.defaults.color = '#999';
    Chart.defaults.font  = { family: 'Poppins', size: 11 };

    // Scatter chart
    const scatterCtx = document.getElementById('scatter-chart');
    if (scatterCtx) {
      myCharts.scatter = new Chart(scatterCtx, {
        type: 'scatter',
        data: {
          datasets: [
            { label: 'Good',    data: all.filter(s => s.cat === 'Good').map(s => ({ x: s.att, y: s.int })),    backgroundColor: 'rgba(45,198,83,0.7)',  pointRadius: 6 },
            { label: 'Average', data: all.filter(s => s.cat === 'Average').map(s => ({ x: s.att, y: s.int })), backgroundColor: 'rgba(244,160,46,0.7)', pointRadius: 6 },
            { label: 'At-Risk', data: all.filter(s => s.cat === 'At-Risk').map(s => ({ x: s.att, y: s.int })), backgroundColor: 'rgba(230,57,70,0.7)',  pointRadius: 6 },
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, padding: 10 } } },
          scales: {
            x: { title: { display: true, text: 'Attendance (%)' }, grid: { color: '#f5f5f5' } },
            y: { title: { display: true, text: 'Internal Marks' }, grid: { color: '#f5f5f5' } }
          }
        }
      });
    }

    // Donut chart
    const donutCtx = document.getElementById('donut-chart');
    if (donutCtx) {
      myCharts.donut = new Chart(donutCtx, {
        type: 'doughnut',
        data: {
          labels: ['Good', 'Average', 'At-Risk'],
          datasets: [{
            data: [good, avg, risk],
            backgroundColor: ['#2dc653', '#f4a02e', '#e63946'],
            borderColor: ['#fff', '#fff', '#fff'],
            borderWidth: 3,
            hoverOffset: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '62%',
          plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, padding: 10 } } }
        }
      });
    }

    // Radar chart
    buildRadar();

    // Bar chart
    const barCtx = document.getElementById('bar-chart');
    if (barCtx) {
      myCharts.bar = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['Oct', 'Nov', 'Dec', 'Jan'],
          datasets: [
            { label: 'Good',    data: [9, 10, 11, good], backgroundColor: '#2dc653', borderRadius: 4 },
            { label: 'Average', data: [12, 11, 10, avg],  backgroundColor: '#f4a02e', borderRadius: 4 },
            { label: 'At-Risk', data: [7,  7,  7,  risk], backgroundColor: '#e63946', borderRadius: 4 },
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, padding: 10 } } },
          scales: {
            x: { grid: { color: '#f5f5f5' } },
            y: { beginAtZero: true, grid: { color: '#f5f5f5' } }
          }
        }
      });
    }
  }

  function buildRadar() {
    const ctx = document.getElementById('radar-chart');
    if (!ctx) return;
    if (myCharts.radar) myCharts.radar.destroy();

    const sliders = document.querySelectorAll('#page-predict input[type="range"]');
    const att   = sliders[0] ? +sliders[0].value : 75;
    const asgn  = sliders[1] ? +sliders[1].value : 65;
    const int_  = sliders[2] ? +sliders[2].value : 30;
    const study = sliders[3] ? +sliders[3].value : 3;
    const sub   = sliders[4] ? +sliders[4].value : 80;

    myCharts.radar = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Attendance', 'Assignments', 'Internal', 'Study Hrs', 'Submission'],
        datasets: [{
          label: 'Student',
          data: [att, asgn, (int_ / 50) * 100, (study / 12) * 100, sub],
          backgroundColor: 'rgba(67, 97, 238, 0.15)',
          borderColor: '#4361ee',
          pointBackgroundColor: '#4361ee',
          pointRadius: 4,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            min: 0,
            max: 100,
            ticks: { display: false },
            grid: { color: '#e0e7ff' },
            pointLabels: { color: '#888', font: { size: 11 } }
          }
        },
        plugins: { legend: { display: false } }
      }
    });
  }

  function updateCharts() {
    const all  = students.map(s => ({ ...s, score: calcScore(s), cat: getCategory(calcScore(s)) }));
    const good = all.filter(s => s.cat === 'Good').length;
    const avg  = all.filter(s => s.cat === 'Average').length;
    const risk = all.filter(s => s.cat === 'At-Risk').length;

    if (myCharts.donut) {
      myCharts.donut.data.datasets[0].data = [good, avg, risk];
      myCharts.donut.update();
    }
    if (myCharts.scatter) {
      myCharts.scatter.data.datasets[0].data = all.filter(s => s.cat === 'Good').map(s => ({ x: s.att, y: s.int }));
      myCharts.scatter.data.datasets[1].data = all.filter(s => s.cat === 'Average').map(s => ({ x: s.att, y: s.int }));
      myCharts.scatter.data.datasets[2].data = all.filter(s => s.cat === 'At-Risk').map(s => ({ x: s.att, y: s.int }));
      myCharts.scatter.update();
    }
    if (myCharts.bar) {
      myCharts.bar.data.datasets[0].data = [9, 10, 11, good];
      myCharts.bar.data.datasets[1].data = [12, 11, 10, avg];
      myCharts.bar.data.datasets[2].data = [7,  7,  7,  risk];
      myCharts.bar.update();
    }
  }

  // =============================================
  //  STUDENT TABLE
  // =============================================

  function renderTable(data) {
    const rows = data || students;
    const tbody = document.getElementById('students-tbody');
    if (!tbody) return;

    if (rows.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state"><div class="empty-icon">🔍</div><h3>No students found</h3><p>Try a different search or filter.</p></div></td></tr>`;
      return;
    }

    const all = rows.map(s => ({ ...s, score: calcScore(s), cat: getCategory(calcScore(s)) }));

    tbody.innerHTML = all.map(s => {
      const st = getCatStyle(s.cat);
      return `
        <tr onclick="openDetail(${s.id})">
          <td>
            <div style="display:flex; align-items:center; gap:10px">
              <div style="width:32px; height:32px; border-radius:8px; background:${st.bg}; color:${st.color}; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; flex-shrink:0">
                ${getInitials(s.name)}
              </div>
              <div>
                <div style="font-weight:600; font-size:13px">${s.name}</div>
                <div style="font-size:11px; color:#bbb">${s.email}</div>
              </div>
            </div>
          </td>
          <td style="color:#aaa; font-size:12px">${s.roll}</td>
          <td>
            <div style="display:flex; align-items:center; gap:6px">
              <div class="progress-bar"><div class="progress-fill ${st.barClass}" style="width:${s.att}%"></div></div>
              <span style="font-size:12px; font-weight:600">${s.att}%</span>
            </div>
          </td>
          <td>${s.asgn}/100</td>
          <td>${s.int}/50</td>
          <td style="font-weight:700; color:${st.color}">${Math.round(s.score)}</td>
          <td><span class="badge ${st.badge}">${s.cat}</span></td>
          <td onclick="event.stopPropagation()">
            <div class="action-btns">
              <button class="action-btn" title="View"   onclick="openDetail(${s.id})">👁️</button>
              <button class="action-btn" title="Edit"   onclick="openEdit(${s.id})">✏️</button>
              <button class="action-btn" title="Delete" onclick="deleteStudent(${s.id})">🗑️</button>
            </div>
          </td>
        </tr>`;
    }).join('');
  }

  function filterTable() {
    const q    = (document.getElementById('search-box')?.value || '').toLowerCase();
    const cat  = document.getElementById('filter-cat')?.value || '';
    const sort = document.getElementById('filter-sort')?.value || 'name';

    let data = students.map(s => ({ ...s, score: calcScore(s), cat: getCategory(calcScore(s)) }));

    if (q)   data = data.filter(s => s.name.toLowerCase().includes(q) || s.roll.includes(q));
    if (cat) data = data.filter(s => s.cat === cat);

    if (sort === 'score')      data.sort((a, b) => b.score - a.score);
    else if (sort === 'attendance') data.sort((a, b) => b.att - a.att);
    else                       data.sort((a, b) => a.name.localeCompare(b.name));

    renderTable(data);
  }

  // =============================================
  //  DASHBOARD LISTS
  // =============================================

  function renderDashLists() {
    const all  = students.map(s => ({ ...s, score: calcScore(s), cat: getCategory(calcScore(s)) }));
    const risk = all.filter(s => s.cat === 'At-Risk').sort((a, b) => a.score - b.score).slice(0, 5);
    const top  = all.filter(s => s.cat === 'Good').sort((a, b) => b.score - a.score).slice(0, 5);

    function miniList(items, color, bg) {
      if (!items.length) return '<div class="empty-state" style="padding:20px"><div class="empty-icon">🎉</div><h3>None here!</h3></div>';
      return items.map(s => `
        <div class="mini-list-item" onclick="openDetail(${s.id})">
          <div class="mini-avatar" style="background:${bg}; color:${color}">${getInitials(s.name)}</div>
          <div style="flex:1">
            <div style="font-weight:600; font-size:13px">${s.name}</div>
            <div style="font-size:11px; color:#bbb">${s.roll}</div>
          </div>
          <div style="font-weight:700; font-size:13px; color:${color}">${Math.round(s.score)}</div>
        </div>`).join('');
    }

    const riskEl = document.getElementById('dash-risk');
    const topEl  = document.getElementById('dash-top');
    if (riskEl) riskEl.innerHTML = miniList(risk, '#e63946', '#fff0f0');
    if (topEl)  topEl.innerHTML  = miniList(top,  '#2dc653', '#e8f8ee');
  }

  // =============================================
  //  ALERTS
  // =============================================

  function renderAlerts() {
    const all    = students.map(s => ({ ...s, score: calcScore(s), cat: getCategory(calcScore(s)) }));
    const risks  = all.filter(s => s.cat === 'At-Risk').sort((a, b) => a.score - b.score);
    const watch  = all.filter(s => s.cat === 'Average' && s.att < 75).sort((a, b) => a.score - b.score);

    function alertCard(s, cls, avBg, avColor, badgeCls) {
      return `
        <div class="alert-item ${cls}" onclick="openDetail(${s.id})">
          <div class="alert-avatar" style="background:${avBg}; color:${avColor}">${getInitials(s.name)}</div>
          <div class="alert-info">
            <div class="alert-name">${s.name}</div>
            <div class="alert-detail">Attendance: ${s.att}% · Score: ${Math.round(s.score)}/100 · Internal: ${s.int}/50</div>
          </div>
          <span class="badge ${badgeCls}" style="margin-right:8px">${s.cat}</span>
          <div class="alert-tag">Now</div>
        </div>`;
    }

    const critEl  = document.getElementById('critical-list');
    const watchEl = document.getElementById('watch-list');

    if (critEl) {
      critEl.innerHTML = risks.length === 0
        ? '<div class="empty-state" style="padding:20px"><div class="empty-icon">✅</div><h3>No critical alerts!</h3></div>'
        : risks.map(s => alertCard(s, 'risk', '#fff0f0', '#e63946', 'badge-risk')).join('');
    }

    if (watchEl) {
      watchEl.innerHTML = watch.length === 0
        ? '<div class="empty-state" style="padding:20px"><div class="empty-icon">👀</div><h3>No watchlist students!</h3></div>'
        : watch.map(s => alertCard(s, 'avg', '#fff7e6', '#f4a02e', 'badge-avg')).join('');
    }
  }

  // =============================================
  //  REPORTS SUMMARY
  // =============================================

  function renderSummary() {
    const all      = students.map(s => ({ ...s, score: calcScore(s), cat: getCategory(calcScore(s)) }));
    const avgScore = Math.round(all.reduce((sum, s) => sum + s.score, 0) / all.length);
    const avgAtt   = Math.round(all.reduce((sum, s) => sum + s.att,   0) / all.length);
    const riskCnt  = all.filter(s => s.cat === 'At-Risk').length;

    const el = document.getElementById('summary-row');
    if (el) {
      el.innerHTML = `
        <div class="summary-box">
          <div class="summary-num" style="color:#4361ee">${avgScore}</div>
          <div class="summary-label">Avg. Score</div>
        </div>
        <div class="summary-box">
          <div class="summary-num" style="color:#2dc653">${avgAtt}%</div>
          <div class="summary-label">Avg. Attendance</div>
        </div>
        <div class="summary-box">
          <div class="summary-num" style="color:#e63946">${riskCnt}</div>
          <div class="summary-label">At-Risk Students</div>
        </div>`;
    }
  }

  function makeReport() {
    toast('Generating report...', 'info');
    setTimeout(() => toast('Report ready!', 'success'), 1500);
  }

  // =============================================
  //  PREDICT PAGE
  // =============================================

  function livePredict() {
    const sliders = document.querySelectorAll('#page-predict input[type="range"]');
    if (!sliders.length) return;

    const s = {
      att:   +sliders[0].value,
      asgn:  +sliders[1].value,
      int:   +sliders[2].value,
      study: +sliders[3].value,
      sub:   +sliders[4].value
    };

    const score = calcScore(s);
    const cat   = getCategory(score);
    const st    = getCatStyle(cat);
    const recs  = getRecs(cat, s);

    const preview = document.getElementById('p-preview');
    if (preview) {
      preview.style.background   = st.bg;
      preview.style.borderColor  = st.border;
    }

    const emojiEl  = document.getElementById('p-emoji');
    const resultEl = document.getElementById('p-result');
    const noteEl   = document.getElementById('p-note');

    if (emojiEl)  emojiEl.textContent  = st.icon;
    if (resultEl) { resultEl.textContent = cat; resultEl.style.color = st.color; }
    if (noteEl) {
      const notes = { Good: 'Great performance! Keep it up.', Average: 'Needs monitoring and support.', 'At-Risk': 'Needs immediate intervention!' };
      noteEl.textContent = notes[cat];
    }

    const recsEl = document.getElementById('p-recs');
    if (recsEl) {
      recsEl.innerHTML = recs.map(r => `
        <div class="rec-item">
          <div class="rec-icon">${r.icon}</div>
          <p>${r.text}</p>
        </div>`).join('');
    }

    setTimeout(buildRadar, 50);
  }

  function saveFromPredict() {
    const name = document.getElementById('p-name')?.value?.trim();
    const roll = document.getElementById('p-roll')?.value?.trim();

    if (!name || !roll) {
      toast('Please enter student name and roll number!', 'error');
      return;
    }

    const sliders = document.querySelectorAll('#page-predict input[type="range"]');
    students.push({
      id:    Date.now(),
      name,
      roll,
      email: name.toLowerCase().replace(/\s/g, '.') + '@krmu.edu',
      att:   +sliders[0].value,
      asgn:  +sliders[1].value,
      int:   +sliders[2].value,
      study: +sliders[3].value,
      sub:   +sliders[4].value
    });

    refreshAll();
    toast(name + ' added to records!', 'success');
    document.getElementById('p-name').value = '';
    document.getElementById('p-roll').value = '';
  }

  // =============================================
  //  ADD / EDIT MODAL
  // =============================================

  function openAddModal() {
    editingId = null;
    document.getElementById('modal-heading').textContent = 'Add New Student';
    document.getElementById('m-name').value  = '';
    document.getElementById('m-roll').value  = '';
    document.getElementById('m-email').value = '';

    setSlider('m-att',   'm-sv-att',   75);
    setSlider('m-asgn',  'm-sv-asgn',  65);
    setSlider('m-int',   'm-sv-int',   30);
    setSlider('m-study', 'm-sv-study',  3);
    setSlider('m-sub',   'm-sv-sub',   80);

    modalPreview();
    openModal('add-modal');
  }

  function openEdit(id) {
    const s = students.find(x => x.id === id);
    if (!s) return;

    editingId = id;
    document.getElementById('modal-heading').textContent = 'Edit Student';
    document.getElementById('m-name').value  = s.name;
    document.getElementById('m-roll').value  = s.roll;
    document.getElementById('m-email').value = s.email;

    setSlider('m-att',   'm-sv-att',   s.att);
    setSlider('m-asgn',  'm-sv-asgn',  s.asgn);
    setSlider('m-int',   'm-sv-int',   s.int);
    setSlider('m-study', 'm-sv-study',  s.study);
    setSlider('m-sub',   'm-sv-sub',   s.sub);

    modalPreview();
    openModal('add-modal');
  }

  function setSlider(sliderId, labelId, value) {
    const el  = document.getElementById(sliderId);
    const lbl = document.getElementById(labelId);
    if (el)  el.value       = value;
    if (lbl) lbl.textContent = value;
  }

  function modalPreview() {
    const s = {
      att:   +document.getElementById('m-att').value,
      asgn:  +document.getElementById('m-asgn').value,
      int:   +document.getElementById('m-int').value,
      study: +document.getElementById('m-study').value,
      sub:   +document.getElementById('m-sub').value
    };

    const score = calcScore(s);
    const cat   = getCategory(score);
    const st    = getCatStyle(cat);

    const box = document.getElementById('m-preview');
    if (box) { box.style.background = st.bg; box.style.borderColor = st.border; }

    const emojiEl  = document.getElementById('m-emoji');
    const resultEl = document.getElementById('m-result');
    const noteEl   = document.getElementById('m-note');

    if (emojiEl)  emojiEl.textContent  = st.icon;
    if (resultEl) { resultEl.textContent = cat; resultEl.style.color = st.color; }
    if (noteEl) {
      const notes = { Good: 'Performing well!', Average: 'Needs monitoring.', 'At-Risk': 'Needs immediate help!' };
      noteEl.textContent = notes[cat];
    }
  }

  function saveStudent() {
    const name  = document.getElementById('m-name').value.trim();
    const roll  = document.getElementById('m-roll').value.trim();
    const email = document.getElementById('m-email').value.trim();

    if (!name || !roll) {
      toast('Name and Roll Number are required!', 'error');
      return;
    }

    const data = {
      name,
      roll,
      email: email || name.toLowerCase().replace(/\s/g, '.') + '@krmu.edu',
      att:   +document.getElementById('m-att').value,
      asgn:  +document.getElementById('m-asgn').value,
      int:   +document.getElementById('m-int').value,
      study: +document.getElementById('m-study').value,
      sub:   +document.getElementById('m-sub').value
    };

    if (editingId) {
      const idx = students.findIndex(s => s.id === editingId);
      if (idx > -1) students[idx] = { ...students[idx], ...data };
      toast(name + ' updated!', 'success');
    } else {
      students.push({ id: Date.now(), ...data });
      toast(name + ' added!', 'success');
    }

    closeModal('add-modal');
    refreshAll();
  }

  function deleteStudent(id) {
    const s = students.find(x => x.id === id);
    if (!s || !confirm('Delete ' + s.name + '?')) return;
    students = students.filter(x => x.id !== id);
    refreshAll();
    toast(s.name + ' removed.', 'info');
  }

  // =============================================
  //  DETAIL MODAL
  // =============================================

  function openDetail(id) {
    const s   = students.find(x => x.id === id);
    if (!s) return;

    const score = calcScore(s);
    const cat   = getCategory(score);
    const st    = getCatStyle(cat);
    const recs  = getRecs(cat, s);

    document.getElementById('detail-body').innerHTML = `
      <div class="modal-header">
        <div style="opacity:0">x</div>
        <button class="modal-close-btn" onclick="closeModal('detail-modal')">✕</button>
      </div>

      <div class="detail-top">
        <div class="detail-avatar" style="background:${st.bg}; color:${st.color}; border:2px solid ${st.border}">
          ${getInitials(s.name)}
        </div>
        <div>
          <div class="detail-name">${s.name}</div>
          <div class="detail-sub">${s.roll} · ${s.email}</div>
          <div style="margin-top:6px"><span class="badge ${st.badge}">${cat}</span></div>
        </div>
      </div>

      <div class="detail-stats-grid">
        <div class="detail-stat-box">
          <div class="detail-stat-label">Score</div>
          <div class="detail-stat-value" style="color:${st.color}">${Math.round(score)}/100</div>
        </div>
        <div class="detail-stat-box">
          <div class="detail-stat-label">Attendance</div>
          <div class="detail-stat-value">${s.att}%</div>
        </div>
        <div class="detail-stat-box">
          <div class="detail-stat-label">Internal</div>
          <div class="detail-stat-value">${s.int}/50</div>
        </div>
        <div class="detail-stat-box">
          <div class="detail-stat-label">Assignments</div>
          <div class="detail-stat-value">${s.asgn}/100</div>
        </div>
        <div class="detail-stat-box">
          <div class="detail-stat-label">Study Hrs</div>
          <div class="detail-stat-value">${s.study}/day</div>
        </div>
        <div class="detail-stat-box">
          <div class="detail-stat-label">Submissions</div>
          <div class="detail-stat-value">${s.sub}%</div>
        </div>
      </div>

      <div class="card-title" style="margin-bottom:10px">💡 Recommendations</div>
      ${recs.map(r => `
        <div class="rec-item">
          <div class="rec-icon">${r.icon}</div>
          <p>${r.text}</p>
        </div>`).join('')}

      <div class="modal-footer" style="margin-top:18px">
        <button class="btn-cancel" onclick="closeModal('detail-modal')">Close</button>
        <button class="btn-save" onclick="closeModal('detail-modal'); openEdit(${s.id})">✏️ Edit Student</button>
      </div>`;

    openModal('detail-modal');
  }

  // =============================================
  //  NAVIGATION
  // =============================================

  function goToPage(pageId, navEl, sideEl, bottomNavId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + pageId)?.classList.add('active');

    // Update navbar tabs
    document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
    if (navEl) navEl.classList.add('active');

    // Update sidebar
    document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
    if (sideEl) sideEl.classList.add('active');

    // Update bottom nav
    document.querySelectorAll('.bottom-nav-btn').forEach(b => b.classList.remove('active'));
    if (bottomNavId) {
      document.getElementById(bottomNavId)?.classList.add('active');
    }

    // Sync missing nav elements
    const pages    = ['dashboard', 'students', 'predict', 'alerts', 'reports', 'settings'];
    const navLinks = [...document.querySelectorAll('.nav-link')];
    const sideBtns = [...document.querySelectorAll('.sidebar-btn')];
    const bnIds    = ['bn-dashboard', 'bn-students', 'bn-predict', 'bn-alerts', 'bn-more', 'bn-more'];
    const idx      = pages.indexOf(pageId);

    if (!navEl    && navLinks[idx])  navLinks[idx].classList.add('active');
    if (!sideEl   && sideBtns[idx])  sideBtns[idx].classList.add('active');
    if (!bottomNavId && bnIds[idx])  document.getElementById(bnIds[idx])?.classList.add('active');

    // Close sidebar on mobile/tablet after navigation
    closeSidebar();

    // Scroll main content to top
    const mc = document.querySelector('.main-content');
    if (mc) mc.scrollTop = 0;
  }

  // =============================================
  //  SIDEBAR TOGGLE (tablet hamburger)
  // =============================================

  function toggleSidebar() {
    const sidebar  = document.querySelector('.sidebar');
    const overlay  = document.getElementById('sidebar-overlay');
    const btn      = document.getElementById('hamburger-btn');
    const isOpen   = sidebar.classList.contains('open');

    if (isOpen) {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
      btn.classList.remove('open');
    } else {
      sidebar.classList.add('open');
      overlay.classList.add('show');
      btn.classList.add('open');
    }
  }

  function closeSidebar() {
    document.querySelector('.sidebar')?.classList.remove('open');
    document.getElementById('sidebar-overlay')?.classList.remove('show');
    document.getElementById('hamburger-btn')?.classList.remove('open');
  }

  // =============================================
  //  BOTTOM NAV "MORE" MENU
  // =============================================

  function toggleMoreMenu() {
    const menu = document.getElementById('more-menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  }

  // Close more menu when clicking outside
  document.addEventListener('click', function(e) {
    const menu = document.getElementById('more-menu');
    const moreBtn = document.getElementById('bn-more');
    if (menu && !menu.contains(e.target) && e.target !== moreBtn && !moreBtn?.contains(e.target)) {
      menu.style.display = 'none';
    }
  });

  // =============================================
  //  MODALS
  // =============================================

  function openModal(id)  { document.getElementById(id)?.classList.add('open'); }
  function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-bg')) {
      document.querySelectorAll('.modal-bg.open').forEach(m => m.classList.remove('open'));
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-bg.open').forEach(m => m.classList.remove('open'));
    }
  });

  // =============================================
  //  TOAST
  // =============================================

  let toastTimer;

  function toast(msg, type) {
    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    const box   = document.getElementById('toast-box');
    if (!box) return;

    box.className   = 'toast ' + (type || 'info');
    box.innerHTML   = (icons[type] || 'ℹ️') + ' ' + msg;
    box.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => box.classList.remove('show'), 3000);
  }

  // =============================================
  //  REFRESH ALL
  // =============================================

  function refreshAll() {
    refreshStats();
    renderTable();
    filterTable();
    renderDashLists();
    renderAlerts();
    renderSummary();
    updateCharts();
  }
