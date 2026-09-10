import Reveal from './Reveal.jsx'

const posts = [
  {
    id: 'vanguard-story',
    eyebrow: 'Career · Personal',
    title: 'How I ended up at Vanguard — and what it taught me about betting on yourself',
    date: 'September 2026',
    readTime: '5 min read',
    body: [
      `It began November 2025, when I made a leap of faith and moved from Nebraska to Arizona without a job offer waiting for me. The week I arrived in Phoenix, I started applying everywhere — company after company, mostly met with silence. Then a different thought crossed my mind: why not try something completely new, like an investment company?`,
      `That question sent me down a path I hadn't planned to take. I started at the top and worked my way down, searching for the world's largest investment company by assets under management. The answer was BlackRock. I checked for openings in Phoenix — there were none. So I moved to the next name on the list: Vanguard. Just like that, without knowing it yet, I had found my next workplace.`,
      `At the time I was only looking for something to hold me over while I figured out my career direction. But when I searched Vanguard's openings in the Phoenix-Scottsdale area, I found no shortage of opportunity. The next challenge was tailoring my resume — except I hadn't yet decided which role to pursue.`,
      `I've always believed in standing out. I've built real strength in customer relationship management, and I've spoken Spanish professionally since I first started learning it in 2020. I wanted a role that would put both of those skills to work and push me further. Then I found it: a position that required Spanish fluency, CRM experience, and the completion of multiple FINRA licenses — meaning I'd have to study for and pass a series of rigorous industry exams. I locked in, drafted my resume, and submitted my application.`,
      `In under two weeks, I had an interview conducted in both Spanish and English. What struck me most about Vanguard's hiring process was how little uncertainty it left me with. There was no long, anxious wait. Within days, an offer came.`,
      `I'm skipping over plenty here — the conversations with my recruiter, the details that shaped my decision — but what I can say is this: I stepped into an industry I knew almost nothing about, and I studied relentlessly. I passed my first exam, the SIE, before my very first day on the job.`,
      `When I started at Vanguard, I assumed the hardest part of the journey was behind me. It wasn't. But I've always loved learning, and I've never stopped trying to improve. Within six months, I needed two more licenses. With the guidance of excellent instructors, I passed the Series 6 and Series 63 exams on my first attempt. Earning those licenses without a financial background meant sleepless nights and relentless effort.`,
      `What began as a short-term plan has become a career I hold onto with real pride. I love nearly everything about Vanguard: the culture, the benefits, the genuine investment in employee growth. It is, without question, the best employer I've ever had. I've found mentors here who've shaped how I think about this work, and I'm grateful for a company that doesn't just teach you investing — it invests in you.`,
      `No one asked me to write this. It's simply my story, and I wanted to tell it. More to come as the journey continues.`,
    ],
  },
]

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container">
        <Reveal>
          <div className="section_heading">
            <span className="eyebrow">My Story</span>
            <h2>Beyond the code</h2>
            <p>The experiences and decisions that shaped who I am as a developer and a person.</p>
          </div>
        </Reveal>

        {posts.map((post) => (
          <Reveal key={post.id}>
            <article className="blog_post surface_card">
              <header className="blog_post_header">
                <span className="eyebrow">{post.eyebrow}</span>
                <h3 className="blog_post_title">{post.title}</h3>
                <div className="blog_post_meta mono_meta">
                  <span>{post.date}</span>
                  <span className="blog_post_meta_divider">·</span>
                  <span>{post.readTime}</span>
                </div>
              </header>
              <div className="blog_post_body">
                {post.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
