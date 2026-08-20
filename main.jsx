import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const A='/assets';

const projects=[
  {
    id:'infraconn',
    featured:true,
    eyebrow:'FEATURED / FULL-STACK PRODUCT',
    title:'InfraConn',
    tagline:'Connect & Build',
    description:'A construction-services marketplace built around professional discovery, vendor onboarding, service search, portfolios, bookings, reviews and role-based workflows.',
    problem:'Make it easier for users to discover construction professionals and for vendors to present their services, experience and work.',
    tech:['Laravel 12','PHP 8.2+','Livewire 3','Tailwind CSS','MySQL','Eloquent ORM'],
    images:[`${A}/projects/infraconn/banner.jpg`,`${A}/projects/infraconn/vendor.jpg`,`${A}/projects/infraconn/workshop.jpg`,`${A}/projects/infraconn/kitchen.jpg`,`${A}/projects/infraconn/interior.jpg`,`${A}/projects/infraconn/construction.jpg`],
    demo:'https://www.infraconn.in/',
    code:'Laravel MVC · Eloquent · Role-based workflows'
  },
  {
    id:'nagaland',
    eyebrow:'AI + DATA + WEB',
    title:'Nagaland Tourism Platform',
    tagline:'Discover. Plan. Experience.',
    description:'A multi-module tourism platform combining destination discovery, AI-assisted tourism assistance, interactive maps, itinerary planning and a local-products commerce experience.',
    problem:'Bring tourism discovery, trip planning, cultural information and local commerce into one digital experience.',
    tech:['React.js','Leaflet.js','Node.js','Express.js','Python','Pandas','TinyLLaMA','Ollama','MySQL'],
    images:[`${A}/projects/nagaland/plan-visit.png`,`${A}/projects/nagaland/itinerary.png`,`${A}/projects/nagaland/stack.png`,`${A}/projects/nagaland/nagacrafts.png`],
    demo:'https://nagaland.vercel.app/',
    code:'AI chatbot · geospatial UI · itinerary engine · e-commerce'
  }
];

const skills=[
 ['Software','C · Java · Python · JavaScript · Laravel · React'],
 ['Data','Python · SQL · Pandas · ETL · Power BI · Advanced Excel'],
 ['AI / ML','Machine Learning · NLP · LLMs · Prompt Engineering · RAG'],
 ['Cloud','AWS · S3 · Glue · Athena · Redshift · Lambda · EMR · Spark'],
 ['Business','Business Development · Lead Generation · CRM · Market Research'],
 ['Leadership','Project Management · Team Leadership · Stakeholder Management']
];

const experience=[
 {year:'2026', role:'Growth Associate', company:'HyperStaff', detail:'Built international lead datasets using Apollo and GoHighLevel, automated prospecting workflows and supported global campaigns through data-driven lead qualification and analytics.'},
 {year:'2026', role:'Business Development Executive (IT Sales & Consultant)', company:'Futurecept', detail:'Generated and qualified international leads, managed outreach automation and CRM pipeline workflows, built structured prospect datasets and monitored campaign performance.'},
 {year:'2026', role:'Project Manager & Team Manager', company:'Talent Navigator', detail:'Project lifecycle oversight, team coordination and enterprise asset tracking across recruitment and delivery workflows.'},
 {year:'KIIT', role:'Leadership & Campus Experience', company:'Khwahishein · Kimaya · NSS · Kamakshi & HeForShe', detail:'Writer Lead, Marketing Lead and volunteer/team contributions across student communities, communications and events.'}
];

const certs=[
 {name:'AWS Academy Graduate — Data Engineering', org:'AWS Academy', meta:'40 hours · 28 October 2025', link:'https://www.credly.com/go/dmg7ylLZ', icon:'AWS'},
 {name:'Business Analytics for Decision Making', org:'Coursera', meta:'Certificate listed in current resume', link:'#', icon:'BA'},
 {name:'Generative BI', org:'AWS Academy', meta:'Certificate listed in current resume', link:'#', icon:'BI'},
 {name:'IBM Data Science', org:'Coursera', meta:'Certificate listed in current resume', link:'#', icon:'DS'},
 {name:'Platinum Certificate — Sales & Marketing', org:'Aashman Foundation', meta:'Certificate listed in current resume', link:'#', icon:'SM'}
];

function Icon({name}){
 const paths={arrow:'M5 12h14M13 6l6 6-6 6',code:'M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14',spark:'M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2',mail:'M4 6h16v12H4zM4 7l8 6 8-6',external:'M14 4h6v6M20 4l-9 9M18 13v5H5V5h5',plus:'M12 5v14M5 12h14'};
 return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={paths[name]||paths.spark}/></svg>
}

function Nav(){
 const [open,setOpen]=useState(false);
 const links=['about','experience','projects','certifications','contact'];
 return <header className="nav"><a href="#home" className="brand"><span className="brandMark">DS</span><span>Divyansh Singh</span></a><button className="menuBtn" onClick={()=>setOpen(!open)} aria-label="Toggle menu">☰</button><nav className={open?'navLinks open':'navLinks'}>{links.map(x=><a key={x} href={'#'+x} onClick={()=>setOpen(false)}>{x[0].toUpperCase()+x.slice(1)}</a>)}</nav><a className="navCta" href="#contact">Let's connect <Icon name="arrow"/></a></header>
}

function Orb(){ return <div className="orbScene" aria-hidden="true"><div className="orb"></div><div className="orbit o1"></div><div className="orbit o2"></div><div className="orbit o3"></div>{Array.from({length:18}).map((_,i)=><i className="node" key={i} style={{'--i':i}}/>)}<div className="orbLabel"><span>DS</span><small>BUILDING AT THE INTERSECTION OF</small><b>TECH × DATA × AI</b></div></div> }

function Hero(){return <section id="home" className="hero"><div className="heroCopy"><div className="kicker"><span></span> COMPUTER SCIENCE · DATA · AI · BUSINESS</div><h1>DIVYANSH<br/><em>SINGH</em></h1><p className="heroLead">I build technology-driven products where <strong>software, data, AI and business thinking</strong> meet.</p><p className="heroSub">Computer Science student at KIIT with hands-on experience across full-stack products, data engineering, AI-enabled systems and business growth workflows.</p><div className="heroActions"><a className="primary" href="#projects">Explore my work <Icon name="arrow"/></a><a className="secondary" href="#contact">Let's connect</a></div><div className="heroMeta"><span>KIIT · CSE</span><span>CGPA 8.52</span><span>AWS Data Engineering</span></div></div><Orb/></section>}

function About(){return <section id="about" className="section about"><div className="sectionHead"><span>01 / ABOUT</span><h2>A hybrid profile,<br/><em>built for real problems.</em></h2></div><div className="aboutGrid"><div className="aboutCard introCard"><div className="mono">DS</div><p>My work sits across software development, data and analytics, AI/ML, cloud technologies and business development. I enjoy turning messy real-world problems into structured products, workflows and usable experiences.</p><div className="quote">“Build the system. Understand the data. Make it useful.”</div></div><div className="skillGrid">{skills.map(([a,b],i)=><div className="skillCard" key={a}><span className="skillNo">0{i+1}</span><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>}

function Experience(){return <section id="experience" className="section experience"><div className="sectionHead"><span>02 / EXPERIENCE</span><h2>Work that shaped<br/><em>how I operate.</em></h2></div><div className="timeline">{experience.map((e,i)=><article className="timelineItem" key={i}><div className="timelineDot"></div><div className="timeYear">{e.year}</div><div className="timeBody"><h3>{e.role}</h3><h4>{e.company}</h4><p>{e.detail}</p></div></article>)}</div></section>}

function ProjectModal({project,onClose}){const [idx,setIdx]=useState(0); if(!project)return null; return <div className="modal" onMouseDown={onClose}><div className="modalInner" onMouseDown={e=>e.stopPropagation()}><button className="close" onClick={onClose}>×</button><img src={project.images[idx]} className="modalImage"/><div className="thumbs">{project.images.map((x,i)=><button className={i===idx?'active':''} key={x} onClick={()=>setIdx(i)}><img src={x}/></button>)}</div><div className="modalText"><span>{project.eyebrow}</span><h3>{project.title}</h3><p>{project.description}</p></div></div></div>}

function Projects(){const [selected,setSelected]=useState(null); return <section id="projects" className="section projects"><div className="sectionHead"><span>03 / SELECTED WORK</span><h2>Things I’ve<br/><em>actually built.</em></h2></div><div className="projectStack">{projects.map((p,i)=><article className={'project '+(p.featured?'featured':'')} key={p.id}><div className="projectVisual"><img src={p.images[0]} /><div className="visualOverlay"><span>{p.featured?'01':'02'}</span><button onClick={()=>setSelected(p)}>View gallery <Icon name="external"/></button></div></div><div className="projectInfo"><span className="eyebrow">{p.eyebrow}</span><h3>{p.title}</h3><h4>{p.tagline}</h4><p>{p.description}</p><div className="projectDetails"><div><small>PROBLEM</small><p>{p.problem}</p></div><div><small>STACK</small><div className="chips">{p.tech.map(t=><span key={t}>{t}</span>)}</div></div></div><div className="projectFoot"><span>{p.code}</span><a href={p.demo} target="_blank" rel="noreferrer">Live project <Icon name="arrow"/></a></div></div></article>)}</div><ProjectModal project={selected} onClose={()=>setSelected(null)}/></section>}

const snippets={search:`public function SerchService(Request $request)
{
    $query = $request->input('query');

    $results = Service::with(['category', 'vendorservice.vendor'])
        ->where('name', 'like', "%{$query}%")
        ->orWhereHas('category', function ($q) use ($query) {
            $q->where('name', 'like', "%{$query}%");
        })
        ->orWhereHas('vendorservice.vendor', function ($q) use ($query) {
            $q->where('name', 'like', "%{$query}%");
        })
        ->get(['id', 'name', 'category_id']);

    return response()->json($results);
}`,
portfolio:`public function portfolioStore(Request $request)
{
    $request->validate([
        'title' => 'required|string|max:255',
        'images.*' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
    ]);

    $imagePaths = [];

    if ($request->hasFile('images')) {
        foreach ($request->file('images') as $image) {
            $imagePaths[] = $image->store('portfolios', 'public');
        }
    }

    VendorPortfolio::create([
        'vendor_id' => auth()->id(),
        'title' => $request->input('title'),
        'images' => $imagePaths,
    ]);
}`,
booking:`public function BookingStore(Request $request, $vendor_id, $service_id)
{
    $booking = ServiceBooking::create([
        'user_id' => auth()->id(),
        'vendor_id' => $vendor_id,
        'service_id' => $service_id,
    ]);

    return redirect()->route('user.dashboard')
        ->with('success', 'your booking has been success.');
}`};

function CodeLab(){const [tab,setTab]=useState('search');return <section className="codeLab"><div className="codeIntro"><span className="eyebrow">UNDER THE HOOD / INFRACONN</span><h2>Real implementation,<br/><em>not just a mockup.</em></h2><p>Selected snippets from the uploaded InfraConn Laravel codebase show how the product handles search, multi-image portfolios and bookings.</p><div className="codeTags"><span>Laravel MVC</span><span>Eloquent ORM</span><span>Role-based flows</span></div></div><div className="codePanel"><div className="codeTabs">{Object.keys(snippets).map(k=><button className={tab===k?'active':''} key={k} onClick={()=>setTab(k)}>{k}</button>)}</div><pre><code>{snippets[tab]}</code></pre></div></section>}

function Certifications(){return <section id="certifications" className="section certs"><div className="sectionHead"><span>04 / CREDENTIALS</span><h2>Proof of learning,<br/><em>kept visible.</em></h2></div><div className="certGrid">{certs.map((c,i)=><article className={'certCard '+(i===0?'featuredCert':'')} key={c.name}><div className="certIcon">{c.icon}</div><div><span className="certOrg">{c.org}</span><h3>{c.name}</h3><p>{c.meta}</p></div>{c.link!=='#'?<a href={c.link} target="_blank" rel="noreferrer">View credential <Icon name="external"/></a>:<span className="listed">Listed in resume</span>}</article>)}</div><div className="credentialNote"><span>01</span><p>The AWS Academy credential confirms a <strong>40-hour Data Engineering training</strong>, completed on 28 October 2025.</p><a href="https://www.credly.com/go/dmg7ylLZ" target="_blank" rel="noreferrer">Open Credly <Icon name="external"/></a></div></section>}

function Contact(){return <section id="contact" className="section contact"><div className="contactPanel"><div><span className="eyebrow">05 / CONTACT</span><h2>Let's build something<br/><em>meaningful.</em></h2><p>Open to conversations around software, data, AI, growth and ambitious product ideas.</p></div><div className="contactLinks"><a href="mailto:singhdivyansh9293@gmail.com"><span>Email</span><b>singhdivyansh9293@gmail.com</b><Icon name="arrow"/></a><a href="https://www.linkedin.com/in/divyansh-singh-82vd16" target="_blank" rel="noreferrer"><span>LinkedIn</span><b>divyansh-singh-82vd16</b><Icon name="external"/></a><a href="https://nagaland.vercel.app/" target="_blank" rel="noreferrer"><span>Live project</span><b>Nagaland Tourism</b><Icon name="external"/></a></div></div></section>}

function Footer(){return <footer><span className="brandMark">DS</span><span>Divyansh Singh · Built with intent.</span><a href="#home">Back to top ↑</a></footer>}

function App(){useEffect(()=>{const els=document.querySelectorAll('.reveal'); const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.08}); els.forEach(e=>io.observe(e)); return()=>io.disconnect()},[]); return <><Nav/><main><Hero/><About/><Experience/><Projects/><CodeLab/><Certifications/><Contact/></main><Footer/></>}

createRoot(document.getElementById('root')).render(<App/>);
