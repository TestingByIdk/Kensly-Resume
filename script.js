const fitData={
kitchen:{label:"Kitchen & Restaurant",title:"Already comfortable in fast-paced food environments.",points:["Current kitchen experience","Food prep & inventory","Sanitation awareness","Kelsey's co-op experience"]},
construction:{label:"Construction & Labour",title:"Hands-on experience with physical job-site tasks.",points:["Drywall & ceiling support","Sanding & cleanup","Tool and equipment experience","Door installation support"]},
warehouse:{label:"Warehouse & Stock",title:"Organized, physical experience that transfers well to stock environments.",points:["Inventory management","Restocking experience","Organization skills","Comfortable with physical work"]},
retail:{label:"Retail & Service",title:"A dependable base for customer-facing and support roles.",points:["Strong oral communication","Teamwork experience","Follows instructions well","Quick to learn new routines"]},
community:{label:"Community & Support",title:"Years of experience helping in youth and community programs.",points:["Junior Leader experience","Fundraising experience","Group communication","Teamwork & empathy"]}
};

document.querySelectorAll(".fit-tab").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".fit-tab").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active");
    const d=fitData[btn.dataset.fit];
    document.querySelector("#fit-panel").innerHTML=`
      <span class="fit-kicker">${d.label}</span>
      <h3>${d.title}</h3>
      <div class="fit-points">${d.points.map(x=>`<span>✓ ${x}</span>`).join("")}</div>
    `;
  });
});
const contactPopup = document.querySelector("#contactPopup");
const contactPopupIcon = document.querySelector("#contactPopupIcon");
const contactPopupLabel = document.querySelector("#contactPopupLabel");
const contactPopupTitle = document.querySelector("#contactPopupTitle");
const contactPopupValue = document.querySelector("#contactPopupValue");
const copyContactButton = document.querySelector("#copyContactButton");
const openContactButton = document.querySelector("#openContactButton");
const contactPopupStatus = document.querySelector("#contactPopupStatus");

let selectedContactValue = "";

function openContactPopup(link) {
  const isEmail = link.href.startsWith("mailto:");
  selectedContactValue = isEmail
    ? link.href.replace("mailto:", "")
    : link.href.replace("tel:", "");

  contactPopupIcon.textContent = isEmail ? "✉" : "☎";
  contactPopupLabel.textContent = isEmail ? "Email" : "Phone";
  contactPopupTitle.textContent = isEmail ? "Email Kensly" : "Call Kensly";
  contactPopupValue.textContent = isEmail
    ? selectedContactValue
    : "(613) 804-2531";
  openContactButton.textContent = isEmail ? "Open Email" : "Start Call";
  openContactButton.href = link.href;
  contactPopupStatus.textContent = "";

  contactPopup.classList.add("open");
  contactPopup.setAttribute("aria-hidden", "false");
  document.body.classList.add("popup-open");
}

function closeContactPopup() {
  contactPopup.classList.remove("open");
  contactPopup.setAttribute("aria-hidden", "true");
  document.body.classList.remove("popup-open");
}

document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openContactPopup(link);
  });
});

document.querySelectorAll("[data-popup-close]").forEach((element) => {
  element.addEventListener("click", closeContactPopup);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && contactPopup.classList.contains("open")) {
    closeContactPopup();
  }
});

copyContactButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(selectedContactValue);
    contactPopupStatus.textContent = "Copied!";
  } catch {
    contactPopupStatus.textContent = "Could not copy automatically.";
  }
});
