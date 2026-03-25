import Button from '../components/Button';
import reactLogo from '../assets/react.svg';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* Hero Section with Real Content */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Modern Web Development
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Build Beautiful, Responsive Websites with React & Tailwind CSS
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Learn component-based design, modern routing, and responsive layouts. Create stunning user interfaces with clean code and professional styling techniques that scale.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/about" variant="primary">
                Learn More
              </Button>
              <Button to="/articles">View Articles</Button>
            </div>
          </div>

          {/* Hero Image with React Logo */}
          <div className="rounded-3xl border-2 border-zinc-900 bg-gradient-to-br from-cyan-50 via-blue-50 to-zinc-100 p-6 shadow-lg">
            <div className="flex min-h-64 items-center justify-center rounded-[1.25rem] bg-zinc-50/50 backdrop-blur">
              <div className="text-center p-8">
                <img 
                  src={reactLogo} 
                  alt="React Logo" 
                  className="w-24 h-24 mx-auto"
                  style={{ animation: 'spin 20s linear infinite' }}
                />
                <p className="mt-6 text-sm text-zinc-600 font-semibold">Powered by React</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section with Real Stats */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Our Impact
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Building Excellence in Web Development</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 hover:bg-zinc-50 transition">
            <p className="text-2xl font-bold text-zinc-900">50+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Projects Completed
            </p>
            <p className="mt-3 text-xs text-zinc-600">Successfully delivered web applications</p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 hover:bg-zinc-50 transition">
            <p className="text-2xl font-bold text-zinc-900">100%</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Client Satisfaction
            </p>
            <p className="mt-3 text-xs text-zinc-600">Positive feedback from all clients</p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 hover:bg-zinc-50 transition">
            <p className="text-2xl font-bold text-zinc-900">5 Years</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Experience
            </p>
            <p className="mt-3 text-xs text-zinc-600">Building modern web solutions</p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 hover:bg-zinc-50 transition">
            <p className="text-2xl font-bold text-zinc-900">24/7</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Support
            </p>
            <p className="mt-3 text-xs text-zinc-600">Always available to help you</p>
          </div>
        </div>
      </section>

      {/* Feature Cards with Real Content */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Our Services
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">What We Offer</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Card 1: React Development */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 hover:shadow-lg transition-all">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                </svg>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">React Development</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Build modern, component-based applications with React. Create reusable UI components and scalable architecture for your web projects.
            </p>
            <Button className="mt-4" variant="primary">Learn More</Button>
          </article>

          {/* Card 2: Responsive Design */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 hover:shadow-lg transition-all">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-purple-50 to-purple-100 overflow-hidden">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Responsive Design</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Create beautiful layouts that adapt seamlessly across all devices. Mobile-first approach with Tailwind CSS for perfect responsiveness.
            </p>
            <Button className="mt-4" variant="primary">Learn More</Button>
          </article>

          {/* Card 3: Clean Code */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 hover:shadow-lg transition-all">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Clean Code Practices</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Write maintainable, well-structured code following industry best practices. Clear component architecture and professional standards.
            </p>
            <Button className="mt-4" variant="primary">Learn More</Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;