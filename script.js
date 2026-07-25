const fitData={
kitchen:{label:"Kitchen & Restaurant",title:"Previous restaurant experience gives me a useful starting point.",points:["Kelsey's co-op experience","Food portioning experience","Restocking & organization","Cleaning & sanitization"]},
construction:{label:"Construction & Labour",title:"I already have hands-on exposure to real construction tasks.",points:["Drywall & ceiling support","Sanding & cleanup","Tool and equipment experience","Door installation support"]},
warehouse:{label:"Warehouse & Stock",title:"My organization and physical-work experience transfers well to stock roles.",points:["Restocking experience","Organization skills","Comfortable with physical work","Follows routines and instructions"]},
retail:{label:"Retail & Service",title:"My communication and teamwork skills provide a base for service work.",points:["Strong oral communication","Teamwork experience","Follows instructions well","Quick to learn new routines"]},
community:{label:"Community & Support",title:"I have years of experience contributing to youth and community programs.",points:["Junior Leader experience","Fundraising experience","Group communication","Teamwork & empathy"]}
};
document.querySelectorAll(".fit-tab").forEach(btn=>{
btn.addEventListener("click",()=>{
document.querySelectorAll(".fit-tab").forEach(x=>x.classList.remove("active"));
btn.classList.add("active");
const d=fitData[btn.dataset.fit];
document.querySelector("#fit-panel").innerHTML=`<span class="fit-kicker">${d.label}</span><h3>${d.title}</h3><div class="fit-points">${d.points.map(x=>`<span>✓ ${x}</span>`).join("")}</div>`;
});
});