import Button from '../components/Button';

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* Header Section */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Tech Blog
        </p>
        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          Latest Articles on Web Development
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
          Explore tutorials, best practices, and insights about modern web development. Learn React, TypeScript, and design patterns from real-world projects.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button to="/">Back Home</Button>
          <Button variant="primary">Subscribe</Button>
        </div>
      </section>

      {/* Featured Article Grid */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Posts
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Recent Articles</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {/* Article 1: React Hooks */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 hover:shadow-lg transition-all group">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
              {/* Replace with: <img src="/images/react-hooks.jpg" alt="React Hooks" className="w-full h-full object-cover group-hover:scale-105 transition-transform" /> */}
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-blue-500 rounded-2xl flex items-center justify-center mb-3">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                  </svg>
                </div>
                <p className="text-xs text-zinc-500">Featured Image</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">React</span>
              <span className="text-zinc-300">•</span>
              <span className="text-xs text-zinc-400">5 min read</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-zinc-900">Mastering React Hooks in 2024</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A comprehensive guide to useState, useEffect, and custom hooks. Learn how to build powerful React applications with modern hook patterns and best practices.
            </p>
            <Button className="mt-4">Read Article</Button>
          </article>

          {/* Article 2: TypeScript */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 hover:shadow-lg transition-all group">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-indigo-50 to-indigo-100 overflow-hidden">
              {/* Replace with: <img src="/images/typescript.jpg" alt="TypeScript" className="w-full h-full object-cover group-hover:scale-105 transition-transform" /> */}
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-blue-600 rounded-2xl flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-2xl">TS</span>
                </div>
                <p className="text-xs text-zinc-500">Featured Image</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">TypeScript</span>
              <span className="text-zinc-300">•</span>
              <span className="text-xs text-zinc-400">8 min read</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-zinc-900">TypeScript Best Practices</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Write type-safe code with confidence. Explore advanced TypeScript features, generics, and how to leverage the type system for better developer experience.
            </p>
            <Button className="mt-4">Read Article</Button>
          </article>

          {/* Article 3: Tailwind CSS */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 hover:shadow-lg transition-all group">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-teal-50 to-cyan-100 overflow-hidden">
              {/* Replace with: <img src="/images/tailwind.jpg" alt="Tailwind CSS" className="w-full h-full object-cover group-hover:scale-105 transition-transform" /> */}
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-teal-500 rounded-2xl flex items-center justify-center mb-3">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                  </svg>
                </div>
                <p className="text-xs text-zinc-500">Featured Image</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">CSS</span>
              <span className="text-zinc-300">•</span>
              <span className="text-xs text-zinc-400">6 min read</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-zinc-900">Tailwind CSS Design Systems</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Build consistent, scalable interfaces with Tailwind. Learn utility-first CSS, custom configurations, and how to create beautiful designs efficiently.
            </p>
            <Button className="mt-4">Read Article</Button>
          </article>

          {/* Article 4: Performance */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 hover:shadow-lg transition-all group">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
              {/* Replace with: <img src="/images/performance.jpg" alt="Performance" className="w-full h-full object-cover group-hover:scale-105 transition-transform" /> */}
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-orange-500 rounded-2xl flex items-center justify-center mb-3">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-xs text-zinc-500">Featured Image</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Performance</span>
              <span className="text-zinc-300">•</span>
              <span className="text-xs text-zinc-400">10 min read</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-zinc-900">Web Performance Optimization</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Speed up your React apps with lazy loading, code splitting, and memoization. Essential techniques for building lightning-fast user experiences.
            </p>
            <Button className="mt-4">Read Article</Button>
          </article>

          {/* Article 5: Component Design */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 hover:shadow-lg transition-all group">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-purple-50 to-purple-100 overflow-hidden">
              {/* Replace with: <img src="/images/components.jpg" alt="Components" className="w-full h-full object-cover group-hover:scale-105 transition-transform" /> */}
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-purple-500 rounded-2xl flex items-center justify-center mb-3">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                  </svg>
                </div>
                <p className="text-xs text-zinc-500">Featured Image</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Design</span>
              <span className="text-zinc-300">•</span>
              <span className="text-xs text-zinc-400">7 min read</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-zinc-900">Reusable Component Patterns</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Design flexible, maintainable React components. Learn composition patterns, prop drilling solutions, and component architecture strategies.
            </p>
            <Button className="mt-4">Read Article</Button>
          </article>

          {/* Article 6: State Management */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 hover:shadow-lg transition-all group">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-pink-50 to-rose-100 overflow-hidden">
              {/* Replace with: <img src="/images/state-management.jpg" alt="State Management" className="w-full h-full object-cover group-hover:scale-105 transition-transform" /> */}
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-pink-500 rounded-2xl flex items-center justify-center mb-3">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <p className="text-xs text-zinc-500">Featured Image</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Architecture</span>
              <span className="text-zinc-300">•</span>
              <span className="text-xs text-zinc-400">12 min read</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-zinc-900">Modern State Management</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Compare Redux, Zustand, and Context API. Choose the right state management solution for your application's complexity and scale.
            </p>
            <Button className="mt-4">Read Article</Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;