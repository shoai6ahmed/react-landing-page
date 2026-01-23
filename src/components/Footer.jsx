export default function Footer() {
  return (
    <div className="flex relative isolate justify-center items-center overflow-hidden bg-white dark:bg-gray-800 px-3 sm:px-6 py-4 sm:py-6 border-t border-t-gray-300 dark:border-t-gray-800">
        <p className="text-base text-black dark:text-white text-center">
          &copy; {new Date().getFullYear()} Landing Page. All Rights Reserved.           
        </p>
    </div>
  );
}