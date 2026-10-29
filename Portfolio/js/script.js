/**
 * ============================================================================
 * AMR MOHAMED — DATA ANALYTICS & BUSINESS INTELLIGENCE PORTFOLIO
 * Main Script: script.js
 * ============================================================================
 * 
 * PART 14: PROJECT LINK & CONTACT CONFIGURATION
 * Update the configuration object below with your actual external links,
 * social profile URLs, and project repository or dashboard links.
 * When real URLs (starting with http:// or https://) are provided, the buttons
 * and links throughout the site will automatically open them.
 */

const CONFIG = {
  // Personal & Professional Identity
  fullName: "Amr Mohamed Sleem Mahmoud",
  displayName: "Amr Mohamed",
  role: "Junior Data Analyst | Business Intelligence & Data Analytics",
  location: "Egypt",

  // Contact & Social Media Links
  email: "amr406593@gmail.com",
  linkedin: "https://www.linkedin.com/in/amr-sleem-863a55362?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  github: "mailto:amr406593@gmail.com?subject=GitHub%20Repository%20Inquiry",

  // Project Repositories & Published Dashboards
  projects: {
    chaiMasr: "[CHAI_MASR_PROJECT_URL]",                     // Project 01: Chai Masr
    nileCult: "[NILECULT_PROJECT_URL]",                     // Project 02: NileCult Dairy Factory
    dairySupplyChainDB: "[DAIRYSUPPLYCHAINDB_PROJECT_URL]", // Project 03: DairySupplyChainDB
    olist: "[OLIST_PROJECT_URL]"                            // Project 04: Olist E-commerce
  }
};

/**
 * Detailed Project Case Study Content for Interactive Modals
 */
const PROJECT_MODAL_DATA = {
  "chai-masr": {
    number: "PROJECT 01",
    category: "Business Intelligence & Sales Analytics",
    title: "Chai Masr | Executive Sales & Performance Dashboard",
    scenario: "Simulated Retail Business Scenario",
    summary: "Developed an interactive executive dashboard to analyze sales performance, revenue distribution, product performance, branch performance, and business profitability for a simulated tea retail business.",
    sections: [
      {
        heading: "Business Context & Objectives",
        content: "Chai Masr was designed as an executive-level performance monitoring solution for a simulated FMCG tea retail operation. The primary goals were: (1) Tracking Net Revenue, Average Order Value (AOV), Cost of Goods Sold (COGS), and Total Profit; (2) Identifying monthly sales trends and seasonal surges (specifically Ramadan); (3) Evaluating branch and sales channel efficiency; and (4) Providing non-technical stakeholders with dynamic date and product slicing."
      },
      {
        heading: "Data Transformation & DAX Formulations",
        content: "Using Power Query, source transaction files were cleaned, standardized, and restructured. Key DAX measures were built to calculate dynamic sales trends and margin ratios, including:\n• Total Net Revenue = SUM(Sales[Revenue]) - SUM(Sales[Discounts])\n• Gross Profit Margin = DIVIDE([Total Profit], [Total Net Revenue], 0)\n• Ramadan Season Sales = CALCULATE([Total Net Revenue], Filter(DimDate, DimDate[Season] = \"Ramadan\"))"
      },
      {
        heading: "Key Deliverables",
        items: [
          "Interactive Power BI Dashboard (.pbix) with executive KPI cards and dynamic filters",
          "Structured Power Query M-code transformation workflow",
          "Comprehensive DAX measures table for financial and operational metrics",
          "Visual reporting pack breaking down top 5 products, payment modes, and regional branches"
        ]
      }
    ]
  },
  "nilecult": {
    number: "PROJECT 02",
    category: "Manufacturing Analytics & BI",
    title: "NileCult Dairy Factory | Manufacturing Analytics",
    scenario: "Manufacturing Operational Analysis",
    summary: "An individual data analytics project focused on exploring and analyzing operational data related to a dairy manufacturing business.",
    sections: [
      {
        heading: "Analytical Focus & Scope",
        content: "This project examined manufacturing records from a dairy production facility to uncover operational trends across product lines (pasteurized milk, yogurt, cheeses, and butter). The objective was to prepare, normalize, and inspect multi-stage operational datasets to support reporting on production volumes and consistency."
      },
      {
        heading: "Data Preparation & Technical Approach",
        content: "Excel and Power Query were utilized for initial data profiling, missing-value imputation, date standardizations, and unit alignment. Power BI was then employed to model the cleansed data and generate clear visual reports summarizing batch production outputs and line distribution."
      },
      {
        heading: "Key Deliverables",
        items: [
          "Documented data transformation workflow in Power Query",
          "Production trend analysis reports in Power BI",
          "Standardized manufacturing metrics dataset"
        ]
      }
    ]
  },
  "dairysupplychaindb": {
    number: "PROJECT 03",
    category: "Database Design, SQL Analytics & BI",
    title: "DairySupplyChainDB | Supply Chain Database & Analytics",
    scenario: "Relational Schema & Advanced SQL Querying",
    summary: "An individual project combining relational database design, SQL-based analysis, and business intelligence to explore dairy supply chain operations.",
    sections: [
      {
        heading: "Relational Data Architecture (10 Tables)",
        content: "Designed a 3NF relational database schema composed of 10 tables encompassing Suppliers, Warehouses, Products, Shipments, Batch Details, Quality Inspections, and Transactions. Implemented strict referential integrity with primary and foreign key constraints using SQL DDL scripts."
      },
      {
        heading: "Analytical SQL Implementation (24 Queries)",
        content: "Authored 24 complex SQL queries executed via SQL Server Management Studio (SSMS) and Neon SQL Editor. Queries leveraged Common Table Expressions (CTEs), Window Functions (ROW_NUMBER, DENSE_RANK, LEAD/LAG), aggregate partitioning, and multi-table INNER/LEFT joins to evaluate supplier lead times, shipment delays, and inventory turnaround rates."
      },
      {
        heading: "Power Query & Power BI Integration",
        content: "Power Query was used to ingest and combine multi-year transaction files, which were subsequently mapped into Power BI for relationship modeling and interactive supply chain reporting."
      },
      {
        heading: "Key Deliverables",
        items: [
          "Complete SQL DDL and DML schema creation scripts (10 tables)",
          "24 documented analytical SQL queries featuring CTEs and Window Functions",
          "Integrated Power Query consolidation workflow",
          "Power BI supply chain performance analytical outputs"
        ]
      }
    ]
  },
  "olist": {
    number: "PROJECT 04",
    category: "E-commerce Data Analytics",
    title: "Olist E-commerce | Sales & Delivery Analytics",
    scenario: "Dimensional Modeling & Logistics Analytics",
    summary: "An individual data analytics project using e-commerce data to explore sales performance, geographic revenue distribution, and delivery operations.",
    sections: [
      {
        heading: "Star Schema Dimensional Modeling",
        content: "Transformed large-scale raw e-commerce transaction tables into a clean Star Schema in Power BI. Centered on Fact_Orders and Fact_Order_Items, surrounded by dimension tables for Customers, Products, Sellers, and Geolocation to optimize analytical performance and filter propagation."
      },
      {
        heading: "Analytical Focus & DAX Metrics",
        content: "Evaluated logistics and sales metrics across states, including average delivery turnaround, freight ratio, and regional revenue share. DAX measures were built to calculate Average Delivery Time in days, Delivery Delay percentages, and Repeat Customer order distributions."
      },
      {
        heading: "Key Deliverables",
        items: [
          "Power BI Star Schema data model with 1-to-many relationships",
          "DAX metrics library for commercial and delivery monitoring",
          "Power Query data preparation and cleansing workflows",
          "Interactive dashboard views exploring geographic and logistical trends"
        ]
      }
    ]
  }
};

/**
 * Main Application Controller
 */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initDynamicYear();
  initConfiguredLinks();
  initModals();
  initContactForm();
  initScrollAnimations();
});

/* --------------------------------------------------------------------------
   1. Theme Management (Light / Dark Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  // Retrieve saved preference or detect system preference
  const savedTheme = localStorage.getItem("portfolio_theme");

  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    // Dark mode is the default per specifications
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    // Default to dark unless explicit light preference
    applyTheme(prefersLight ? "light" : "dark");
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("portfolio_theme", newTheme);
    });
  }

  function applyTheme(theme) {
    htmlElement.setAttribute("data-theme", theme);
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
      themeToggleBtn.setAttribute(
        "title",
        theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"
      );
    }
  }

  // Listen to OS theme changes if user has not explicitly chosen
  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
    if (!localStorage.getItem("portfolio_theme")) {
      applyTheme(e.matches ? "light" : "dark");
    }
  });
}

/* --------------------------------------------------------------------------
   2. Responsive Navigation & Active Link Highlighting
   -------------------------------------------------------------------------- */
function initNavigation() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const primaryNav = document.getElementById("primary-navigation");
  const navLinks = document.querySelectorAll(".nav-link");

  if (mobileMenuBtn && primaryNav) {
    mobileMenuBtn.addEventListener("click", () => {
      const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
      toggleMobileMenu(!isExpanded);
    });

    // Close mobile nav when clicking outside
    document.addEventListener("click", (e) => {
      if (
        primaryNav.classList.contains("is-open") &&
        !primaryNav.contains(e.target) &&
        !mobileMenuBtn.contains(e.target)
      ) {
        toggleMobileMenu(false);
      }
    });

    // Close mobile nav on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && primaryNav.classList.contains("is-open")) {
        toggleMobileMenu(false);
        mobileMenuBtn.focus();
      }
    });
  }

  function toggleMobileMenu(open) {
    if (!mobileMenuBtn || !primaryNav) return;
    mobileMenuBtn.setAttribute("aria-expanded", String(open));
    if (open) {
      primaryNav.classList.add("is-open");
    } else {
      primaryNav.classList.remove("is-open");
    }
  }

  // Smooth scroll and auto-close mobile menu on click
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
          toggleMobileMenu(false);
        }
      }
    });
  });

  // IntersectionObserver for active navigation highlighting
  const sections = document.querySelectorAll("section[id]");
  if ("IntersectionObserver" in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeId = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            if (link.getAttribute("href") === `#${activeId}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((sec) => navObserver.observe(sec));
  }
}

/* --------------------------------------------------------------------------
   3. Dynamic Copyright Year
   -------------------------------------------------------------------------- */
function initDynamicYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
   4. Configured Links & Placeholder Interactivity
   -------------------------------------------------------------------------- */
function isPlaceholder(value) {
  if (!value) return true;
  const trimmed = value.trim();
  return (
    trimmed.startsWith("[") ||
    trimmed.startsWith("#") ||
    trimmed === "" ||
    trimmed.toLowerCase().includes("placeholder")
  );
}

function initConfiguredLinks() {
  // Update social & direct contact labels
  const emailLinks = document.querySelectorAll(".configured-email-link");
  const emailLabels = document.querySelectorAll(".link-label-email");
  const linkedinLabels = document.querySelectorAll(".link-label-linkedin");
  const githubLabels = document.querySelectorAll(".link-label-github");

  if (!isPlaceholder(CONFIG.email)) {
    emailLabels.forEach(el => el.textContent = CONFIG.email);
    emailLinks.forEach(el => el.setAttribute("href", `mailto:${CONFIG.email}`));
  }

  if (!isPlaceholder(CONFIG.linkedin)) {
    linkedinLabels.forEach(el => el.textContent = "amr-sleem-863a55362");
  }
  if (!isPlaceholder(CONFIG.github)) {
    githubLabels.forEach(el => el.textContent = CONFIG.github.startsWith("http") ? "GitHub Profile" : "Available Upon Request");
  }

  // Handle external link clicks
  const externalButtons = document.querySelectorAll(".external-link-btn, .configured-email-link");
  externalButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const urlKey = btn.getAttribute("data-url-key");
      const defaultPlaceholder = btn.getAttribute("data-placeholder") || "[URL]";

      let targetUrl = "";
      if (urlKey in CONFIG.projects) {
        targetUrl = CONFIG.projects[urlKey];
      } else if (urlKey in CONFIG) {
        targetUrl = CONFIG[urlKey];
      }

      if (isPlaceholder(targetUrl)) {
        e.preventDefault();
        showPlaceholderDialog(targetUrl || defaultPlaceholder);
      } else {
        // Real URL or Mailto provided
        if (urlKey === "email" || targetUrl.startsWith("mailto:")) {
          window.location.href = targetUrl.startsWith("mailto:") ? targetUrl : `mailto:${targetUrl}`;
          e.preventDefault();
        } else {
          e.preventDefault();
          window.open(targetUrl, "_blank", "noopener,noreferrer");
        }
      }
    });
  });
}

function showPlaceholderDialog(placeholderName) {
  const dialog = document.getElementById("placeholder-dialog");
  const codeElem = document.getElementById("placeholder-code");
  if (dialog && codeElem) {
    codeElem.textContent = placeholderName;
    dialog.classList.add("is-open");
    dialog.setAttribute("aria-hidden", "false");
  }
}

/* --------------------------------------------------------------------------
   5. Modal Dialogs (Projects, Form Feedback, Placeholders)
   -------------------------------------------------------------------------- */
function initModals() {
  const projectModal = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close");
  const modalDismissBtn = document.getElementById("modal-dismiss-btn");
  const viewDetailBtns = document.querySelectorAll(".view-details-btn");

  const placeholderDialog = document.getElementById("placeholder-dialog");
  const placeholderCloseBtn = document.getElementById("placeholder-close-btn");

  const formDialog = document.getElementById("form-dialog");
  const formDialogCloseBtn = document.getElementById("dialog-close-btn");
  const formDialogMailtoBtn = document.getElementById("dialog-mailto-btn");

  // Project Details Click
  viewDetailBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-project");
      if (projectId && PROJECT_MODAL_DATA[projectId]) {
        populateProjectModal(PROJECT_MODAL_DATA[projectId]);
        openModal(projectModal);
      }
    });
  });

  // Modal Closures
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", () => closeModal(projectModal));
  if (modalDismissBtn) modalDismissBtn.addEventListener("click", () => closeModal(projectModal));
  if (placeholderCloseBtn) placeholderCloseBtn.addEventListener("click", () => closeModal(placeholderDialog));
  if (formDialogCloseBtn) formDialogCloseBtn.addEventListener("click", () => closeModal(formDialog));

  // Click outside backdrop to close
  [projectModal, placeholderDialog, formDialog].forEach((modal) => {
    if (!modal) return;
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Global Escape key to close any active modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      [projectModal, placeholderDialog, formDialog].forEach((modal) => {
        if (modal && modal.classList.contains("is-open")) {
          closeModal(modal);
        }
      });
    }
  });

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function populateProjectModal(data) {
    const modalCategory = document.getElementById("modal-category");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");

    if (modalCategory) modalCategory.textContent = `${data.number} • ${data.category}`;
    if (modalTitle) modalTitle.textContent = data.title;

    if (modalBody) {
      let html = `<p class="modal-summary-text">${escapeHtml(data.summary)}</p>`;
      if (data.scenario) {
        html += `<div class="scenario-notice" style="margin-bottom:16px;">
          <span>${escapeHtml(data.scenario)}</span>
        </div>`;
      }

      data.sections.forEach((sec) => {
        html += `<h4>${escapeHtml(sec.heading)}</h4>`;
        if (sec.content) {
          html += `<p style="white-space: pre-line;">${escapeHtml(sec.content)}</p>`;
        }
        if (sec.items && Array.isArray(sec.items)) {
          html += `<ul>`;
          sec.items.forEach((item) => {
            html += `<li>${escapeHtml(item)}</li>`;
          });
          html += `</ul>`;
        }
      });

      modalBody.innerHTML = html;
    }
  }

  function escapeHtml(text) {
    if (!text) return "";
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

/* --------------------------------------------------------------------------
   6. Contact Form Validation & Demonstration Feedback
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const subjectInput = document.getElementById("contact-subject");
  const messageInput = document.getElementById("contact-message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const subjectError = document.getElementById("subject-error");
  const messageError = document.getElementById("message-error");

  const formDialog = document.getElementById("form-dialog");
  const dialogMailtoBtn = document.getElementById("dialog-mailto-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Reset error states
    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(subjectInput, subjectError);
    clearError(messageInput, messageError);

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, nameError, "Please enter your name.");
      isValid = false;
    }

    // Validate Email
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      showError(emailInput, emailError, "Please enter your email address.");
      isValid = false;
    } else if (!emailRegex.test(emailValue)) {
      showError(emailInput, emailError, "Please enter a valid email address.");
      isValid = false;
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      showError(subjectInput, subjectError, "Please enter a subject.");
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      showError(messageInput, messageError, "Please write your message.");
      isValid = false;
    }

    if (isValid) {
      // Build mailto action
      const userSubject = encodeURIComponent(subjectInput.value.trim());
      const userBody = encodeURIComponent(
        `Hello Amr,\n\n${messageInput.value.trim()}\n\nFrom: ${nameInput.value.trim()} (${emailValue})`
      );

      const recipient = isPlaceholder(CONFIG.email) ? "amr.mohamed.analytics@example.com" : CONFIG.email;
      const mailtoUrl = `mailto:${recipient}?subject=${userSubject}&body=${userBody}`;

      if (dialogMailtoBtn) {
        dialogMailtoBtn.onclick = () => {
          window.location.href = mailtoUrl;
        };
      }

      // Show transparent demonstration dialog
      if (formDialog) {
        formDialog.classList.add("is-open");
        formDialog.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      }

      // Reset form fields
      form.reset();
    }
  });

  function showError(input, errorElement, message) {
    if (input) input.classList.add("has-error");
    if (errorElement) errorElement.textContent = message;
  }

  function clearError(input, errorElement) {
    if (input) input.classList.remove("has-error");
    if (errorElement) errorElement.textContent = "";
  }
}

/* --------------------------------------------------------------------------
   7. Scroll-based Reveal Animations
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  // Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add("is-visible"));
  }
}
