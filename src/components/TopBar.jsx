import DarkToggle from './DarkToggle';

export default function TopBar() {
  return (
    <div id="home" className="flex flex-col sm:flex-row relative isolate justify-center items-center gap-3 sm:gap-6 overflow-hidden bg-gray-800 px-3 sm:px-6 py-4 sm:py-3">
        <p className="text-sm/6 text-white text-center">
          <strong className="font-semibold">GeneriCon 2023</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          Join us in Denver from June 7 – 9 to see what’s coming next.
        </p>
        <a
          href="#"
          className="flex-none rounded-full bg-white px-3.5 py-1 text-sm font-semibold text-gray-800 border hover:bg-transparent hover:text-white"
        >
          Register <span aria-hidden="true">&rarr;</span>
        </a>
        <DarkToggle />

    </div>
  );
}