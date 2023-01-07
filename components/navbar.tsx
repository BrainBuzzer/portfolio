export default function Navbar() {
  return (
    <div className="flex flex-row justify-end">
      <ul className="flex flex-row gap-12">
        <li className="px-4 py-2">
          <a href="#" className="font-bold underline">
            Home
          </a>
        </li>
        <li className="px-4 py-2">
          <a href="#">About</a>
        </li>
        <li className="px-4 py-2">
          <a href="#">Projects</a>
        </li>
        <li className="px-4 py-2">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}
