import { useNavigate } from "react-router-dom";

const categories = [
  { name: "SkillLehanga", img: "https://images.shaadisaga.com/shaadisaga_production/photos/pictures/003/137/503/new_large/sabyasachi_copy.jpg?1641032236"},
  { name: "VelvetLehenga", img: "https://i.etsystatic.com/25391003/r/il/869791/3106745812/il_1140xN.3106745812_oarb.jpg" },
  { name: "Georgettelegha", img: "https://getethnic.com/wp-content/uploads/2021/11/Velvet-lehenga-36.jpg"},
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      {/* Circle Categories */}
      <div className="flex gap-6 overflow-x-auto py-4">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate(`/category/${cat.name}`)}
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-24 h-24 rounded-full object-cover border border-gray-300"
            />
            <p className="mt-2 text-sm font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}