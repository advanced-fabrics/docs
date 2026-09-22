const pages=[
  {title:'Overview',url:'/',description:'What Advanced Fabrics is and where to begin'},
  {title:'Quick start',url:'/quick-start/',description:'Evaluate from source and verify artifacts'},
  {title:'Concepts',url:'/concepts/',description:'Topology, observation, policy and providers'},
  {title:'Architecture',url:'/architecture/',description:'Contracts, providers and reference runtime'},
  {title:'Security and safety',url:'/security/',description:'Read-only defaults and controlled apply'},
  {title:'Specifications',url:'/specifications/',description:'AFEPs, API contracts and conformance'},
  {title:'Community',url:'/community/',description:'Governance, roadmap and contribution'}
];
const input=document.querySelector('#site-search');
const results=document.querySelector('#search-results');
if(input&&results){input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();results.replaceChildren();if(!q)return;const matches=pages.filter(p=>(p.title+' '+p.description).toLowerCase().includes(q));for(const p of matches){const a=document.createElement('a');a.href=p.url;a.textContent=p.title;const small=document.createElement('small');small.textContent=p.description;a.append(small);results.append(a)}if(!matches.length){const p=document.createElement('p');p.textContent='No matching page';results.append(p)}})}
const toggle=document.querySelector('#menu-toggle');const side=document.querySelector('#sidebar');if(toggle&&side)toggle.addEventListener('click',()=>{const open=side.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});
