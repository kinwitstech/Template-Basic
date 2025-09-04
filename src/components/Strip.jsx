import { AcademicCapIcon, UsersIcon, BriefcaseIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

const strip = [
  {
    id: 1,
    icon: AcademicCapIcon,
    value: "50",
    label: "PROJECTsS",
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
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1470&auto=format&fit=crop&ixlib=rb)` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="section-container relative z-10 py-16 px-6 flex flex-wrap justify-center gap-12 lg:gap-30"> 
        {strip.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <item.icon className="w-12 h-12 text-white" />

            <div className="flex flex-col text-left">
              <p className="text-4xl font-bold text-secondary">{item.value}</p>
              <p className="text-white text-md tracking-wide">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
