export default function Banner({ title }) {
  return (
    <div className="h-64 flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-semibold text-center">
        {title}
      </h1>
    </div>
  );
}
