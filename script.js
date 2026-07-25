const fitData = {
  kitchen: {
    label: "KITCHEN & RESTAURANT",
    title: "Already comfortable in active kitchen environments.",
    score: 5,
    description: "Current Sodexo experience plus a restaurant co-op gives Kensly practical familiarity with cleanliness, food support, stock, and following procedures.",
    points: ["Food preparation support", "Dishwashing & sanitation", "Inventory and restocking", "Food portioning", "Following safety procedures"],
    source: "Relevant experience: Sodexo + Kelsey's"
  },
  construction: {
    label: "CONSTRUCTION & LABOUR",
    title: "Hands-on experience and comfortable with physical work.",
    score: 5,
    description: "Kensly has practical construction-support experience and has worked with tools, materials, cleanup, sanding, drywall, and door installation assistance.",
    points: ["Tool and equipment familiarity", "Sanding work", "Drywall support", "Door installation assistance", "Cleaning active work areas"],
    source: "Relevant experience: JP Construction"
  },
  warehouse: {
    label: "WAREHOUSE & STOCK",
    title: "Organized, active, and familiar with inventory tasks.",
    score: 4,
    description: "His food-service background includes inventory management, stock levels, proper dating, restocking, organization, and maintaining safe work areas.",
    points: ["Inventory support", "Restocking", "Organization", "Time management"],
    source: "Relevant experience: Sodexo + Kelsey's"
  },
  retail: {
    label: "RETAIL & SERVICE",
    title: "A strong base for customer-facing and team-based work.",
    score: 4,
    description: "While the provided resumes do not list a dedicated retail role, Kensly brings communication, teamwork, organization, and experience working in active public-facing environments.",
    points: ["Oral communication", "Team collaboration", "Multitasking", "Quick learning"],
    source: "Transferable strengths from food service + community roles"
  },
  community: {
    label: "COMMUNITY & SUPPORT",
    title: "Years of experience helping, communicating, and participating.",
    score: 5,
    description: "CityKidz and Junior Youth gave Kensly experience with children, activities, teamwork, community projects, fundraising, and group communication.",
    points: ["Child engagement", "Leadership experience", "Fundraising", "Group communication", "Community projects"],
    source: "Relevant experience: CityKidz + Junior Youth"
  }
};

const fitTabs = document.querySelectorAll('.fit-tab');
const fitLabel = document.getElementById('fit-label');
const fitTitle = document.getElementById('fit-title');
const fitScore = document.getElementById('fit-score');
const fitDescription = document.getElementById('fit-description');
const fitPoints = document.getElementById('fit-points');
const fitSource = document.getElementById('fit-source');

function renderFit(key) {
  const data = fitData[key];
  fitLabel.textContent = data.label;
  fitTitle.textContent = data.title;
  fitScore.textContent = data.score;
  fitDescription.textContent = data.description;
  fitSource.textContent = data.source;
  fitPoints.innerHTML = data.points.map(point => `<li>${point}</li>`).join('');
}

fitTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    fitTabs.forEach(item => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    renderFit(tab.dataset.fit);
  });
});

renderFit('kitchen');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const toast = document.getElementById('toast');
let toastTimer;

document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      toast.textContent = 'Copied to clipboard';
    } catch {
      toast.textContent = button.dataset.copy;
    }
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
  });
});
