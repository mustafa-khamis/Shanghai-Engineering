import { useState } from 'react'
import './App.css'

const solutions = [
  { number: '01', title: 'Passenger elevators', text: 'Quiet, dependable vertical mobility for residential, commercial and mixed-use buildings.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=85' },
  { number: '02', title: 'Hospital elevators', text: 'Thoughtful movement systems designed around the demands of healthcare environments.', image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=85' },
  { number: '03', title: 'Freight & cargo', text: 'Robust lifting solutions for the materials, goods and operational rhythm of industry.', image: 'https://images.unsplash.com/photo-1586528116493-da8b5f7c2c7b?auto=format&fit=crop&w=900&q=85' },
  { number: '04', title: 'Escalators & moving walks', text: 'Continuous-flow systems for retail, transit, hospitality and public spaces.', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85' },
  { number: '05', title: 'Vehicle & auto parking', text: 'Space-conscious systems that help ambitious developments move people and vehicles better.', image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=900&q=85' },
  { number: '06', title: 'Special applications', text: 'From observation cars to dumbwaiters, a considered answer for a complex brief.', image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=85' },
]

const process = [
  ['01', 'Understand', 'We start with your building, traffic needs, programme and the realities of its site.'],
  ['02', 'Engineer', 'Our team develops a practical vertical transportation approach for the project.'],
  ['03', 'Deliver', 'Supply, installation, testing and commissioning are coordinated as one lifecycle.'],
  ['04', 'Support', 'Maintenance and after-sales service keep the system moving long after handover.'],
]

function Arrow({ light = false }) {
  return <span className={`arrow ${light ? 'arrow-light' : ''}`} aria-hidden="true">↗</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Shanghai Engineering Company home">
          <span className="brand-mark">S<span>M</span></span>
          <span className="brand-name">Shanghai Engineering<small>Company (Rwanda) Ltd.</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span /><span />
        </button>
        <nav className={menuOpen ? 'nav-open' : ''}>
          <a href="#solutions" onClick={closeMenu}>Solutions</a>
          <a href="#process" onClick={closeMenu}>How we work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a conversation <Arrow /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-backdrop" />
          <div className="hero-grid" />
          <div className="hero-company-watermark" aria-hidden="true">
            <span>Shanghai Engineering Company</span>
            <span>(Rwanda) Ltd.</span>
          </div>
          <div className="hero-content">
            <div className="eyebrow"><span className="eyebrow-line" /> Vertical transportation / Kigali, Rwanda</div>
            <h1>Built to move<br /><em>Rwanda forward.</em></h1>
            <p className="hero-lede">Engineering dependable movement for the places where people live, work and connect.</p>
            <div className="hero-actions">
              <a className="button button-accent" href="#contact">Discuss your project <Arrow light /></a>
              <a className="text-link" href="#solutions">Explore solutions <span>↓</span></a>
            </div>
          </div>
          <div className="hero-side-note"><span>SEC / 01</span><span>Since Kigali</span></div>
          <div className="hero-watermark">MOVE</div>
          <div className="scroll-cue"><span className="scroll-line" /> Scroll to explore</div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="section-kicker">01 / The company</div>
          <div className="intro-layout">
            <h2>Movement is the<br /><span>infrastructure</span><br />of opportunity.</h2>
            <div className="intro-copy">
              <p className="large-copy">Shanghai Engineering Company (Rwanda) Ltd. is a local engineering partner for vertical transportation projects in Rwanda.</p>
              <p>As the local agent and representative for Shanghai Mitsubishi Elevators, we bring together proven systems, technical thinking and a clear understanding of the Kigali market.</p>
              <a className="inline-link" href="#process">Our approach <Arrow /></a>
            </div>
          </div>
          <div className="intro-rule"><span>LOCAL PRESENCE</span><span>TECHNICAL PARTNERSHIP</span><span>END-TO-END DELIVERY</span></div>
        </section>

        <section className="solutions section-pad" id="solutions">
          <div className="section-head">
            <div><div className="section-kicker">02 / What we move</div><h2>Solutions for the<br /><span>whole building.</span></h2></div>
            <p>Every project has a different rhythm. We help you find the right system for the people, goods and spaces it needs to carry.</p>
          </div>
          <div className="solution-grid">
            {solutions.map((item) => (
              <article className="solution-card" key={item.number}>
                <div className="solution-image"><img src={item.image} alt="" loading="lazy" /><span className="card-number">{item.number}</span><span className="card-arrow"><Arrow light /></span></div>
                <h3>{item.title}</h3><p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="statement">
          <div className="statement-bg" />
          <div className="statement-content"><div className="section-kicker light-kicker">03 / A better brief</div><h2>Good engineering<br /><em>feels inevitable.</em></h2><p>From the first conversation to the first ride, we make the complex feel clear.</p></div>
          <div className="statement-mark">SEC<br /><span>RWANDA</span></div>
        </section>

        <section className="process section-pad" id="process">
          <div className="section-kicker">04 / The lifecycle</div>
          <div className="process-heading"><h2>One partner.<br /><span>Every stage.</span></h2><p>Vertical transportation is a long-term decision. Our role is to give every stage the same level of care and technical clarity.</p></div>
          <div className="process-list">{process.map(([number, title, text]) => <div className="process-item" key={number}><span className="process-number">{number}</span><h3>{title}</h3><p>{text}</p><span className="process-plus">+</span></div>)}</div>
        </section>

        <section className="service-band">
          <div className="service-image"><img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85" alt="Modern architectural facade" loading="lazy" /></div>
          <div className="service-copy"><div className="section-kicker">05 / Beyond installation</div><h2>Keep moving,<br /><span>long after handover.</span></h2><p>Reliable after-sales support and maintenance are part of the engineering, not an afterthought. We help protect the performance of your investment over time.</p><a className="button button-dark" href="#contact">Talk to our team <Arrow light /></a></div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-intro"><div className="section-kicker">06 / Start a conversation</div><h2>Tell us where<br /><em>you want to go.</em></h2><p>Have a new build, renovation or service requirement? Share a few details and our team will be in touch.</p><div className="contact-details"><span>Call us directly</span><a href="tel:+250738666630">+250 738 666 630</a><span>Kigali, Rwanda</span></div></div>
          <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
            {sent ? <div className="form-success"><span>✓</span><h3>Thank you.</h3><p>We have your enquiry and will be in touch shortly.</p><button type="button" className="inline-link" onClick={() => setSent(false)}>Send another enquiry</button></div> : <><label>Name<input required type="text" placeholder="Your name" /></label><label>Work email<input required type="email" placeholder="you@company.com" /></label><label>How can we help?<textarea required rows="3" placeholder="Tell us a little about your project..." /></label><button className="button button-accent form-button" type="submit">Send enquiry <Arrow light /></button></>}
          </form>
        </section>
      </main>
      <footer className="site-footer"><div className="footer-brand"><span className="brand-mark">S<span>M</span></span><span>Shanghai Engineering Company<br /><small>(Rwanda) Ltd.</small></span></div><span>Vertical transportation engineered for Rwanda.</span><a href="#top">Back to top ↑</a><div className="footer-bottom"><span>© 2025 Shanghai Engineering Company (Rwanda) Ltd.</span><span>Local expertise. Global standards.</span></div></footer>
    </div>
  )
}

export default App
