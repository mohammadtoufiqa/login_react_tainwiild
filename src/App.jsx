import { useState } from 'react';

const inputClasses =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-300/50 focus:border-aurora/60 focus:outline-none focus:ring-2 focus:ring-aurora/40';

function IconEnvelope(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3.75 5.75A1.75 1.75 0 0 1 5.5 4h13a1.75 1.75 0 0 1 1.75 1.75v12.5A1.75 1.75 0 0 1 18.5 20H5.5a1.75 1.75 0 0 1-1.75-1.75V5.75Z" />
      <path d="m5 6 7 6 7-6" />
    </svg>
  );
}

function IconLock(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7.5 10V7a4.5 4.5 0 0 1 9 0v3" />
      <rect x="5" y="10" width="14" height="11" rx="2.5" />
      <path d="M12 15v3" />
    </svg>
  );
}

function TextField({ icon: Icon, id, label, type = 'text', value, onChange, placeholder }) {
  return (
    <label className="group block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-slate-200/80">
        {label}
      </span>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-200/70 group-focus-within:text-aurora">
          <Icon className="h-5 w-5" />
        </div>
        <input
          id={id}
          type={type}
          autoComplete={type === 'password' ? 'current-password' : 'email'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${inputClasses} pl-11 backdrop-blur-xl`}
        />
      </div>
    </label>
  );
}

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email: ${email}\nPassword: ${'*'.repeat(password.length)}\nRemember me: ${remember}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-night via-slate-900 to-black text-slate-100">
      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.35),transparent_60%)]"></div>
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.2),transparent_50%)] blur-3xl"></div>

        <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-center">
          <div className="max-w-xl text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.4em] text-aurora/80">Tainwild UI</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Masuk ke dunia <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora to-mist">Glassmorphism</span>
            </h1>
            <p className="mt-6 text-base text-slate-300">
              Jelajahi pengalaman login modern dengan efek kaca transparan, kombinasi warna neon,
              dan estetika futuristik. Dibangun dengan React dan Tailwind CSS.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-neon backdrop-blur-2xl before:absolute before:-left-10 before:-top-10 before:h-32 before:w-32 before:rounded-full before:bg-aurora/40 before:blur-3xl before:content-[''] after:absolute after:-bottom-12 after:-right-12 after:h-40 after:w-40 after:rounded-full after:bg-mist/30 after:blur-3xl after:content-['']"
          >
            <div className="relative z-10">
              <h2 className="text-center text-2xl font-semibold text-white">Selamat Datang</h2>
              <p className="mt-2 text-center text-sm text-slate-300">
                Masukkan kredensial Anda untuk mengakses dashboard Tainwild.
              </p>

              <div className="mt-8 space-y-6">
                <TextField
                  icon={IconEnvelope}
                  id="email"
                  label="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="nama@perusahaan.com"
                />

                <TextField
                  icon={IconLock}
                  id="password"
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                />

                <div className="flex items-center justify-between text-sm text-slate-300">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-white/20 bg-white/10 text-aurora focus:ring-aurora/40"
                      checked={remember}
                      onChange={(event) => setRemember(event.target.checked)}
                    />
                    Ingat saya
                  </label>
                  <a href="#" className="font-medium text-aurora transition hover:text-mist">
                    Lupa password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-2xl bg-gradient-to-r from-aurora via-mist to-aurora px-6 py-3 text-sm font-semibold uppercase tracking-wide text-night shadow-lg shadow-aurora/20 transition hover:from-mist hover:to-aurora"
              >
                Masuk
              </button>

              <p className="mt-6 text-center text-xs text-slate-400">
                Belum punya akun?{' '}
                <a href="#" className="font-medium text-mist transition hover:text-white">
                  Daftar sekarang
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
