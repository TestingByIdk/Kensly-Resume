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