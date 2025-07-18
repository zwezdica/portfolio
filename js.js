const portfolioData = {
  navigation: {
    logo: {
      icon: "fa-solid fa-code",
      text: "Portfolio",
    },
    links: [
      { href: "#home", text: "Home" },
      { href: "#about_me", text: "About" },
      { href: "#skills", text: "Skills" },
      { href: "#projects", text: "Projects" },
      { href: "#forma", text: "Contact" },
    ],
  },
  showcase: {
    title: "Hi, I'm Mirjana",
    subtitle: "Frontend Developer",
    qrCode: "./assets/img/qrcode_code.edu.rs.png",
    qrLink: "https://code.edu.rs/sertifikat/c2025050020008/",
    loader:
      "https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif",
  },
  about: {
    title: "About Me",
    text: "My name is Mirjana, and I have a background in ethnology and social work. Throughout my career, I have participated in projects closely tied to my academic journey, focusing on themes such as cultural studies, social engagement, and community well-being. I am passionate about books, theater, and addressing social issues, and I believe in lifelong learning as a way to grow and embrace new challenges. Recently, I have taken a turn toward front-end development, drawn by the creative possibilities it offers and excited to blend my previous experience with new technical skills.",
    image: "./assets/img/Photo.jpg",
  },
  skills: {
    title: "Skills",
    items: [
      { name: "HTML5", icon: "fa-brands fa-html5" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "Node.js", icon: "fa-brands fa-node-js" },
      { name: "React", icon: "fa-brands fa-react" },
    ],
  },
  projects: {
    title: "Projects",
    items: [
      {
        title: "CineQuest",
        description: "Movies finder",
        image: "./assets/img/cinequest_home.png",
        links: [
          { icon: "fa-solid fa-globe", text: "Live Demo", href: "#" },
          {
            icon: "fa-brands fa-github",
            text: "Code",
            href: "https://github.com/zwezdica/cinequest",
          },
        ],
      },
      {
        title: "Memory Game",
        description: "A simple memory game",
        image: "./assets/img/memory_game.png",
        links: [
          { icon: "fa-solid fa-globe", text: "Live Demo", href: "https://memory.starworks.in.rs" },
          {
            icon: "fa-brands fa-github",
            text: "Code",
            href: "https://github.com/zwezdica/memory_game",
          },
        ],
      },
      {
        title: "Loto",
        description: "Loto game",
        image: "./assets/img/loto.png",
        links: [
          { icon: "fa-solid fa-globe", text: "Live Demo", href: "https://loto.starworks.in.rs" },
          {
            icon: "fa-brands fa-github",
            text: "Code",
            href: "https://github.com/zwezdica/loto",
          },
        ],
      },
      {
        title: "LingoBoost",
        description:
          "LingoBoost is a modern web application that makes language learning fun and engaging through gamified experiences.",
        image: "./assets/img/home_light.png",
        links: [
          {
            icon: "fa-solid fa-globe",
            text: "Live Demo",
            href: "https://lingoboost.yunethosting.rs",
          },
          {
            icon: "fa-brands fa-github",
            text: "Code",
            href: "https://github.com/zwezdica/lingoboost_module",
          },
        ],
      },
      {
        title: "Task Master",
        description:
          "TaskMaster is a modern web application for task management with user authentication, allowing you to organize your daily tasks in a simple and intuitive way.",
        image: "./assets/img/home_page.png",
        links: [
          { icon: "fa-solid fa-globe", text: "Live Demo", href: "#" },
          {
            icon: "fa-brands fa-github",
            text: "Code",
            href: "https://github.com/zwezdica/task_master_react",
          },
        ],
      },
    ],
  },
  contact: {
    title: "Contact Me",
    form: {
      fields: [
        {
          type: "text",
          id: "name",
          label: "Name",
          placeholder: "Enter your name",
        },
        {
          type: "email",
          id: "email",
          label: "Email",
          placeholder: "Enter your email",
        },
        {
          type: "textarea",
          id: "message",
          label: "Message",
          placeholder: "Enter your message",
        },
      ],
      submit: "Send Message",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  },
  footer: {
    text: "Made by Mirjana",
  },
};

const themeToggle = {
  currentTheme:
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"),
  init() {
    this.setupToggleButton();
    this.applySavedTheme();
  },
  setupToggleButton() {
    const themeBtn = createElement("button", {
      class: "theme-toggle",
      "aria-label": "Toggle dark mode",
      innerHTML: `
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
      `,
      onclick: () => this.toggleTheme(),
    });

    const nav = document.querySelector(".navigation");
    if (nav) {
      nav.appendChild(themeBtn);
    }

    document.documentElement.setAttribute("data-theme", this.currentTheme);
  },
  toggleTheme() {
    this.currentTheme = this.currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", this.currentTheme);
    localStorage.setItem("theme", this.currentTheme);
  },
  applySavedTheme() {
    if (localStorage.getItem("theme")) {
      this.currentTheme = localStorage.getItem("theme");
      document.documentElement.setAttribute("data-theme", this.currentTheme);
    }
  },
};

function createElement(tag, attributes = {}, children = []) {
  const element = document.createElement(tag);

  for (const [key, value] of Object.entries(attributes)) {
    if (key === "class") {
      element.className = value;
    } else if (key === "text") {
      element.textContent = value;
    } else if (key.startsWith("data-")) {
      element.setAttribute(key, value);
    } else if (key === "innerHTML") {
      element.innerHTML = value;
    } else {
      element[key] = value;
    }
  }

  children.forEach((child) => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });

  return element;
}

function createNavigation() {
  const nav = createElement("div", { class: "navigation" }, [
    createElement(
      "a",
      {
        href: "#home",
        class: "logo",
      },
      [
        createElement("i", { class: portfolioData.navigation.logo.icon }),
        portfolioData.navigation.logo.text,
      ]
    ),
    createElement("input", {
      type: "checkbox",
      id: "menu-toggle",
      class: "menu-toggle",
    }),
    createElement(
      "label",
      {
        for: "menu-toggle",
        class: "hamburger",
      },
      [createElement("span"), createElement("span"), createElement("span")]
    ),
    createElement("nav", { id: "nav-meni" }, [
      createElement(
        "ul",
        {},
        portfolioData.navigation.links.map((link, index) =>
          createElement("li", { style: `--i: ${index + 1}` }, [
            createElement("a", { href: link.href, text: link.text }),
          ])
        )
      ),
    ]),
  ]);

  return nav;
}

function createShowcase() {
  const showcase = createElement("header", { id: "showcase" }, [
    createElement("div", { class: "showcase-content" }, [
      createElement("h1", {
        class: "main-h",
        text: portfolioData.showcase.title,
        style: "font-size: clamp(3rem, 6vw, 5rem);",
      }),
      createElement("p", {
        class: "main_p",
        text: portfolioData.showcase.subtitle,
      }),
      createElement(
        "a",
        {
          href: portfolioData.showcase.qrLink,
          target: "_blank",
          rel: "noopener noreferrer",
        },
        [
          createElement("img", {
            src: portfolioData.showcase.qrCode,
            alt: "QR Code",
            class: "qr-code",
            title: "Click to visit CODE website",
          }),
        ]
      ),
      createElement("img", {
        src: portfolioData.showcase.loader,
        alt: "loader",
        id: "page-loader",
        style: "display: block; transition: opacity 0.5s ease-out;",
      }),
    ]),
  ]);

  return showcase;
}

function createAbout() {
  return createElement("section", { id: "about_me" }, [
    createElement("h2", { text: portfolioData.about.title }),
    createElement("div", { class: "about fade-in" }, [
      createElement("p", { class: "intro", text: portfolioData.about.text }),
      createElement("img", {
        src: portfolioData.about.image,
        alt: "photo",
        class: "about-img",
      }),
    ]),
  ]);
}

function createSkills() {
  return createElement("section", { id: "skills" }, [
    createElement("h2", { text: portfolioData.skills.title }),
    createElement(
      "div",
      { class: "skills-container fade-in" },
      portfolioData.skills.items.map((skill) =>
        createElement("div", { class: "skill-card" }, [
          createElement("div", { class: "skill-icon" }, [
            createElement("i", { class: skill.icon }),
          ]),
          createElement("div", { class: "skill-name", text: skill.name }),
        ])
      )
    ),
  ]);
}

function createProjects() {
  return createElement("section", { id: "projects" }, [
    createElement("h2", { text: portfolioData.projects.title }),
    createElement(
      "div",
      { class: "project-grid fade-in" },
      portfolioData.projects.items.map((project) =>
        createElement("div", { class: "project-card" }, [
          createElement("img", {
            src: project.image,
            alt: project.title,
            class: "project-img",
          }),
          createElement("div", { class: "project-info" }, [
            createElement("h3", {
              class: "project-title",
              text: project.title,
            }),
            createElement("p", {
              class: "project-desc",
              text: project.description,
            }),
            createElement(
              "div",
              { class: "project-links" },
              project.links.map((link) =>
                createElement(
                  "a",
                  {
                    href: link.href,
                    class: "project-link",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  [createElement("i", { class: link.icon }), link.text]
                )
              )
            ),
          ]),
        ])
      )
    ),
  ]);
}

function createContact() {
  return createElement("section", { id: "forma" }, [
    createElement("h2", { text: portfolioData.contact.title }),
    createElement("div", { class: "container_forma fade-in" }, [
      createElement(
        "form",
        { id: "contact-form" },
        portfolioData.contact.form.fields
          .map((field) =>
            createElement("div", { class: "form-group" }, [
              createElement("label", {
                for: field.id,
                text: field.label,
              }),
              createElement(field.type === "textarea" ? "textarea" : "input", {
                type: field.type,
                id: field.id,
                name: field.id,
                placeholder: field.placeholder,
                required: true,
              }),
            ])
          )
          .concat([
            createElement("input", {
              type: "submit",
              value: portfolioData.contact.form.submit,
              class: "btn_send",
            }),
            createElement("div", { id: "form-message", class: "form-message" }),
          ])
      ),
      createElement("div", { class: "image-wrapper" }, [
        createElement("img", {
          src: portfolioData.contact.form.image,
          alt: "Contact illustration",
        }),
      ]),
    ]),
  ]);
}

function createFooter() {
  return createElement("footer", {}, [
    portfolioData.footer.text,
    createElement("span", { id: "year" }),
  ]);
}

function setupEventListeners() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (
        this.getAttribute("href") === "#" ||
        this.getAttribute("href") === "#menu-toggle"
      ) {
        return;
      }

      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
        });
      }

      const menuToggle = document.getElementById("menu-toggle");
      if (menuToggle.checked) {
        menuToggle.checked = false;
      }
    });
  });

  const menuToggle = document.getElementById("menu-toggle");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.getElementById("nav-meni");

  if (hamburger) {
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();

      menuToggle.checked = !menuToggle.checked;

      const isExpanded = menuToggle.checked;
      hamburger.setAttribute("aria-expanded", isExpanded);
      navMenu.setAttribute("aria-hidden", !isExpanded);
    });
  }

  document.addEventListener("click", function (e) {
    if (
      menuToggle.checked &&
      !navMenu.contains(e.target) &&
      e.target !== hamburger &&
      !hamburger.contains(e.target)
    ) {
      menuToggle.checked = false;
      hamburger.setAttribute("aria-expanded", "false");
      navMenu.setAttribute("aria-hidden", "true");
    }
  });

  document.querySelectorAll("#nav-meni a").forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 767) {
        menuToggle.checked = false;
        hamburger.setAttribute("aria-expanded", "false");
        navMenu.setAttribute("aria-hidden", "true");
      }
    });
  });

  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = form.querySelector('input[type="submit"]');
      const messageDiv = document.getElementById("form-message");

      submitBtn.disabled = true;
      submitBtn.value = "Sending...";
      messageDiv.textContent = "";
      messageDiv.className = "form-message";

      emailjs
        .sendForm("service_px1hwjy", "template_3azdpcb", form)
        .then(
          () => {
            messageDiv.textContent = "Message sent successfully!";
            messageDiv.className = "form-message success";
            form.reset();
          },
          (error) => {
            messageDiv.textContent =
              "Failed to send message. Please try again later.";
            messageDiv.className = "form-message error";
            console.error("EmailJS Error:", error);
          }
        )
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.value = portfolioData.contact.form.submit;
        });
    });
  }
}

function initApp() {
  const emailJsScript = document.createElement("script");
  emailJsScript.src =
    "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
  emailJsScript.onload = function () {
    emailjs.init("LEzidInbrwbSSGvkt");

    continueAppInitialization();
  };
  document.head.appendChild(emailJsScript);
}

function continueAppInitialization() {
  const app = document.getElementById("app");

  app.appendChild(createNavigation());
  app.appendChild(
    createElement("main", {}, [
      createShowcase(),
      createAbout(),
      createSkills(),
      createProjects(),
      createContact(),
    ])
  );
  app.appendChild(createFooter());

  document.getElementById("year").textContent = new Date().getFullYear();

  themeToggle.init();

  window.addEventListener("load", function () {
    const loader = document.getElementById("page-loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }
  });

  setupEventListeners();
}

document.addEventListener("DOMContentLoaded", initApp);
