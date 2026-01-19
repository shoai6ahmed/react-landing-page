export default function Banner({ title }) {
  return (
    <div className="pt-12 flex items-center justify-center">
      <h1 className="text-3xl font-semibold text-center">
        {title}
      </h1>
    </div>
  );
}
