import { AcademicCapIcon, UsersIcon, BriefcaseIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import image from "../assets/strip.jpg"

const strip = [
  {
    id: 1,
    icon: AcademicCapIcon,
    value: "50",
    label: "PROJECTS",
  },
  {
    id: 2,
    icon: BriefcaseIcon,
    value: "8+",
    label: "EXPERIENCE",
  },
  {
    id: 3,
    icon: UsersIcon,
    value: "500",
    label: "EMPLOYEES",
  },
  {
    id: 4,
    icon: PencilSquareIcon,
    value: "80+",
    label: "PRODUCTS",
  },
];

export default function StripSection() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-6 flex flex-wrap justify-center gap-12 text-center">
        {strip.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <item.icon className="w-12 h-12 text-white mb-2" />
            <p className="text-3xl font-bold text-secondary">{item.value}</p>
            <p className="text-white uppercase tracking-wide">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
