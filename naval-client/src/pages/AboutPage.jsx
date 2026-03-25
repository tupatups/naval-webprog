import Button from '../components/Button';
import profileImg from '../assets/profile.jpg';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* Hero Section with Profile */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-zinc-900 bg-gradient-to-br from-zinc-100 to-zinc-200 shadow-lg overflow-hidden">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-zinc-50 p-6">
              {/* Your Profile Image */}
              <img 
                src={profileImg} 
                alt="Profile Photo" 
                className="max-w-full max-h-full object-contain rounded-2xl"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Me
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Full-Stack Developer & UI/UX Enthusiast
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
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
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Professional Journey
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Career Highlights</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 hover:bg-zinc-50 transition">
            <p className="text-2xl font-bold text-zinc-900">5+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Years Experience
            </p>
            <p className="mt-3 text-xs text-zinc-600">Building web applications</p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 hover:bg-zinc-50 transition">
            <p className="text-2xl font-bold text-zinc-900">30+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Projects Completed
            </p>
            <p className="mt-3 text-xs text-zinc-600">From startups to enterprises</p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 hover:bg-zinc-50 transition">
            <p className="text-2xl font-bold text-zinc-900">15+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Happy Clients
            </p>
            <p className="mt-3 text-xs text-zinc-600">Worldwide collaborations</p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 hover:bg-zinc-50 transition">
            <p className="text-2xl font-bold text-zinc-900">8</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Technologies
            </p>
            <p className="mt-3 text-xs text-zinc-600">Expert proficiency</p>
          </div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              My Journey
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Experience & Expertise</h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 hover:shadow-md transition">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-zinc-900">Senior Frontend Developer</h3>
                  <span className="text-xs text-zinc-500 bg-zinc-200 px-3 py-1 rounded-full">2021-Present</span>
                </div>
                <p className="mt-2 text-sm text-zinc-600 font-medium">Tech Innovations Inc.</p>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Leading frontend development for enterprise applications. Built scalable React architectures, mentored junior developers, and implemented modern design systems.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 hover:shadow-md transition">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-zinc-900">Full-Stack Developer</h3>
                  <span className="text-xs text-zinc-500 bg-zinc-200 px-3 py-1 rounded-full">2019-2021</span>
                </div>
                <p className="mt-2 text-sm text-zinc-600 font-medium">Digital Solutions Ltd.</p>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Developed end-to-end web applications using React, Node.js, and MongoDB. Collaborated with design teams to create intuitive user experiences.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 hover:shadow-md transition">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-zinc-900">Junior Web Developer</h3>
                  <span className="text-xs text-zinc-500 bg-zinc-200 px-3 py-1 rounded-full">2018-2019</span>
                </div>
                <p className="mt-2 text-sm text-zinc-600 font-medium">StartUp Hub</p>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Started my journey in web development, learning modern frameworks and contributing to multiple projects. Built responsive websites and learned agile methodologies.
                </p>
              </article>
            </div>
          </div>

          {/* Skills & Tech Stack */}
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Tech Stack
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900 mb-5">Core Technologies</h3>
            
            <div className="grid gap-3 sm:grid-cols-2">
              {/* Technology Icons/Cards */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">JS</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">JavaScript</p>
                  <p className="text-xs text-zinc-500">ES6+</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">React</p>
                  <p className="text-xs text-zinc-500">18+</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">TS</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">TypeScript</p>
                  <p className="text-xs text-zinc-500">5+</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">TW</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Tailwind</p>
                  <p className="text-xs text-zinc-500">CSS</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Node.js</p>
                  <p className="text-xs text-zinc-500">Backend</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">GH</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Git/GitHub</p>
                  <p className="text-xs text-zinc-500">VCS</p>
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