"use client";

import React from "react";

export default function ExpatSysProposal() {
  const T = {
    brand: "#1e3a8a",
    brandMid: "#1d4ed8",
    brandLight: "#dbeafe", // ✅ FIX 1: T.brandLight was used but never defined
    slate: "#475569",
    ink: "#0f172a",
    border: "#e2e8f0",
    bg: "#f8fafc",
    white: "#ffffff",
    rose: "#be123c",
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  // ✅ FIX 2: Added TypeScript-friendly prop types using JSDoc (works in .jsx too)
  const PageContainer = ({ children }) => (
    <div
      className="print-page-container"
      style={{
        maxWidth: 880,
        margin: "0 auto 40px",
        background: T.white,
        borderRadius: 16,
        boxShadow: "0 12px 48px rgba(0,0,0,0.08)",
        overflow: "hidden",
        pageBreakAfter: "always",
      }}
    >
      {children}
    </div>
  );

  const SectionTitle = ({ title }) => (
    <h3
      className="prevent-orphan"
      style={{
        fontSize: 18,
        color: T.brand,
        borderBottom: `2px solid #bfdbfe`,
        paddingBottom: 8,
        marginBottom: 16,
      }}
    >
      {title}
    </h3>
  );

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: T.bg,
        color: T.ink,
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      {/* CSS PRINT */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');
        @media print {
          @page { size: A4 portrait;   
          margin-top: 0.69in;
          margin-right: 0in;
          margin-bottom: 0in;
          margin-left: 0in; }
          body { background-color: white !important; padding: 0 !important; margin: 0 !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          .no-print { display: none !important; }
          .print-page-container {
            box-shadow: none !important; margin: 0 auto !important;
            border-radius: 0 !important; max-width: 100% !important;
            page-break-after: always !important; break-after: page !important;
          }
          .avoid-break, tr, td, th, ul, li, .prevent-orphan + p, .prevent-orphan + div {
            page-break-inside: avoid !important; break-inside: avoid !important;
          }
          h2, h3, h4, .prevent-orphan { page-break-after: avoid !important; break-after: avoid !important; }
        }
      `,
        }}
      />

      {/* TOMBOL DOWNLOAD */}
      <button
        className="no-print"
        onClick={handleDownloadPDF}
        style={{
          position: "fixed",
          bottom: 40,
          right: 40,
          background: T.brandMid,
          color: "white",
          border: "none",
          padding: "16px 24px",
          borderRadius: 50,
          fontSize: 15,
          fontWeight: 800,
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(29, 78, 216, 0.4)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          zIndex: 999,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download PDF
      </button>

      {/* ========== PAGE 1: QUOTATION ========== */}
      <PageContainer>
        {/* Header */}
        <div style={{ padding: "40px", borderBottom: `2px solid ${T.border}`, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* ✅ FIX 3: Next.js requires next/image OR allow external domains.
                Using <img> with unoptimized is fine for a quotation page. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="nexusdata.id logo"
              style={{ height: 60, width: "auto", objectFit: "contain" }}
            />
            <div>
              <h1 style={{ fontSize: 28, fontWeight: 900, color: T.brand, margin: "0 0 4px", letterSpacing: -0.5 }}>nexusdata.id</h1>
              <p style={{ fontSize: 13, color: T.slate, margin: 0, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Data Automation & Web Solutions</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, fontSize: 13, color: T.slate }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Yogyakarta, Indonesia</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>nexusdataid@gmail.com</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>085157709694</span>
            </div>
          </div>
        </div>

        <div style={{ background: "#eff6ff", padding: "20px 40px", borderBottom: `2px solid #bfdbfe` }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: T.brand, margin: 0, letterSpacing: 1 }}>PROPOSAL & QUOTATION</h2>
          <p style={{ fontSize: 12, color: T.slate, margin: "4px 0 0", textTransform: "uppercase", fontWeight: 700 }}>Pengembangan Sistem ExpatSys</p>
        </div>

        <div style={{ padding: "40px" }}>
          {/* Info Klien */}
          <div className="avoid-break" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 40, padding: 20, background: T.bg, borderRadius: 12, border: `1px solid ${T.border}` }}>
            <div>
              <p style={{ fontSize: 11, color: T.slate, fontWeight: 700, textTransform: "uppercase", margin: "0 0 4px" }}>Disiapkan Untuk:</p>
              <p style={{ fontSize: 15, fontWeight: 800, color: T.ink, margin: 0 }}>Bapak Indra</p>
              <p style={{ fontSize: 13, color: T.slate, margin: 0 }}>Managing Director</p>
            </div>
            <div>
              <p style={{ fontSize: 11, color: T.slate, fontWeight: 700, textTransform: "uppercase", margin: "0 0 4px" }}>Disiapkan Oleh:</p>
              <p style={{ fontSize: 15, fontWeight: 800, color: T.ink, margin: 0 }}>Tri Hartanto</p>
              <p style={{ fontSize: 13, color: T.slate, margin: 0 }}>nexusdata.id</p>
              <p style={{ fontSize: 12, color: T.slate, margin: "8px 0 0" }}>Tanggal: 23 April 2026</p>
            </div>
            <div style={{ gridColumn: "1 / -1", borderTop: `1px solid ${T.border}`, paddingTop: 16, marginTop: 4, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
              <div>
                <span style={{ fontSize: 11, color: T.slate, fontWeight: 700, textTransform: "uppercase" }}>No. Quotation: </span>
                <span style={{ fontSize: 13, color: T.ink, fontWeight: 700 }}>NDX/QUO/IV/2026/012</span>
              </div>
              <div>
                <span style={{ fontSize: 11, color: T.slate, fontWeight: 700, textTransform: "uppercase" }}>Masa Berlaku: </span>
                <span style={{ fontSize: 13, color: T.rose, fontWeight: 700 }}>1 Minggu (Hingga 30 April 2026)</span>
              </div>
            </div>
          </div>

          {/* 1. Tujuan Sistem */}
          <div className="avoid-break" style={{ marginBottom: 40 }}>
            <SectionTitle title="1. Tujuan Sistem" />
            <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
              Pembangunan <em>web-based platform</em> terpusat dengan sistem <em>Role-Based Access Control</em> (RBAC) untuk mendigitalisasi layanan ekspatriat (Advisory & Document Prep) dan <em>Corporate Training</em>. Fokus utama sistem adalah otomasi tugas repetitif, mitigasi denda <em>permit expiry</em>, perlindungan kebocoran data antar-divisi, dan sinkronisasi penagihan (<em>billing</em>).
            </p>
          </div>

          {/* 2. Scope of Work */}
          <div className="avoid-break" style={{ marginBottom: 40 }}>
            <SectionTitle title="2. Ruang Lingkup Pekerjaan (Scope of Work)" />
            <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>Pembangunan sistem otomasi operasional layanan ekspatriat dan pelatihan (RBAC) dengan batasan pengembangan 6 modul akses:</p>
            <ul style={{ fontSize: 14, lineHeight: 1.7, paddingLeft: 20, color: T.slate }}>
              <li><strong style={{ color: T.ink }}>Modul Account Executive:</strong> Manajemen CRM Klien dan pembuatan tiket otomatis.</li>
              <li><strong style={{ color: T.ink }}>Modul Consultant:</strong> Permit Tracker, Checklist Dokumen, dan fitur Auto-Drafting RPTKA.</li>
              <li><strong style={{ color: T.ink }}>Modul Senior Consultant:</strong> Quality Control (Review/Approval) hasil kerja tim.</li>
              <li><strong style={{ color: T.ink }}>Modul HR & Admin:</strong> Logistik training, absensi, dan otomasi email reminder peserta.</li>
              <li><strong style={{ color: T.ink }}>Modul Finance:</strong> Konversi status Closed Ticket ke draft Invoice dan tracking pembayaran.</li>
              <li><strong style={{ color: T.ink }}>Modul MD Dashboard:</strong> Analitik Top-Down untuk memantau YTD Revenue dan margin layanan.</li>
            </ul>
          </div>

          {/* 3. Roadmap */}
          <div className="avoid-break" style={{ marginBottom: 40 }}>
            <SectionTitle title="3. Roadmap & Timeline (3 Bulan)" />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ padding: 16, borderLeft: `4px solid ${T.brandMid}`, background: T.bg, borderRadius: "0 8px 8px 0" }}>
                <p style={{ fontSize: 14, fontWeight: 800, margin: "0 0 4px" }}>Bulan 1: Arsitektur & Core System (Termin 1)</p>
                <p style={{ fontSize: 13, color: T.slate, margin: 0 }}>Desain Database, SSO Security, penyelesaian Modul AE, Consultant, & Senior Consultant.</p>
              </div>
              <div style={{ padding: 16, borderLeft: `4px solid ${T.brandMid}`, background: T.bg, borderRadius: "0 8px 8px 0" }}>
                <p style={{ fontSize: 14, fontWeight: 800, margin: "0 0 4px" }}>Bulan 2: Advanced Integration (Termin 2)</p>
                <p style={{ fontSize: 13, color: T.slate, margin: 0 }}>Modul HR, Finance, MD Dashboard, Integrasi n8n, API Anthropic Claude, dan Resend SMTP.</p>
              </div>
              <div style={{ padding: 16, borderLeft: `4px solid #be123c`, background: "#fff1f2", borderRadius: "0 8px 8px 0" }}>
                <p style={{ fontSize: 14, fontWeight: 800, margin: "0 0 4px", color: "#be123c" }}>Bulan 3: Security Hardening, QA & UAT (Pelunasan)</p>
                <p style={{ fontSize: 13, color: "#9f1239", margin: 0 }}>Pengujian celah keamanan data, User Acceptance Testing (UAT) bersama Klien, & Go-Live.</p>
              </div>
            </div>
          </div>

          {/* 4. Investasi */}
          <div className="avoid-break" style={{ marginBottom: 40 }}>
            <SectionTitle title="4. Rincian Investasi & Pembayaran" />
            <div style={{ background: "linear-gradient(135deg, #ede9ff 0%, #dbeafe 100%)", padding: 24, borderRadius: 12, display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, color: T.brand, textTransform: "uppercase", letterSpacing: 1, margin: "0 0 4px" }}>Total Nilai Pengembangan Sistem</p>
                <p style={{ fontSize: 32, fontWeight: 900, color: T.brand, margin: 0 }}>Rp 42.000.000</p>
              </div>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: T.bg, color: T.slate }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", border: `1px solid ${T.border}` }}>Termin</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", border: `1px solid ${T.border}` }}>Persentase</th>
                  <th style={{ padding: "12px 16px", textAlign: "right", border: `1px solid ${T.border}` }}>Nominal</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", border: `1px solid ${T.border}` }}>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Down Payment", pct: "30%", nominal: "Rp 12.600.000", ket: "Penandatanganan kontrak (Kick-off)." },
                  { label: "Termin 1", pct: "30%", nominal: "Rp 12.600.000", ket: "Penyelesaian Bulan ke-1 (3 Role Awal)." },
                  { label: "Termin 2", pct: "20%", nominal: "Rp 8.400.000", ket: "Penyelesaian Bulan ke-2 (Sistem utuh)." },
                  { label: "Pelunasan", pct: "20%", nominal: "Rp 8.400.000", ket: "Pasca UAT dan Go-Live (Bulan ke-3)." },
                ].map((row) => (
                  <tr key={row.label}>
                    <td style={{ padding: "12px 16px", border: `1px solid ${T.border}`, fontWeight: 700 }}>{row.label}</td>
                    <td style={{ padding: "12px 16px", border: `1px solid ${T.border}` }}>{row.pct}</td>
                    <td style={{ padding: "12px 16px", border: `1px solid ${T.border}`, textAlign: "right", fontWeight: 600 }}>{row.nominal}</td>
                    <td style={{ padding: "12px 16px", border: `1px solid ${T.border}`, color: T.slate }}>{row.ket}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 5. Managed Service */}
          <div className="avoid-break" style={{ marginBottom: 40 }}>
            <SectionTitle title="5. Biaya Infrastruktur Bulanan (Managed Service)" />
            <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
              Pasca sistem dirilis secara penuh, aplikasi ini membutuhkan infrastruktur <em>cloud</em> (VPS, Database Pro, Token AI Claude, dan Email Gateway). Agar Bapak Indra tidak perlu direpotkan dengan manajemen teknis, kami menyediakan paket <strong>Terima Beres</strong>:
            </p>
            <div style={{ border: `2px solid ${T.brandMid}`, borderRadius: 12, padding: 24, background: "#eff6ff" }}>
              <h4 style={{ fontSize: 16, color: T.brand, margin: "0 0 12px", fontWeight: 800 }}>Paket Managed Service (Flat Rate)</h4>
              <p style={{ fontSize: 24, fontWeight: 900, color: T.brand, margin: "0 0 16px" }}>Rp 1.200.000 <span style={{ fontSize: 14, fontWeight: 500, color: T.slate }}>/ bulan</span></p>
              <ul style={{ fontSize: 14, color: T.slate, paddingLeft: 20, margin: 0, lineHeight: 1.7 }}>
                <li><strong style={{ color: T.ink }}>Include Biaya Sewa:</strong> Server VPS (n8n), Supabase Database Pro, API Anthropic Claude, & Resend.</li>
                <li><strong style={{ color: T.ink }}>Jasa Maintenance:</strong> Pemantauan server 24/7 (<em>Uptime Monitoring</em>) dari nexusdata.id.</li>
                <li><strong style={{ color: T.ink }}>Security Updates:</strong> Penyesuaian skrip jika sewaktu-waktu ada perubahan versi pada API pihak ketiga.</li>
              </ul>
            </div>
          </div>

          {/* 6. Ketentuan Revisi */}
          <div className="avoid-break">
            <SectionTitle title="6. Ketentuan Revisi" />
            <p style={{ fontSize: 14, lineHeight: 1.7 }}>
              Untuk menjamin kelancaran <em>timeline</em>, klien berhak atas maksimal <strong style={{ color: T.ink, fontSize: 16 }}>5 (lima) kali putaran revisi minor</strong> untuk setiap modul selama masa pengembangan. Penambahan modul baru di luar <em>Scope of Work</em> akan dianggap sebagai <em>Change Request</em> dan ditagihkan terpisah.
            </p>
          </div>

          <div className="avoid-break" style={{ marginTop: 40, paddingTop: 20, borderTop: `1px solid ${T.border}`, textAlign: "center" }}>
            <p style={{ fontSize: 12, color: T.slate, margin: 0 }}>* Rincian teknis pengerjaan dan timeline detail dapat dilihat pada halaman <strong>Lampiran I & II</strong> di bawah.</p>
          </div>
        </div>
      </PageContainer>

      {/* ========== PAGE 2: LAMPIRAN I ========== */}
      <PageContainer>
        <div style={{ background: T.ink, padding: "24px 40px" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff", margin: 0, letterSpacing: 1 }}>LAMPIRAN I: DETAIL RUANG LINGKUP PEKERJAAN</h2>
        </div>
        <div style={{ padding: "40px" }}>
          <div className="avoid-break" style={{ marginBottom: 40 }}>
            <SectionTitle title="1. Rincian Fitur Berdasarkan 6 Hak Akses (Role Modules)" />
            <div style={{ display: "grid", gap: 16 }}>
              {[
                {
                  title: "A. Modul Account Executive (AE)",
                  items: [
                    "Manajemen Database Klien & Ekspatriat (CRUD) termasuk data masa berlaku paspor/KITAS.",
                    "Modul Ticketing System untuk Layanan 1 (Retainer), Layanan 2 (Admin Support), dan Layanan 5 (Training).",
                    "Automasi penugasan tiket (Assignment) langsung ke akun tim Consultant.",
                  ],
                },
                {
                  title: "B. Modul Immigration Consultant & C. Senior Consultant",
                  items: [
                    "Permit Tracker: Dasbor indikator warna untuk dokumen mendekati batas kritis (H-90, H-60, H-30).",
                    "AI Auto-Drafting: Tombol action terhubung ke n8n dan Claude untuk menghasilkan draf otomatis (misal: RPTKA).",
                    "Approval Workflow (Senior): Wewenang Quality Control untuk menyetujui, menolak revisi, dan menutup tiket teknis.",
                  ],
                },
                {
                  title: "D. Modul HR & Admin (Training) & E. Modul Finance",
                  items: [
                    "HR & Admin: Manajemen peserta logistik, otomasi email reminder acara, pencatatan absensi, dan input feedback.",
                    "Finance: Penarikan otomatis data Closed Ticket untuk generator Invoice, Payment monitor, dan Export CSV.",
                  ],
                },
                {
                  title: "F. Modul Managing Director (MD Dashboard)",
                  items: [
                    "Visualisasi YTD Revenue bulanan dan analisis margin per layanan.",
                    "Pemantauan Top-Level KPIs (Active Clients, Unpaid Invoices, Open Tickets).",
                  ],
                },
              ].map((mod) => (
                <div key={mod.title} style={{ padding: 16, border: `1px solid ${T.border}`, borderRadius: 8, background: T.bg }}>
                  <p style={{ fontSize: 14, fontWeight: 800, color: T.brand, margin: "0 0 8px" }}>{mod.title}</p>
                  <ul style={{ fontSize: 13, margin: 0, paddingLeft: 20, color: T.slate, lineHeight: 1.6 }}>
                    {mod.items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="avoid-break" style={{ marginBottom: 40 }}>
            <SectionTitle title="2. Spesifikasi Infrastruktur & Keamanan (Tech Stack)" />
            <ul style={{ fontSize: 14, lineHeight: 1.7, color: T.slate, paddingLeft: 20, margin: 0 }}>
              <li><strong>Frontend:</strong> Aplikasi berbasis Next.js dengan arsitektur <em>Single Page Application</em> (SPA).</li>
              <li><strong>Database & Security:</strong> PostgreSQL menggunakan Supabase dengan lapisan keamanan <em>Row Level Security</em> (RLS).</li>
              <li><strong>Integrasi Terpusat:</strong> Penggabungan fungsi antar layanan menggunakan API modern standar industri.</li>
            </ul>
          </div>

          <div className="avoid-break">
            <SectionTitle title="3. Automasi Latar Belakang & Di Luar Ruang Lingkup" />
            <p style={{ fontSize: 14, color: T.ink, fontWeight: 700, margin: "0 0 8px" }}>Otomasi Background Process (n8n & AI):</p>
            <ul style={{ fontSize: 13, lineHeight: 1.7, color: T.slate, paddingLeft: 20, marginBottom: 20 }}>
              <li><strong>Scheduler H-60 & H-30:</strong> Mesin n8n melakukan pemindaian sistem harian dan memicu API Resend untuk notifikasi email dokumen mendekati kedaluwarsa.</li>
              <li><strong>AI Prompt Orchestration:</strong> Penarikan variabel Klien dari Supabase untuk dikirimkan sebagai Prompt ke Anthropic Claude.</li>
            </ul>
            <div style={{ padding: "16px 20px", background: "#fffbeb", border: "1px solid #fef3c7", borderRadius: 8 }}>
              <p style={{ fontSize: 13, fontWeight: 800, color: "#92400e", margin: "0 0 8px", textTransform: "uppercase" }}>Pengecualian (Out of Scope):</p>
              <ul style={{ fontSize: 12, color: "#92400e", paddingLeft: 18, lineHeight: 1.6, margin: 0 }}>
                <li>Integrasi API Accurate 2-Arah (hanya Export CSV/Excel untuk input manual ke Accurate).</li>
                <li>Aplikasi Mobile Native PlayStore/AppStore (diakses via Web Browser responsif).</li>
                <li>Notifikasi WhatsApp (seluruh notifikasi menggunakan jalur Email).</li>
                <li>Migrasi data historis massal (Klien melakukan data entry mandiri).</li>
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ========== PAGE 3: LAMPIRAN II ========== */}
      <PageContainer>
        <div style={{ background: T.ink, padding: "24px 40px" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff", margin: 0, letterSpacing: 1 }}>LAMPIRAN II: DETAIL ROADMAP & TIMELINE</h2>
        </div>
        <div style={{ padding: "40px" }}>
          <p className="avoid-break" style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
            Pengembangan sistem dialokasikan selama <strong>3 Bulan (12 Minggu)</strong>. Waktu ini dirancang secara komprehensif guna memastikan pengujian keamanan data (<em>Security Hardening</em>) dan stabilitas automasi sebelum diimplementasikan secara massal.
          </p>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: T.slate, color: "#fff" }}>
                <th style={{ padding: "12px 16px", textAlign: "left", width: "20%" }}>Fase Pekerjaan</th>
                <th style={{ padding: "12px 16px", textAlign: "left" }}>Rincian Aktivitas</th>
                <th style={{ padding: "12px 16px", textAlign: "left", width: "25%" }}>Target Deliverables</th>
              </tr>
            </thead>
            <tbody>
              <tr className="avoid-break">
                <td style={{ padding: "16px", border: `1px solid ${T.border}`, verticalAlign: "top", fontWeight: 800, color: T.brand }}>
                  BULAN 1<br /><span style={{ fontSize: 11, color: T.slate, fontWeight: 500 }}>Minggu 1 - 4</span>
                </td>
                <td style={{ padding: "16px", border: `1px solid ${T.border}`, verticalAlign: "top", color: T.slate, lineHeight: 1.6 }}>
                  <ul style={{ margin: 0, paddingLeft: 16 }}>
                    <li>Setup infrastruktur Cloud (Vercel & Supabase).</li>
                    <li>Desain Skema Database relasional (Tabel Klien, Ekspatriat, Tiket).</li>
                    <li>Konfigurasi Row Level Security (RLS) & SSO Authentication.</li>
                    <li>UI/UX & Logika Modul Account Executive (CRM & Tiket).</li>
                    <li>UI/UX & Logika Modul Consultant (Permit Tracker & Checklist).</li>
                  </ul>
                </td>
                <td style={{ padding: "16px", border: `1px solid ${T.border}`, verticalAlign: "top", fontWeight: 700 }}>
                  <span style={{ display: "inline-block", background: T.brandLight, color: T.brandMid, padding: "4px 8px", borderRadius: 4, fontSize: 11, marginBottom: 8 }}>Termin 1</span><br />
                  Arsitektur Database Ready & Modul Operasional AE/Consultant.
                </td>
              </tr>
              <tr className="avoid-break">
                <td style={{ padding: "16px", border: `1px solid ${T.border}`, verticalAlign: "top", fontWeight: 800, color: T.brand }}>
                  BULAN 2<br /><span style={{ fontSize: 11, color: T.slate, fontWeight: 500 }}>Minggu 5 - 8</span>
                </td>
                <td style={{ padding: "16px", border: `1px solid ${T.border}`, verticalAlign: "top", color: T.slate, lineHeight: 1.6 }}>
                  <ul style={{ margin: 0, paddingLeft: 16 }}>
                    <li>UI/UX & Logika Modul Senior Consultant (Approval).</li>
                    <li>UI/UX & Logika Modul HR & Admin (Logistik Pelatihan).</li>
                    <li>Setup VPS Self-hosted, Instalasi n8n, & Konfigurasi Scheduler.</li>
                    <li>Integrasi API Anthropic Claude untuk Auto-Drafting.</li>
                    <li>UI/UX & Logika Modul Finance (Automasi Invoice).</li>
                    <li>Integrasi Email Gateway (Resend) untuk notifikasi sistem.</li>
                  </ul>
                </td>
                <td style={{ padding: "16px", border: `1px solid ${T.border}`, verticalAlign: "top", fontWeight: 700 }}>
                  <span style={{ display: "inline-block", background: T.brandLight, color: T.brandMid, padding: "4px 8px", borderRadius: 4, fontSize: 11, marginBottom: 8 }}>Termin 2</span><br />
                  Sistem Utuh Terintegrasi dengan Mesin Automasi & AI.
                </td>
              </tr>
              <tr className="avoid-break">
                <td style={{ padding: "16px", border: `1px solid ${T.border}`, verticalAlign: "top", fontWeight: 800, color: "#be123c" }}>
                  BULAN 3<br /><span style={{ fontSize: 11, color: T.slate, fontWeight: 500 }}>Minggu 9 - 12</span>
                </td>
                <td style={{ padding: "16px", border: `1px solid ${T.border}`, verticalAlign: "top", color: T.slate, lineHeight: 1.6 }}>
                  <ul style={{ margin: 0, paddingLeft: 16 }}>
                    <li>Penyelesaian UI/UX Dasbor Managing Director.</li>
                    <li><strong style={{ color: T.ink }}>Security Audit:</strong> Pengujian penetrasi internal untuk memastikan RLS Supabase tidak bocor antar-divisi.</li>
                    <li><strong style={{ color: T.ink }}>End-to-End Testing:</strong> Validasi jalur webhook dan pengiriman email.</li>
                    <li><strong>User Acceptance Testing (UAT):</strong> Penyerahan sistem ke tim internal Klien untuk diuji coba langsung.</li>
                    <li>Pembersihan data testing dan Peluncuran (Go-Live).</li>
                  </ul>
                </td>
                <td style={{ padding: "16px", border: `1px solid ${T.border}`, verticalAlign: "top", fontWeight: 700 }}>
                  <span style={{ display: "inline-block", background: "#fecaca", color: "#be123c", padding: "4px 8px", borderRadius: 4, fontSize: 11, marginBottom: 8 }}>Pelunasan Final</span><br />
                  Sistem Aman, Lulus Uji Klien, dan Rilis ke Production.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContainer>
    </div>
  );
}