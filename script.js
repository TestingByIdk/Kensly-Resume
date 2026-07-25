const fitData={
kitchen:["Kitchen & Restaurant","Already comfortable in fast-paced food environments.",["Current kitchen and dishwashing experience.","Food preparation and inventory support.","Sanitation and food safety awareness.","Restaurant co-op experience at Kelsey's."]],
construction:["Construction & Labour","Hands-on experience with physical job-site tasks.",["Assisted with drywall and ceiling work.","Completed sanding and cleanup tasks.","Learned to properly use tools and equipment.","Helped with door installation and site organization."]],
warehouse:["Warehouse & Stock","Experience that transfers well to organized stock environments.",["Managed food inventory and stock levels.","Restocked supplies during restaurant placement.","Strong organizational and time-management skills.","Comfortable with physical and repetitive work."]],
retail:["Retail & Service","A solid base for customer-facing and support roles.",["Strong oral communication.","Experience following instructions and working with teams.","Reliable in active, task-focused environments.","Quick learner who can adapt to new routines."]],
community:["Community & Support","Years of experience helping in youth and community programs.",["Junior Leader experience with children.","Volunteer fundraising and neighbourhood cleanup work.","Group discussion and teamwork experience.","Leadership, empathy, and communication strengths."]]
};
document.querySelectorAll(".fit-tab").forEach(btn=>btn.addEventListener("click",()=>{
document.querySelectorAll(".fit-tab").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
const d=fitData[btn.dataset.fit];
document.querySelector("#fit-panel").innerHTML=`<span class="small red">${d[0]}</span><h3>${d[1]}</h3><ul>${d[2].map(x=>`<li>${x}</li>`).join("")}</ul>`;
}));