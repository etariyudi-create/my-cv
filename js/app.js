/**
 * Eka Taris Ariyudi - Professional Presales Solutions Architect CV
 * Clean React-Style Application Logic (Bilingual, Search, Modal & PDF)
 */

let cvData = null;
let currentLang = 'en'; // 'en' or 'id'
let currentCategory = 'all';
let currentCertVendor = 'all';
let currentSearch = '';
let visibleProjectCount = 8;
const PROJECTS_PER_PAGE = 8;

const I18N = {
  en: {
    role_tag: "Solution Architect",
    btn_download_pdf: "⬇️ Download CV (PDF)",
    btn_print: "🖨️ Print / Save PDF",
    btn_lang_switch: "🌐 Bahasa Indonesia",
    metric_exp: "Years Experience",
    metric_projects: "Enterprise Projects",
    metric_certs: "Vendor Accreditations",
    metric_deals: "Est. Deal Sizing & BoQ",
    title_competencies: "⚡ Solution Architecture & Core Competencies",
    desc_competencies: "Specialized in enterprise solution sizing, multi-vendor Bill of Quantities (BoQ), RFP defense, and live workload migrations.",
    title_workflow: "🛠️ Presales Sizing & Delivery Pipeline",
    desc_workflow: "Structured enterprise delivery lifecycle from discovery to commissioning.",
    title_skills_dist: "📊 SKILLS DISTRIBUTION",
    title_exp_chart: "🧩 PROFESSIONAL EXPERIENCE & ENTERPRISE PROJECTS",
    step1_title: "01. Workload Assessment",
    step1_desc: "Analyze compute, IOPS, and storage growth patterns to establish architecture baselines.",
    step2_title: "02. Sizing & BoQ Optimization",
    step2_desc: "Formulate multi-vendor Bill of Quantities with optimal TCO and resiliency models.",
    step3_title: "03. PoC & Benchmark Validation",
    step3_desc: "Lead technical validation, live hypervisor migrations, and disaster recovery failover drills.",
    step4_title: "04. HLD & LLD Engineering",
    step4_desc: "Draft comprehensive High-Level and Low-Level Designs including network fabrics and SAN zoning.",
    step5_title: "05. Cutover & Governance",
    step5_desc: "Execute zero-downtime cutovers, formal commissioning, and SLA compliance audits.",
    title_projects: "💼 Master Enterprise Projects Portfolio (54 Engagements)",
    desc_projects: "High-impact deployments across Banking, Insurance, Automotive, and Government sectors.",
    search_placeholder: "Search projects by client, technology, or keywords (e.g. Sangfor, BTN, Nutanix)...",
    tab_all: "All (54)",
    tab_hci: "HCI & Cloud Migration",
    tab_storage: "Storage & DR",
    tab_network: "Network & Infra",
    tab_support: "Mission-Critical SLA",
    btn_show_more: "Load More Projects",
    btn_show_less: "Show Less",
    title_certs: "📜 Global Vendor Accreditations (21 Credentials)",
    desc_certs: "Continuous technical advancement across Tier-1 enterprise technology leaders.",
    title_contact: "📫 Direct Contact & Professional Network",
    desc_contact: "Available for enterprise consulting, high-impact infrastructure roles, and international remote engagements.",
    qr_linkedin: "LinkedIn QR",
    qr_website: "Website QR",
    title_edu: "🎓 Academic Foundation & Education",
    modal_title_details: "Architectural & Technical Scope",
    modal_lbl_client: "Client / Organization",
    modal_lbl_role: "Assigned Role",
    modal_lbl_company: "Employer Company",
    modal_lbl_location: "Deployment Location",
    modal_lbl_tasks: "Key Responsibilities & Scope of Work",
    modal_lbl_techs: "Technology Stack",
    pdf_generating: "Generating Executive ATS PDF..."
  },
  id: {
    role_tag: "Solution Architect",
    btn_download_pdf: "⬇️ Unduh CV (PDF)",
    btn_print: "🖨️ Cetak / Simpan PDF",
    btn_lang_switch: "🌐 English Version",
    metric_exp: "Tahun Pengalaman",
    metric_projects: "Proyek Enterprise",
    metric_certs: "Akreditasi Vendor",
    metric_deals: "Estimasi Nilai Sizing & BoQ",
    title_competencies: "⚡ Keahlian Arsitektur Solusi & Presales",
    desc_competencies: "Spesialis sizing solusi enterprise, penyusunan BoQ multi-vendor, tanggapan tender RFP, dan migrasi workload misi-kritis.",
    title_workflow: "🛠️ Metodologi Sizing & Siklus Kerja Presales",
    desc_workflow: "Siklus pengiriman proyek enterprise terstruktur dari tahap discovery hingga komisioning formal.",
    title_skills_dist: "📊 SKILLS DISTRIBUTION",
    title_exp_chart: "🧩 PROFESSIONAL EXPERIENCE & ENTERPRISE PROJECTS",
    step1_title: "01. Analisis Beban Kerja",
    step1_desc: "Menganalisis profil compute, IOPS, dan kapasitas storage untuk baseline arsitektur.",
    step2_title: "02. Sizing & Optimasi BoQ",
    step2_desc: "Merumuskan Bill of Quantities (BoQ) multi-vendor dengan TCO dan ketahanan optimal.",
    step3_title: "03. Validasi PoC & Benchmark",
    step3_desc: "Memimpin validasi teknis, migrasi hypervisor langsung, dan simulasi failover DR.",
    step4_title: "04. Perancangan HLD & LLD",
    step4_desc: "Menyusun dokumen High-Level dan Low-Level Design meliputi fabric jaringan dan SAN zoning.",
    step5_title: "05. Cutover & Tata Kelola",
    step5_desc: "Eksekusi cutover zero-downtime, serah terima formal, dan audit kepatuhan SLA.",
    title_projects: "💼 Portofolio Proyek Enterprise (54 Proyek)",
    desc_projects: "Implementasi misi-kritis di sektor Perbankan, Asuransi, Otomotif, dan Pemerintahan.",
    search_placeholder: "Cari proyek berdasarkan klien, teknologi, atau kata kunci (contoh: Sangfor, BTN, Nutanix)...",
    tab_all: "Semua (54)",
    tab_hci: "HCI & Migrasi Cloud",
    tab_storage: "Storage & DR",
    tab_network: "Jaringan & Infra",
    tab_support: "Dukungan SLA Misi-Kritis",
    btn_show_more: "Muat Lebih Banyak Proyek",
    btn_show_less: "Tampilkan Lebih Sedikit",
    title_certs: "📜 Sertifikasi & Kredensial Global (21 Sertifikasi)",
    desc_certs: "Pengembangan kompetensi teknis berkelanjutan dengan para pemimpin teknologi Tier-1.",
    title_contact: "📫 Kontak Langsung & Jaringan Profesional",
    desc_contact: "Tersedia untuk konsultasi arsitektur enterprise, peran infrastruktur strategis, dan kontrak internasional.",
    qr_linkedin: "QR LinkedIn",
    qr_website: "QR Website",
    title_edu: "🎓 Landasan Akademis & Pendidikan",
    modal_title_details: "Rincian Teknis & Lingkup Arsitektur",
    modal_lbl_client: "Klien / Instansi",
    modal_lbl_role: "Peran Penugasan",
    modal_lbl_company: "Nama Perusahaan",
    modal_lbl_location: "Lokasi Proyek",
    modal_lbl_tasks: "Uraian Tugas & Lingkup Pekerjaan",
    modal_lbl_techs: "Teknologi yang Digunakan",
    pdf_generating: "Menyiapkan PDF ATS..."
  }
};

// Initialize App
document.addEventListener('DOMContentLoaded', async () => {
  await loadCVDatabase();
  setupEventListeners();
  renderAll();
});

// Load Database
async function loadCVDatabase() {
  try {
    const res = await fetch('cv-data.json');
    if (res.ok) {
      cvData = await res.json();
    }
  } catch (e) {
    console.info('Using local fallback window.CV_DATABASE');
  }

  if (!cvData && window.CV_DATABASE) {
    cvData = window.CV_DATABASE;
  }
}

// Event Listeners
function setupEventListeners() {
  // Theme Toggle
  const themeBtn = document.getElementById('btnThemeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', nextTheme);
      themeBtn.innerHTML = nextTheme === 'light' ? '🌙' : '☀️';
      localStorage.setItem('theme', nextTheme);
      updateChartThemes();
    });
  }

  // Language Toggle
  const langBtn = document.getElementById('btnLangToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'id' : 'en';
      renderAll();
    });
  }

  // Search Input
  const searchInput = document.getElementById('projectSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      visibleProjectCount = PROJECTS_PER_PAGE;
      renderProjects();
    });
  }

  // Category Filter Chips
  const categoryChips = document.querySelectorAll('.category-chips .chip-btn');
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCategory = chip.getAttribute('data-category');
      visibleProjectCount = PROJECTS_PER_PAGE;
      renderProjects();
    });
  });

  // Load More Button
  const loadMoreBtn = document.getElementById('btnLoadMore');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      const filtered = getFilteredProjects();
      if (visibleProjectCount >= filtered.length) {
        visibleProjectCount = PROJECTS_PER_PAGE;
      } else {
        visibleProjectCount += PROJECTS_PER_PAGE;
      }
      renderProjects();
    });
  }

  // Certifications Filter
  const certChips = document.querySelectorAll('.certs-filter-chips .chip-btn');
  certChips.forEach(chip => {
    chip.addEventListener('click', () => {
      certChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCertVendor = chip.getAttribute('data-vendor');
      renderCertifications();
    });
  });

  // Modal Close
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  // Download PDF Trigger
  const downloadPdfBtn = document.getElementById('btnDownloadPdf');
  if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener('click', handleDownloadPDF);
  }
}

// Master Render Function
function renderAll() {
  if (!cvData) return;
  updateUIStrings();
  renderProfileHeader();
  renderVendorLogos();
  renderCompetencies();
  renderProjects();
  renderCertifications();
  renderContactCard();
  renderEducation();
  initCharts();
}

// Update i18n Strings
function updateUIStrings() {
  const dict = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const searchInput = document.getElementById('projectSearch');
  if (searchInput) {
    searchInput.placeholder = dict.search_placeholder;
  }
  const langBtn = document.getElementById('btnLangToggle');
  if (langBtn) {
    langBtn.textContent = dict.btn_lang_switch;
  }
}

// Render Profile Header
function renderProfileHeader() {
  const p = cvData.profile;
  const isEn = currentLang === 'en';

  const headlineEl = document.getElementById('uiHeaderHeadline');
  if (headlineEl) {
    headlineEl.textContent = isEn ? p.headline_en : p.headline_id;
  }

  const roleTagEl = document.getElementById('uiRoleTag');
  if (roleTagEl) {
    roleTagEl.textContent = isEn ? p.title_en : p.title_id;
  }
}

// Render Vendor Logos Strip (clean chips from assets/logos/)
function renderVendorLogos() {
  const container = document.getElementById('vendorLogosRow');
  if (!container || !cvData.vendor_partnerships) return;

  container.innerHTML = cvData.vendor_partnerships.map(v => `
    <span class="logo-chip" title="${v.name}: ${v.badge}">
      <img src="${v.logo}" alt="${v.name}" onerror="this.style.display='none'" />
      <span>${v.name}</span>
    </span>
  `).join('');
}

// Render Presales Competencies
function renderCompetencies() {
  const container = document.getElementById('competenciesGrid');
  if (!container || !cvData.presales_competencies) return;

  container.innerHTML = cvData.presales_competencies.map(comp => `
    <div class="competency-item">
      <h4>⚡ ${comp.category}</h4>
      <ul>
        ${comp.skills.map(s => `<li>${s}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// Filter Projects
function getFilteredProjects() {
  if (!cvData || !cvData.projects) return [];
  return cvData.projects.filter(p => {
    let matchCat = true;
    if (currentCategory === 'hci') {
      matchCat = p.category === 'HCI & Cloud Migration';
    } else if (currentCategory === 'storage') {
      matchCat = p.category === 'Enterprise Storage & DR';
    } else if (currentCategory === 'network') {
      matchCat = p.category === 'Network & Infrastructure';
    } else if (currentCategory === 'support') {
      matchCat = p.category === 'Mission-Critical SLA & Support';
    }

    let matchSearch = true;
    if (currentSearch) {
      const hay = (
        (p.title || '') + ' ' +
        (p.title_en || '') + ' ' +
        (p.client || '') + ' ' +
        (p.location || '') + ' ' +
        (p.year || '') + ' ' +
        (p.technologies ? p.technologies.join(' ') : '')
      ).toLowerCase();
      matchSearch = hay.includes(currentSearch);
    }

    return matchCat && matchSearch;
  });
}

// Render Projects Table
function renderProjects() {
  const container = document.getElementById('projectsTableBody');
  const countBadge = document.getElementById('projectCountBadge');
  const loadMoreBtn = document.getElementById('btnLoadMore');
  if (!container) return;

  const filtered = getFilteredProjects();
  if (countBadge) {
    countBadge.innerHTML = `Showing <strong>${Math.min(visibleProjectCount, filtered.length)}</strong> of <strong>${filtered.length}</strong> enterprise projects`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; padding: 36px; color: var(--text-muted);">
          No enterprise projects matched your criteria.
        </td>
      </tr>
    `;
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    return;
  }

  const visibleList = filtered.slice(0, visibleProjectCount);

  container.innerHTML = visibleList.map(p => {
    const isEn = currentLang === 'en';
    const title = isEn && p.title_en ? p.title_en : p.title;
    const tasks = isEn && p.tasks_en && p.tasks_en.length > 0 ? p.tasks_en : p.tasks;
    const previewTasks = tasks.slice(0, 3);

    return `
      <tr style="cursor: pointer;" onclick="openProjectModal('${p.id}')">
        <td style="width: 85px;">
          <span class="badge-year">${p.year}</span>
        </td>
        <td style="width: 220px;">
          <strong style="color: var(--text-main); font-size: 13.5px;">${p.client}</strong>
          <div style="font-size: 11.5px; color: var(--text-dim); margin-top: 2px;">
            ${p.client_tier || 'Enterprise'} • ${p.location}
          </div>
          <span class="badge-cat" style="margin-top: 6px;">${p.category}</span>
        </td>
        <td>
          <div style="font-weight: 700; color: var(--text-main); font-size: 13.5px; line-height: 1.4;">
            ${title}
          </div>
          <ul class="task-list-inline">
            ${previewTasks.map(t => `<li>${t}</li>`).join('')}
          </ul>
          <div class="tech-pill-list">
            ${p.technologies ? p.technologies.slice(0, 4).map(tech => `<span class="tech-pill">${tech}</span>`).join('') : ''}
          </div>
        </td>
        <td style="width: 100px; text-align: right; vertical-align: middle;">
          <button class="btn btn-secondary" style="padding: 4px 10px; font-size: 11px;" onclick="event.stopPropagation(); openProjectModal('${p.id}')">
            ${isEn ? 'Details →' : 'Rincian →'}
          </button>
        </td>
      </tr>
    `;
  }).join('');

  if (loadMoreBtn) {
    if (filtered.length <= PROJECTS_PER_PAGE) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'inline-flex';
      loadMoreBtn.textContent = visibleProjectCount >= filtered.length ? I18N[currentLang].btn_show_less : I18N[currentLang].btn_show_more;
    }
  }
}

// Open Project Details Modal
window.openProjectModal = function(id) {
  const p = cvData.projects.find(item => item.id === id);
  if (!p) return;

  const modal = document.getElementById('projectModal');
  const body = document.getElementById('modalBodyContent');
  if (!modal || !body) return;

  const dict = I18N[currentLang];
  const isEn = currentLang === 'en';
  const title = isEn && p.title_en ? p.title_en : p.title;
  const tasks = isEn && p.tasks_en && p.tasks_en.length > 0 ? p.tasks_en : p.tasks;
  const role = isEn && p.role_en ? p.role_en : p.role;

  body.innerHTML = `
    <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">
      <span class="badge-year">${p.year}</span>
      <span class="badge-cat">${p.category}</span>
      <span style="font-size: 11.5px; background: rgba(255,255,255,0.06); padding: 2px 8px; border-radius: var(--radius-sm); color: var(--accent-amber); font-family: var(--font-mono);">
        ${p.client_tier || 'Enterprise'}
      </span>
    </div>

    <h2 style="font-size: 18px; font-weight: 800; color: var(--text-main); line-height: 1.35; margin-bottom: 16px;">
      ${title}
    </h2>

    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--card-border); padding: 14px; border-radius: var(--radius-sm); margin-bottom: 18px;">
      <div>
        <div style="font-size: 11px; color: var(--text-dim); text-transform: uppercase; font-family: var(--font-mono);">${dict.modal_lbl_client}</div>
        <div style="font-size: 13.5px; color: var(--text-main); font-weight: 700;">${p.client}</div>
      </div>
      <div>
        <div style="font-size: 11px; color: var(--text-dim); text-transform: uppercase; font-family: var(--font-mono);">${dict.modal_lbl_role}</div>
        <div style="font-size: 13.5px; color: var(--primary-light); font-weight: 700;">${role}</div>
      </div>
      <div>
        <div style="font-size: 11px; color: var(--text-dim); text-transform: uppercase; font-family: var(--font-mono);">${dict.modal_lbl_company}</div>
        <div style="font-size: 13px; color: var(--text-main);">${p.company || 'PT. Mitra Infosarana'}</div>
      </div>
      <div>
        <div style="font-size: 11px; color: var(--text-dim); text-transform: uppercase; font-family: var(--font-mono);">${dict.modal_lbl_location}</div>
        <div style="font-size: 13px; color: var(--text-main);">${p.location || 'Indonesia'}</div>
      </div>
    </div>

    <div style="margin-bottom: 16px;">
      <h4 style="font-size: 14px; color: var(--primary-light); margin-bottom: 10px; font-weight: 700;">
        ${dict.modal_lbl_tasks}
      </h4>
      <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px;">
        ${tasks.map(t => `
          <li style="font-size: 13px; color: var(--text-muted); display: flex; align-items: flex-start; gap: 8px; line-height: 1.45;">
            <span style="color: var(--primary); font-weight: bold;">✓</span>
            <span>${t}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div>
      <h4 style="font-size: 14px; color: var(--primary-light); margin-bottom: 8px; font-weight: 700;">
        ${dict.modal_lbl_techs}
      </h4>
      <div style="display: flex; flex-wrap: wrap; gap: 6px;">
        ${p.technologies ? p.technologies.map(t => `<span class="tech-pill" style="padding: 4px 10px; font-size: 11.5px;">${t}</span>`).join('') : ''}
      </div>
    </div>
  `;

  modal.classList.add('active');
};

// Render Certifications Grid
function renderCertifications() {
  const container = document.getElementById('certsGrid');
  if (!container || !cvData.certifications) return;

  const filtered = cvData.certifications.filter(c => {
    if (currentCertVendor === 'all') return true;
    return c.vendor.toLowerCase().includes(currentCertVendor.toLowerCase());
  });

  container.innerHTML = filtered.map(c => `
    <div class="cert-card">
      <div>
        <div class="cert-top">
          <span class="cert-vendor-pill" style="background: ${c.badge_color};">${c.vendor}</span>
          <span class="cert-year">${c.year}</span>
        </div>
        <h4 class="cert-name">${c.name}</h4>
      </div>
      <div class="cert-cat">${c.category}</div>
    </div>
  `).join('');
}

// Render Contact & Barcode Card (Exact match to my-cv)
function renderContactCard() {
  const p = cvData.profile;
  const listEl = document.getElementById('uiContactList');
  if (listEl) {
    listEl.innerHTML = `
      <li>✉️ <strong>Email:</strong> <a href="mailto:${p.email}">${p.email}</a></li>
      <li>💼 <strong>LinkedIn:</strong> <a href="${p.social.linkedin}" target="_blank">linkedin.com/in/eka-taris-ariyudi</a></li>
      <li>🌐 <strong>Portfolio:</strong> <a href="${p.social.portfolio}" target="_blank">etariyudi-create.github.io/my-cv/</a></li>
    `;
  }
}



// Render Education
function renderEducation() {
  const container = document.getElementById('eduContainer');
  if (!container || !cvData.education) return;

  const e = cvData.education[0];
  const isEn = currentLang === 'en';
  container.innerHTML = `
    <div style="font-size: 16px; font-weight: 800; color: var(--text-main); margin-bottom: 4px;">
      🎓 ${isEn ? e.degree : e.degree_id} — ${e.major}
    </div>
    <div style="font-size: 13.5px; color: var(--primary-light); font-weight: 600; margin-bottom: 8px;">
      ${e.institution} (${e.year}) • ${e.location}
    </div>
    <p style="font-size: 13px; color: var(--text-muted); margin: 0; line-height: 1.5;">
      ${isEn ? e.description_en : e.description_id}
    </p>
  `;
}

// Global Chart Instances
let skillChartInstance = null;
let expChartInstance = null;

// Initialize Visual Analytics Charts (Skills Distribution & Experience by Year)
function initCharts() {
  if (typeof Chart === 'undefined') return;

  if (typeof ChartDataLabels !== 'undefined') {
    Chart.register(ChartDataLabels);
  }

  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const textColor = isDark ? '#e2e8f0' : '#0f172a';
  const borderColor = isDark ? 'rgba(8, 12, 9, 0.8)' : '#ffffff';

  // 1. Skill Donut Chart
  const skillCanvas = document.getElementById('skillChart');
  if (skillCanvas) {
    if (skillChartInstance) skillChartInstance.destroy();
    const skillCtx = skillCanvas.getContext('2d');
    skillChartInstance = new Chart(skillCtx, {
      type: 'doughnut',
      data: {
        labels: [
          'Storage & Backup (30%)',
          'Server & Hardware (25%)',
          'Networking & Security (25%)',
          'Cloud & Virtualization (20%)'
        ],
        datasets: [{
          data: [30, 25, 25, 20],
          backgroundColor: [
            'rgba(34, 197, 94, 0.85)',
            'rgba(56, 189, 248, 0.85)',
            'rgba(249, 115, 22, 0.85)',
            'rgba(168, 85, 247, 0.85)'
          ],
          borderColor: borderColor,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: textColor,
              padding: 10,
              font: { size: 11, family: "'Inter', sans-serif", weight: '600' }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(8, 12, 9, 0.95)',
            titleColor: '#4ade80',
            bodyColor: '#ffffff',
            borderColor: 'rgba(74, 222, 128, 0.4)',
            borderWidth: 1,
            padding: 10
          },
          datalabels: {
            color: '#ffffff',
            font: { weight: 'bold', size: 12, family: "'Inter', sans-serif" },
            formatter: function (value, context) {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(0);
              return percentage + '%';
            }
          }
        }
      }
    });
    window.skillChartInstance = skillChartInstance;
  }

  // 2. Experience Donut Chart
  const expCanvas = document.getElementById('experienceChart');
  if (expCanvas) {
    if (expChartInstance) expChartInstance.destroy();
    const expCtx = expCanvas.getContext('2d');
    expChartInstance = new Chart(expCtx, {
      type: 'doughnut',
      data: {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
        datasets: [{
          label: 'Projects Delivered',
          data: [1, 1, 7, 7, 4, 5, 6, 5, 4, 7, 5],
          backgroundColor: [
            'rgba(250, 204, 21, 0.85)',
            'rgba(168, 85, 247, 0.85)',
            'rgba(249, 115, 22, 0.85)',
            'rgba(59, 130, 246, 0.85)',
            'rgba(6, 182, 212, 0.85)',
            'rgba(234, 179, 8, 0.85)',
            'rgba(192, 132, 252, 0.85)',
            'rgba(244, 63, 94, 0.85)',
            'rgba(34, 197, 94, 0.85)',
            'rgba(251, 146, 60, 0.85)',
            'rgba(45, 212, 191, 0.85)'
          ],
          borderColor: borderColor,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'right',
            labels: {
              color: textColor,
              padding: 6,
              font: { size: 10.5, family: "'Inter', sans-serif", weight: '600' }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(8, 12, 9, 0.95)',
            titleColor: '#4ade80',
            bodyColor: '#ffffff',
            borderColor: 'rgba(74, 222, 128, 0.4)',
            borderWidth: 1,
            padding: 10,
            callbacks: {
              label: function (context) {
                return ` ${context.parsed} Projects Delivered (${context.label})`;
              }
            }
          },
          datalabels: {
            color: '#ffffff',
            font: { weight: 'bold', size: 10.5, family: "'Inter', sans-serif" },
            formatter: function (value) {
              return value;
            }
          }
        }
      }
    });
    window.expChartInstance = expChartInstance;
  }
}

// Update chart theme colors dynamically on dark/light mode toggle
function updateChartThemes() {
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const textColor = isDark ? '#e2e8f0' : '#0f172a';
  const borderColor = isDark ? 'rgba(8, 12, 9, 0.8)' : '#ffffff';

  if (skillChartInstance) {
    skillChartInstance.options.plugins.legend.labels.color = textColor;
    skillChartInstance.data.datasets[0].borderColor = borderColor;
    skillChartInstance.update();
  }

  if (expChartInstance) {
    expChartInstance.options.plugins.legend.labels.color = textColor;
    expChartInstance.data.datasets[0].borderColor = borderColor;
    expChartInstance.update();
  }
}

// Complete Comprehensive ATS PDF Generation (Profile Photo, Vendor Logos, All 54 Projects, Contact & QR Codes)
async function handleDownloadPDF() {
  const btn = document.getElementById('btnDownloadPdf');
  const originalText = btn ? btn.innerHTML : '';
  if (btn) {
    btn.innerHTML = `⏳ ${I18N[currentLang].pdf_generating}`;
    btn.style.pointerEvents = 'none';
  }

  if (!cvData && window.CV_DATABASE) {
    cvData = window.CV_DATABASE;
  }

  const skillImg = skillChartInstance ? skillChartInstance.toBase64Image() : '';
  const expImg = expChartInstance ? expChartInstance.toBase64Image() : '';

  // 1. Overlay with elegant loading status card
  const overlay = document.createElement('div');
  overlay.id = 'pdf-loading-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'rgba(8, 12, 10, 0.9)';
  overlay.style.backdropFilter = 'blur(6px)';
  overlay.style.webkitBackdropFilter = 'blur(6px)';
  overlay.style.zIndex = '999999';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';

  const card = document.createElement('div');
  card.style.background = '#0f172a';
  card.style.border = '1.5px solid #16a34a';
  card.style.borderRadius = '12px';
  card.style.padding = '18px 28px';
  card.style.color = '#f8fafc';
  card.style.fontSize = '14px';
  card.style.fontWeight = 'bold';
  card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.7)';
  card.style.display = 'flex';
  card.style.alignItems = 'center';
  card.style.gap = '12px';
  card.innerHTML = `<span>⚙️</span><span>${I18N[currentLang].pdf_generating}</span>`;
  overlay.appendChild(card);
  document.body.appendChild(overlay);

  // 2. ATS Document Container in normal flow (width 720px, margin 0, no position fixed/absolute)
  const container = document.createElement('div');
  container.id = 'full-ats-pdf';
  container.style.width = '720px';
  container.style.margin = '0';
  container.style.padding = '0';
  container.style.background = '#ffffff';
  container.style.color = '#0f172a';
  container.style.fontFamily = "'Inter', Arial, sans-serif";
  container.style.lineHeight = '1.35';
  container.style.fontSize = '10px';
  container.style.boxSizing = 'border-box';

  const p = cvData.profile;
  const isEn = currentLang === 'en';

  container.innerHTML = `
    <div style="box-sizing: border-box; padding: 18px 24px 12px 24px; width: 720px;">
      
      <!-- 1. HEADER WITH PROFILE PHOTO -->
      <div style="border-bottom: 2.5px solid #16a34a; padding-bottom: 10px; margin-bottom: 10px; display: flex; align-items: center; gap: 16px;">
        <img src="assets/profile.png" alt="Profile" style="width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 2.5px solid #16a34a; flex-shrink: 0;" />
        <div style="flex-grow: 1;">
          <h1 style="font-size: 21px; font-weight: 800; color: #0f172a; margin: 0 0 2px 0; letter-spacing: -0.5px;">${p.name}</h1>
          <div style="font-size: 12.5px; font-weight: 700; color: #16a34a; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
            ${isEn ? p.title_en : p.title_id} | Enterprise IT Infrastructure
          </div>
          <div style="font-size: 9px; color: #475569; line-height: 1.35;">
            <span>✉️ ${p.email}</span> • 
            <span>🌐 ${p.social.portfolio}</span> • 
            <span>💼 linkedin.com/in/eka-taris-ariyudi</span> • 
            <span>📍 Jakarta, Indonesia</span>
          </div>
        </div>
      </div>

      <!-- 2. PRINCIPAL VENDOR ECOSYSTEM LOGOS STRIP -->
      <div style="margin-bottom: 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 5px 8px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 5px;">
        <div style="font-size: 8px; font-weight: 800; color: #166534; text-transform: uppercase; width: 100%; margin-bottom: 2px;">
          ${isEn ? 'Principal Enterprise Vendor Ecosystem:' : 'Ekosistem Vendor Enterprise Utama:'}
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center;">
          <span style="display: inline-flex; align-items: center; gap: 3px; font-size: 8px; font-weight: 600; color: #334155; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 2px 5px;"><img src="assets/logos/cisco.svg" alt="Cisco" style="height: 10px;" /> Cisco</span>
          <span style="display: inline-flex; align-items: center; gap: 3px; font-size: 8px; font-weight: 600; color: #334155; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 2px 5px;"><img src="assets/logos/redhat.svg" alt="Red Hat" style="height: 10px;" /> Red Hat</span>
          <span style="display: inline-flex; align-items: center; gap: 3px; font-size: 8px; font-weight: 600; color: #334155; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 2px 5px;"><img src="assets/logos/dellemc.svg" alt="Dell Technologies" style="height: 10px;" /> Dell Technologies</span>
          <span style="display: inline-flex; align-items: center; gap: 3px; font-size: 8px; font-weight: 600; color: #334155; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 2px 5px;"><img src="assets/logos/hpe.svg" alt="HPE" style="height: 10px;" /> HPE</span>
          <span style="display: inline-flex; align-items: center; gap: 3px; font-size: 8px; font-weight: 600; color: #334155; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 2px 5px;"><img src="assets/logos/netapp.svg" alt="NetApp" style="height: 10px;" /> NetApp</span>
          <span style="display: inline-flex; align-items: center; gap: 3px; font-size: 8px; font-weight: 600; color: #334155; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 2px 5px;"><img src="assets/logos/nutanix.svg" alt="Nutanix" style="height: 10px;" /> Nutanix</span>
          <span style="display: inline-flex; align-items: center; gap: 3px; font-size: 8px; font-weight: 600; color: #334155; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 2px 5px;"><img src="assets/logos/ibm.svg" alt="IBM" style="height: 10px;" /> IBM</span>
          <span style="display: inline-flex; align-items: center; gap: 3px; font-size: 8px; font-weight: 600; color: #334155; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 2px 5px;"><img src="assets/logos/huawei.svg" alt="Huawei" style="height: 10px;" /> Huawei</span>
          <span style="display: inline-flex; align-items: center; gap: 3px; font-size: 8px; font-weight: 600; color: #334155; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 2px 5px;"><img src="assets/logos/vmware.svg" alt="VMware" style="height: 10px;" /> VMware</span>
          <span style="display: inline-flex; align-items: center; gap: 3px; font-size: 8px; font-weight: 600; color: #334155; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 2px 5px;"><img src="assets/logos/sangfor.svg" alt="Sangfor" style="height: 10px;" /> Sangfor</span>
          <span style="display: inline-flex; align-items: center; gap: 3px; font-size: 8px; font-weight: 600; color: #334155; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 2px 5px;"><img src="assets/logos/lenovo.svg" alt="Lenovo" style="height: 10px;" /> Lenovo</span>
        </div>
      </div>

      <!-- 3. EXECUTIVE SUMMARY -->
      <div style="margin-bottom: 9px;">
        <h2 style="font-size: 10.5px; font-weight: 800; color: #0f172a; text-transform: uppercase; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; margin: 0 0 3px 0;">
          ${isEn ? 'Executive Profile Summary' : 'Ringkasan Profil Eksekutif'}
        </h2>
        <p style="margin: 0; color: #334155; font-size: 9px; line-height: 1.4;">
          ${isEn ? p.headline_en : p.headline_id}
        </p>
      </div>

      <!-- 4. CORE ARCHITECTURE & TECHNICAL COMPETENCIES -->
      <div style="margin-bottom: 9px; page-break-inside: avoid; break-inside: avoid;">
        <h2 style="font-size: 10.5px; font-weight: 800; color: #0f172a; text-transform: uppercase; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; margin: 0 0 4px 0;">
          ${isEn ? 'Core Architecture & Technical Competencies' : 'Kompetensi Arsitektur & Teknis'}
        </h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px;">
          ${cvData.presales_competencies.map(c => `
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 4px 6px;">
              <strong style="font-size: 8.5px; color: #166534; display: block; margin-bottom: 1px;">${c.category}</strong>
              <ul style="margin: 0; padding-left: 10px; color: #334155; font-size: 7.5px; line-height: 1.2;">
                ${c.skills.slice(0, 4).map(s => `<li>${s}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 5. DELIVERY PIPELINE -->
      <div style="margin-bottom: 9px; page-break-inside: avoid; break-inside: avoid;">
        <h2 style="font-size: 10.5px; font-weight: 800; color: #0f172a; text-transform: uppercase; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; margin: 0 0 3px 0;">
          ${isEn ? 'Architecture Sizing & Delivery Pipeline' : 'Metodologi Delivery Arsitektur Solusi'}
        </h2>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 3px; text-align: center;">
          <div style="border: 1px solid #e2e8f0; border-radius: 3px; padding: 2px 2px; background: #f8fafc;">
            <div style="font-size: 7px; font-weight: bold; color: #16a34a;">01. ASSESS</div>
            <div style="font-size: 7px; color: #334155;">Workload & IOPS</div>
          </div>
          <div style="border: 1px solid #e2e8f0; border-radius: 3px; padding: 2px 2px; background: #f8fafc;">
            <div style="font-size: 7px; font-weight: bold; color: #16a34a;">02. SIZING</div>
            <div style="font-size: 7px; color: #334155;">BoQ & Resiliency</div>
          </div>
          <div style="border: 1px solid #e2e8f0; border-radius: 3px; padding: 2px 2px; background: #f8fafc;">
            <div style="font-size: 7px; font-weight: bold; color: #16a34a;">03. VALIDATE</div>
            <div style="font-size: 7px; color: #334155;">PoC & Failover</div>
          </div>
          <div style="border: 1px solid #e2e8f0; border-radius: 3px; padding: 2px 2px; background: #f8fafc;">
            <div style="font-size: 7px; font-weight: bold; color: #16a34a;">04. DESIGN</div>
            <div style="font-size: 7px; color: #334155;">HLD & LLD Zoning</div>
          </div>
          <div style="border: 1px solid #e2e8f0; border-radius: 3px; padding: 2px 2px; background: #f8fafc;">
            <div style="font-size: 7px; font-weight: bold; color: #16a34a;">05. CUTOVER</div>
            <div style="font-size: 7px; color: #334155;">Zero-Downtime</div>
          </div>
        </div>
      </div>

      <!-- 6. ACADEMIC FOUNDATION -->
      <div style="margin-bottom: 9px; page-break-inside: avoid; break-inside: avoid;">
        <h2 style="font-size: 10.5px; font-weight: 800; color: #0f172a; text-transform: uppercase; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; margin: 0 0 2px 0;">
          ${isEn ? 'Academic Foundation' : 'Pendidikan'}
        </h2>
        <div style="font-size: 8.5px; color: #0f172a;">
          <strong>${isEn ? cvData.education[0].degree : cvData.education[0].degree_id}</strong> - ${cvData.education[0].major}
        </div>
        <div style="font-size: 8px; color: #64748b;">
          ${cvData.education[0].institution} • ${cvData.education[0].year} • ${cvData.education[0].location}
        </div>
      </div>

      <!-- 7. GLOBAL VENDOR ACCREDITATIONS (21 CREDENTIALS) -->
      <div style="margin-bottom: 10px; page-break-inside: avoid; break-inside: avoid;">
        <h2 style="font-size: 10.5px; font-weight: 800; color: #0f172a; text-transform: uppercase; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; margin: 0 0 4px 0;">
          ${isEn ? 'Global Vendor Accreditations (21 Credentials)' : 'Sertifikasi Global (21 Sertifikasi)'}
        </h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5px;">
          ${cvData.certifications.map(c => `
            <div style="font-size: 7.5px; color: #334155; padding: 2px 4px; border: 1px solid #e2e8f0; border-radius: 3px; background: #f8fafc;">
              <strong style="color: #166534;">[${c.vendor}]</strong> ${c.name} <span style="color: #64748b;">(${c.year})</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- VISUAL ANALYTICS: SKILLS & EXPERIENCE DISTRIBUTION -->
      ${skillImg && expImg ? `
        <div style="margin-bottom: 0px; page-break-inside: avoid; break-inside: avoid;">
          <h2 style="font-size: 10.5px; font-weight: 800; color: #0f172a; text-transform: uppercase; border-bottom: 1.5px solid #16a34a; padding-bottom: 2px; margin: 0 0 4px 0;">
            ${isEn ? 'Visual Analytics: Skills & Experience Distribution' : 'Analitik Visual: Distribusi Keahlian & Proyek'}
          </h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <div style="text-align: center; background: #080c09; border: 1px solid rgba(74, 222, 128, 0.4); border-radius: 6px; padding: 5px 6px;">
              <div style="font-size: 8px; font-weight: bold; color: #4ade80; margin-bottom: 2px;">📊 SKILLS DISTRIBUTION</div>
              <img src="${skillImg}" alt="Skills Chart" style="width: 100%; max-height: 130px; object-fit: contain;" />
            </div>
            <div style="text-align: center; background: #080c09; border: 1px solid rgba(74, 222, 128, 0.4); border-radius: 6px; padding: 5px 6px;">
              <div style="font-size: 8px; font-weight: bold; color: #4ade80; margin-bottom: 2px;">🧩 PROFESSIONAL EXPERIENCE & ENTERPRISE PROJECTS</div>
              <img src="${expImg}" alt="Experience Chart" style="width: 100%; max-height: 130px; object-fit: contain;" />
            </div>
          </div>
        </div>
      ` : ''}

      <!-- 8. MASTER ENTERPRISE PROJECTS (FORCED PAGE BREAK TO TOP OF PAGE 2) -->
      <div class="pdf-page-break" style="page-break-before: always; break-before: page; margin-top: 14px; margin-bottom: 14px;">
        <h2 style="font-size: 11px; font-weight: 800; color: #0f172a; text-transform: uppercase; border-bottom: 1.5px solid #16a34a; padding-bottom: 3px; margin: 0 0 6px 0; page-break-after: avoid; break-after: avoid;">
          ${isEn ? 'Master Enterprise Projects Portfolio (54 Engagements)' : 'Portofolio Master Proyek Enterprise (54 Proyek)'}
        </h2>
        <div style="display: flex; flex-direction: column; gap: 4.5px;">
          ${cvData.projects.map((proj, idx) => {
            const title = isEn && proj.title_en ? proj.title_en : proj.title;
            const tasks = isEn && proj.tasks_en && proj.tasks_en.length ? proj.tasks_en : proj.tasks;
            return `
              <div class="pdf-project-row" style="border: 1px solid #e2e8f0; border-radius: 4px; padding: 4px 6px; background: #ffffff; page-break-inside: avoid; break-inside: avoid;">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                  <strong style="font-size: 9px; color: #0f172a;">${idx + 1}. ${title}</strong>
                  <span style="font-weight: bold; font-size: 8.5px; color: #16a34a; margin-left: 6px; flex-shrink: 0;">${proj.year}</span>
                </div>
                <div style="font-size: 8px; color: #64748b; margin-bottom: 1px;">
                  <strong>${proj.client}</strong> (${proj.client_tier || 'Enterprise'}) • <span style="color: #0284c7;">${proj.role}</span>
                </div>
                <ul style="margin: 0; padding-left: 12px; color: #334155; font-size: 7.5px; line-height: 1.2;">
                  ${tasks.map(t => `<li>${t}</li>`).join('')}
                </ul>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 9. DIRECT CONTACT & BARCODE / QR CODES -->
      <div style="margin-top: 14px; padding: 12px 14px; background: #f8fafc; border: 1.5px solid #16a34a; border-radius: 6px; page-break-inside: avoid; break-inside: avoid;">
        <div style="font-size: 11px; font-weight: 800; color: #0f172a; text-transform: uppercase; margin-bottom: 6px;">
          ${isEn ? 'Direct Contact & Professional Network' : 'Kontak Langsung & Jaringan Profesional'}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 16px;">
          <div style="font-size: 8.5px; color: #334155; line-height: 1.45;">
            <div>✉️ <strong>Email:</strong> ${p.email}</div>
            <div>💼 <strong>LinkedIn:</strong> ${p.social.linkedin}</div>
            <div>🌐 <strong>Web Portfolio:</strong> ${p.social.portfolio}</div>
            <div>📍 <strong>Location:</strong> Jakarta / Tangerang, Indonesia</div>
            <div style="margin-top: 4px; color: #64748b; font-size: 8px;">Available for enterprise architecture consulting and mission-critical cloud migrations.</div>
          </div>
          <div style="display: flex; gap: 14px; align-items: center; flex-shrink: 0;">
            <div style="text-align: center;">
              <div style="font-size: 8px; font-weight: bold; color: #0f172a; margin-bottom: 2px;">LinkedIn QR</div>
              <img src="assets/qr-linkedin.png" alt="LinkedIn QR" style="width: 58px; height: 58px; border: 1px solid #cbd5e1; border-radius: 4px; padding: 2px; background: #ffffff;" />
            </div>
            <div style="text-align: center;">
              <div style="font-size: 8px; font-weight: bold; color: #0f172a; margin-bottom: 2px;">Portfolio QR</div>
              <img src="assets/qr-portfolio.png" alt="Portfolio QR" style="width: 58px; height: 58px; border: 1px solid #cbd5e1; border-radius: 4px; padding: 2px; background: #ffffff;" />
            </div>
          </div>
        </div>
      </div>

    </div>
  `;

  document.body.appendChild(container);

  const opt = {
    margin: [8, 8, 8, 8],
    filename: `Eka_Taris_Ariyudi_Solution_Architect_Complete_CV.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    },
    pagebreak: {
      mode: ['css', 'legacy'],
      before: '.pdf-page-break',
      avoid: ['.pdf-project-row', 'h2', 'ul']
    }
  };

  try {
    await new Promise(resolve => setTimeout(resolve, 120));

    if (window.html2pdf) {
      await window.html2pdf().set(opt).from(container).save();
    } else {
      window.print();
    }
  } catch (err) {
    console.error('PDF export error:', err);
    window.print();
  } finally {
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
    if (document.body.contains(overlay)) {
      document.body.removeChild(overlay);
    }
    if (btn) {
      btn.innerHTML = originalText;
      btn.style.pointerEvents = 'auto';
    }
  }
}
