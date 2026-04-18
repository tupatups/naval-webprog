import Button from '../../components/Button';
import profileImg from '../../assets/profile.jpg';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* Hero Section with Profile */}
      <section className="border-y-2 border-[#8f7a3d]/45 bg-[#e6dcc3] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl border-2 border-[#8f7a3d]/45 bg-gradient-to-br from-[#f6f1df] to-[#e9e3d4] shadow-lg">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-[#dccdaf] p-6">
              {/* Your Profile Image */}
              <img 
                src={profileImg} 
                alt="Profile Photo" 
                className="max-w-full max-h-full object-contain rounded-2xl"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6f5c28]">
              About Me
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-[#16392e] sm:text-4xl">
              Full-Stack Developer & UI/UX Enthusiast
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#2f473d] sm:text-base">
              Passionate about creating beautiful, functional web experiences. Specializing in React, TypeScript, and modern web technologies. I transform ideas into elegant digital solutions that users love.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/articles">View Articles</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Overview Stats */}
      <section className="border-y-2 border-[#8f7a3d]/45 bg-[#e6dcc3] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6f5c28]">
            Professional Journey
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#16392e]">Career Highlights</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-[#8f7a3d]/45 bg-[#dfd2b3] p-5 transition hover:bg-[#d8c9a8]">
            <p className="text-2xl font-bold text-[#16392e]">5+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6f5c28]">
              Years Experience
            </p>
            <p className="mt-3 text-xs text-[#2f473d]">Building web applications</p>
          </div>
          <div className="rounded-3xl border-2 border-[#8f7a3d]/45 bg-[#dfd2b3] p-5 transition hover:bg-[#d8c9a8]">
            <p className="text-2xl font-bold text-[#16392e]">30+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6f5c28]">
              Projects Completed
            </p>
            <p className="mt-3 text-xs text-[#2f473d]">From startups to enterprises</p>
          </div>
          <div className="rounded-3xl border-2 border-[#8f7a3d]/45 bg-[#dfd2b3] p-5 transition hover:bg-[#d8c9a8]">
            <p className="text-2xl font-bold text-[#16392e]">15+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6f5c28]">
              Happy Clients
            </p>
            <p className="mt-3 text-xs text-[#2f473d]">Worldwide collaborations</p>
          </div>
          <div className="rounded-3xl border-2 border-[#8f7a3d]/45 bg-[#dfd2b3] p-5 transition hover:bg-[#d8c9a8]">
            <p className="text-2xl font-bold text-[#16392e]">8</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6f5c28]">
              Technologies
            </p>
            <p className="mt-3 text-xs text-[#2f473d]">Expert proficiency</p>
          </div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section className="border-y-2 border-[#8f7a3d]/45 bg-[#e6dcc3] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6f5c28]">
              My Journey
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#16392e]">Experience & Expertise</h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-[#8f7a3d]/45 bg-[#dfd2b3] p-5 transition hover:shadow-md">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-[#16392e]">Senior Frontend Developer</h3>
                  <span className="rounded-full bg-[#efe7d2] px-3 py-1 text-xs text-[#6f5c28]">2021-Present</span>
                </div>
                <p className="mt-2 text-sm font-medium text-[#2f473d]">Tech Innovations Inc.</p>
                <p className="mt-3 text-sm leading-6 text-[#2f473d]">
                  Leading frontend development for enterprise applications. Built scalable React architectures, mentored junior developers, and implemented modern design systems.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-[#8f7a3d]/45 bg-[#dfd2b3] p-5 transition hover:shadow-md">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-[#16392e]">Full-Stack Developer</h3>
                  <span className="rounded-full bg-[#efe7d2] px-3 py-1 text-xs text-[#6f5c28]">2019-2021</span>
                </div>
                <p className="mt-2 text-sm font-medium text-[#2f473d]">Digital Solutions Ltd.</p>
                <p className="mt-3 text-sm leading-6 text-[#2f473d]">
                  Developed end-to-end web applications using React, Node.js, and MongoDB. Collaborated with design teams to create intuitive user experiences.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-[#8f7a3d]/45 bg-[#dfd2b3] p-5 transition hover:shadow-md">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-[#16392e]">Junior Web Developer</h3>
                  <span className="rounded-full bg-[#efe7d2] px-3 py-1 text-xs text-[#6f5c28]">2018-2019</span>
                </div>
                <p className="mt-2 text-sm font-medium text-[#2f473d]">StartUp Hub</p>
                <p className="mt-3 text-sm leading-6 text-[#2f473d]">
                  Started my journey in web development, learning modern frameworks and contributing to multiple projects. Built responsive websites and learned agile methodologies.
                </p>
              </article>
            </div>
          </div>

          {/* Skills & Tech Stack */}
          <div className="rounded-3xl border-2 border-[#8f7a3d]/45 bg-[#dfd2b3] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6f5c28]">
              Tech Stack
            </p>
            <h3 className="mb-5 mt-2 text-lg font-semibold text-[#16392e]">Core Technologies</h3>
            
            <div className="grid gap-3 sm:grid-cols-2">
              {/* Technology Icons/Cards */}
              <div className="flex items-center gap-3 rounded-xl border border-[#8f7a3d]/35 bg-[#d8c9a8] p-3">
                <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-[#1f5c44] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JS</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#16392e]">JavaScript</p>
                  <p className="text-xs text-[#6f5c28]">ES6+</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-[#8f7a3d]/35 bg-[#d8c9a8] p-3">
                <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-[#8f7a3d] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#16392e]">React</p>
                  <p className="text-xs text-[#6f5c28]">18+</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-[#8f7a3d]/35 bg-[#d8c9a8] p-3">
                <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-[#1f5c44] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TS</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#16392e]">TypeScript</p>
                  <p className="text-xs text-[#6f5c28]">5+</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-[#8f7a3d]/35 bg-[#d8c9a8] p-3">
                <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-[#8f7a3d] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TW</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#16392e]">Tailwind</p>
                  <p className="text-xs text-[#6f5c28]">CSS</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-[#8f7a3d]/35 bg-[#d8c9a8] p-3">
                <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-[#1f5c44] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#16392e]">Node.js</p>
                  <p className="text-xs text-[#6f5c28]">Backend</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-[#8f7a3d]/35 bg-[#d8c9a8] p-3">
                <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-[#8f7a3d] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GH</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#16392e]">Git/GitHub</p>
                  <p className="text-xs text-[#6f5c28]">VCS</p>
                </div>
              </div>
            </div>

            <Button className="mt-5 w-full">Download Resume</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
