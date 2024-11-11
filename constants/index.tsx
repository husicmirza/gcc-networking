import {
  IconBuildings,
  IconUsers,
  IconHome,
  IconBlockquote,
  IconMessage,
  IconBriefcase,
} from "@tabler/icons-react";

export const sidebarLinks = [
  // {
  //   label: "Dashboard",
  //   href: "/dashboard",
  //   icon: <IconDashboard className="text-neutral-700 h-5 w-5 flex-shrink-0" />,
  // },

  {
    label: "People",
    href: "/dashboard/people",
    icon: <IconUsers className="text-neutral-700 h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Companies",
    href: "/dashboard/companies",
    icon: <IconBuildings className="text-neutral-700 h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Services",
    href: "/dashboard/services",
    icon: <IconBriefcase className="text-neutral-700 h-5 w-5 flex-shrink-0" />,
  },
];

export const navItems = [
  {
    label: "Home",
    href: "/",
    icon: (
      <IconHome className="h-5 w-5 text-neutral-700 hover:text-neutral-500" />
    ),
  },
  {
    label: "Blog",
    href: "/posts",
    icon: (
      <IconBlockquote className="h-5 w-5 text-neutral-700 hover:text-neutral-500" />
    ),
  },
  {
    label: "Contact",
    href: "/contact",
    icon: (
      <IconMessage className="h-5 w-5 text-neutral-700 hover:text-neutral-500" />
    ),
  },
];

export const companyItems = [
  {
    title: "Techman Solutions",
    description:
      "We specialize in designing, implementing, and maintaining cutting-edge ICT and ELV solutions, including IP-based systems and network infrastructure.",
    header: "/assets/full-logo.png",
    badge: "IT",
  },
  {
    title: "Techman Solutions",
    description:
      "We specialize in designing, implementing, and maintaining cutting-edge ICT and ELV solutions, including IP-based systems and network infrastructure.",
    header: "/assets/medax-logo.png",
    badge: "Farmacy",
  },
  {
    title: "Techman Solutions",
    description: "We specialize in designing, implementing, and maintaining.",
    header: "/assets/odoo-logo.png",
    badge: "Software and Hardware",
  },
  {
    title: "Techman Solutions",
    description:
      "maintaining cutting-edge ICT and ELV solutions, including IP-based systems and network infrastructure.",
    header: "/assets/free-logo.svg",
    badge: "Hospitality",
  },
];
export const peopleItems = [
  {
    title: "Mirza Husic",
    description:
      "Full Stack maker & UI / UX Designer, love hip hop music. Author of Building UI.",
    image: "/assets/me1.png",
    badge: "Information Technology/IT	",
    location: "Doha, Qatar",
  },
  {
    title: "Mirsad Selimovic",
    description: "Managing Partner, CEO",
    image: "/assets/me1.png",
    badge: "Information Technology/IT	",
    location: "Doha, Qatar",
  },
  {
    title: "Seid Halilcevic",
    description: "Managing Partner, CTO",
    image: "/assets/me1.png",
    badge: "Information Technology/IT	",
    location: "Doha, Qatar",
  },
  {
    title: "Mirza Husic",
    description:
      "Full Stack maker & UI / UX Designer, love hip hop music. Author of Building UI.",
    image: "/assets/me1.png",
    badge: "Information Technology/IT	",
    location: "Doha, Qatar",
  },
];

export const serviceItems = [
  {
    title: "Accessibility tools for designers and developers",
    description:
      "In the heart of the bustling city, where dreams meet determination, people walk with purpose. Each face tells a unique story, etched with hopes and aspirations. Beneath the surface lies resilience, a strength unshaken by challenges abcd.",
    avatar: "/assets/me1.png",
    badge: "Hospitality",
    date: "12, May, 2022",
    author: "Mirza Husic",
  },
  {
    title: "Designing with Inclusivity in Mind",
    description:
      "Amidst the evolving landscape of digital design, inclusivity stands as a guiding principle. Designers craft with empathy, ensuring every interface reflects the diversity of its users, embracing both function and accessibility.",
    avatar: "/assets/me1.png",
    badge: "Technology",
    date: "20, August, 2022",
    author: "Mirza Husic",
  },
  {
    title: "Breaking Barriers in UX Design",
    description:
      "In a world driven by user experiences, barriers fade when designers prioritize usability. By merging simplicity with purpose, each interaction becomes a bridge, fostering connections that transcend screens and resonate with authenticity.",
    avatar: "/assets/me1.png",
    badge: "Innovation",
    date: "15, September, 2022",
    author: "Mirza Husic",
  },
  {
    title: "The Power of Collaborative Design",
    description:
      "At the crossroads of creativity and collaboration, design becomes a shared journey. Every idea is a stepping stone, each perspective a catalyst, building interfaces that are as diverse as the teams behind them.",
    avatar: "/assets/me1.png",
    badge: "Collaboration",
    date: "30, November, 2022",
    author: "Mirza Husic",
  },
];
export const originCountryOptions = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "Bosnia and Herzegovina",
    label: "Bosnia and Herzegovina",
  },
  {
    value: "Croatia",
    label: "Croatia",
  },
  {
    value: "Kosovo",
    label: "Kosovo",
  },
  {
    value: "Montenegro",
    label: "Montenegro",
  },
  {
    value: "North Macedonia",
    label: "North Macedonia",
  },
  {
    value: "Serbia",
    label: "Serbia",
  },
  {
    value: "Slovenia",
    label: "Slovenia",
  },
  {
    value: "Other",
    label: "Other",
  },
];
export const countryOptions = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "Bahrain",
    label: "Bahrain",
  },
  {
    value: "Kuwait",
    label: "Kuwait",
  },
  {
    value: "Oman",
    label: "Oman",
  },
  {
    value: "Qatar",
    label: "Qatar",
  },
  {
    value: "Saudi Arabia",
    label: "Saudi Arabia",
  },
  {
    value: "United Arab Emirates",
    label: "United Arab Emirates",
  },
  {
    value: "Other",
    label: "Other",
  },
];

export const industryOptions = [
  {
    value: "all",
    label: "All",
  },
  {
    label: "Accounting",
    value: "Accounting",
  },
  {
    label: "Airlines/Aviation",
    value: "Airlines/Aviation",
  },
  {
    label: "Alternative Dispute Resolution",
    value: "Alternative Dispute Resolution",
  },
  {
    label: "Alternative Medicine",
    value: "Alternative Medicine",
  },
  {
    label: "Animation",
    value: "Animation",
  },
  {
    label: "Apparel/Fashion",
    value: "Apparel/Fashion",
  },
  {
    label: "Architecture/Planning",
    value: "Architecture/Planning",
  },
  {
    label: "Arts/Crafts",
    value: "Arts/Crafts",
  },
  {
    label: "Automotive",
    value: "Automotive",
  },
  {
    label: "Aviation/Aerospace",
    value: "Aviation/Aerospace",
  },
  {
    label: "Banking/Mortgage",
    value: "Banking/Mortgage",
  },
  {
    label: "Biotechnology/Greentech",
    value: "Biotechnology/Greentech",
  },
  {
    label: "Broadcast Media",
    value: "Broadcast Media",
  },
  {
    label: "Building Materials",
    value: "Building Materials",
  },
  {
    label: "Business Supplies/Equipment",
    value: "Business Supplies/Equipment",
  },
  {
    label: "Capital Markets/Hedge Fund/Private Equity",
    value: "Capital Markets/Hedge Fund/Private Equity",
  },
  {
    label: "Chemicals",
    value: "Chemicals",
  },
  {
    label: "Civic/Social Organization",
    value: "Civic/Social Organization",
  },
  {
    label: "Civil Engineering",
    value: "Civil Engineering",
  },
  {
    label: "Commercial Real Estate",
    value: "Commercial Real Estate",
  },
  {
    label: "Computer Games",
    value: "Computer Games",
  },
  {
    label: "Computer Hardware",
    value: "Computer Hardware",
  },
  {
    label: "Computer Networking",
    value: "Computer Networking",
  },
  {
    label: "Computer Software/Engineering",
    value: "Computer Software/Engineering",
  },
  {
    label: "Computer/Network Security",
    value: "Computer/Network Security",
  },
  {
    label: "Construction",
    value: "Construction",
  },
  {
    label: "Consumer Electronics",
    value: "Consumer Electronics",
  },
  {
    label: "Consumer Goods",
    value: "Consumer Goods",
  },
  {
    label: "Consumer Services",
    value: "Consumer Services",
  },
  {
    label: "Cosmetics",
    value: "Cosmetics",
  },
  {
    label: "Dairy",
    value: "Dairy",
  },
  {
    label: "Defense/Space",
    value: "Defense/Space",
  },
  {
    label: "Design",
    value: "Design",
  },
  {
    label: "E-Learning",
    value: "E-Learning",
  },
  {
    label: "Education Management",
    value: "Education Management",
  },
  {
    label: "Electrical/Electronic Manufacturing",
    value: "Electrical/Electronic Manufacturing",
  },
  {
    label: "Entertainment/Movie Production",
    value: "Entertainment/Movie Production",
  },
  {
    label: "Environmental Services",
    value: "Environmental Services",
  },
  {
    label: "Events Services",
    value: "Events Services",
  },
  {
    label: "Executive Office",
    value: "Executive Office",
  },
  {
    label: "Facilities Services",
    value: "Facilities Services",
  },
  {
    label: "Farming",
    value: "Farming",
  },
  {
    label: "Financial Services",
    value: "Financial Services",
  },
  {
    label: "Fine Art",
    value: "Fine Art",
  },
  {
    label: "Fishery",
    value: "Fishery",
  },
  {
    label: "Food Production",
    value: "Food Production",
  },
  {
    label: "Food/Beverages",
    value: "Food/Beverages",
  },
  {
    label: "Fundraising",
    value: "Fundraising",
  },
  {
    label: "Furniture",
    value: "Furniture",
  },
  {
    label: "Gambling/Casinos",
    value: "Gambling/Casinos",
  },
  {
    label: "Glass/Ceramics/Concrete",
    value: "Glass/Ceramics/Concrete",
  },
  {
    label: "Government Administration",
    value: "Government Administration",
  },
  {
    label: "Government Relations",
    value: "Government Relations",
  },
  {
    label: "Graphic Design/Web Design",
    value: "Graphic Design/Web Design",
  },
  {
    label: "Health/Fitness",
    value: "Health/Fitness",
  },
  {
    label: "Higher Education/Acadamia",
    value: "Higher Education/Acadamia",
  },
  {
    label: "Hospital/Health Care",
    value: "Hospital/Health Care",
  },
  {
    label: "Hospitality",
    value: "Hospitality",
  },
  {
    label: "Human Resources/HR",
    value: "Human Resources/HR",
  },
  {
    label: "Import/Export",
    value: "Import/Export",
  },
  {
    label: "Individual/Family Services",
    value: "Individual/Family Services",
  },
  {
    label: "Industrial Automation",
    value: "Industrial Automation",
  },
  {
    label: "Information Services",
    value: "Information Services",
  },
  {
    label: "Information Technology/IT",
    value: "Information Technology/IT",
  },
  {
    label: "Insurance",
    value: "Insurance",
  },
  {
    label: "International Affairs",
    value: "International Affairs",
  },
  {
    label: "International Trade/Development",
    value: "International Trade/Development",
  },
  {
    label: "Internet",
    value: "Internet",
  },
  {
    label: "Investment Banking/Venture",
    value: "Investment Banking/Venture",
  },
  {
    label: "Investment Management/Hedge Fund/Private Equity",
    value: "Investment Management/Hedge Fund/Private Equity",
  },
  {
    label: "Judiciary",
    value: "Judiciary",
  },
  {
    label: "Law Enforcement",
    value: "Law Enforcement",
  },
  {
    label: "Law Practice/Law Firms",
    value: "Law Practice/Law Firms",
  },
  {
    label: "Legal Services",
    value: "Legal Services",
  },
  {
    label: "Legislative Office",
    value: "Legislative Office",
  },
  {
    label: "Leisure/Travel",
    value: "Leisure/Travel",
  },
  {
    label: "Library",
    value: "Library",
  },
  {
    label: "Logistics/Procurement",
    value: "Logistics/Procurement",
  },
  {
    label: "Luxury Goods/Jewelry",
    value: "Luxury Goods/Jewelry",
  },
  {
    label: "Machinery",
    value: "Machinery",
  },
  {
    label: "Management Consulting",
    value: "Management Consulting",
  },
  {
    label: "Maritime",
    value: "Maritime",
  },
  {
    label: "Market Research",
    value: "Market Research",
  },
  {
    label: "Marketing/Advertising/Sales",
    value: "Marketing/Advertising/Sales",
  },
  {
    label: "Mechanical or Industrial Engineering",
    value: "Mechanical or Industrial Engineering",
  },
  {
    label: "Media Production",
    value: "Media Production",
  },
  {
    label: "Medical Equipment",
    value: "Medical Equipment",
  },
  {
    label: "Medical Practice",
    value: "Medical Practice",
  },
  {
    label: "Mental Health Care",
    value: "Mental Health Care",
  },
  {
    label: "Military Industry",
    value: "Military Industry",
  },
  {
    label: "Mining/Metals",
    value: "Mining/Metals",
  },
  {
    label: "Motion Pictures/Film",
    value: "Motion Pictures/Film",
  },
  {
    label: "Museums/Institutions",
    value: "Museums/Institutions",
  },
  {
    label: "Music",
    value: "Music",
  },
  {
    label: "Nanotechnology",
    value: "Nanotechnology",
  },
  {
    label: "Newspapers/Journalism",
    value: "Newspapers/Journalism",
  },
  {
    label: "Non-Profit/Volunteering",
    value: "Non-Profit/Volunteering",
  },
  {
    label: "Oil/Energy/Solar/Greentech",
    value: "Oil/Energy/Solar/Greentech",
  },
  {
    label: "Online Publishing",
    value: "Online Publishing",
  },
  {
    label: "Other Industry",
    value: "Other Industry",
  },
  {
    label: "Outsourcing/Offshoring",
    value: "Outsourcing/Offshoring",
  },
  {
    label: "Package/Freight Delivery",
    value: "Package/Freight Delivery",
  },
  {
    label: "Packaging/Containers",
    value: "Packaging/Containers",
  },
  {
    label: "Paper/Forest Products",
    value: "Paper/Forest Products",
  },
  {
    label: "Performing Arts",
    value: "Performing Arts",
  },
  {
    label: "Pharmaceuticals",
    value: "Pharmaceuticals",
  },
  {
    label: "Philanthropy",
    value: "Philanthropy",
  },
  {
    label: "Photography",
    value: "Photography",
  },
  {
    label: "Plastics",
    value: "Plastics",
  },
  {
    label: "Political Organization",
    value: "Political Organization",
  },
  {
    label: "Primary/Secondary Education",
    value: "Primary/Secondary Education",
  },
  {
    label: "Printing",
    value: "Printing",
  },
  {
    label: "Professional Training",
    value: "Professional Training",
  },
  {
    label: "Program Development",
    value: "Program Development",
  },
  {
    label: "Public Relations/PR",
    value: "Public Relations/PR",
  },
  {
    label: "Public Safety",
    value: "Public Safety",
  },
  {
    label: "Publishing Industry",
    value: "Publishing Industry",
  },
  {
    label: "Railroad Manufacture",
    value: "Railroad Manufacture",
  },
  {
    label: "Ranching",
    value: "Ranching",
  },
  {
    label: "Real Estate/Mortgage",
    value: "Real Estate/Mortgage",
  },
  {
    label: "Recreational Facilities/Services",
    value: "Recreational Facilities/Services",
  },
  {
    label: "Religious Institutions",
    value: "Religious Institutions",
  },
  {
    label: "Renewables/Environment",
    value: "Renewables/Environment",
  },
  {
    label: "Research Industry",
    value: "Research Industry",
  },
  {
    label: "Restaurants",
    value: "Restaurants",
  },
  {
    label: "Retail Industry",
    value: "Retail Industry",
  },
  {
    label: "Security/Investigations",
    value: "Security/Investigations",
  },
  {
    label: "Semiconductors",
    value: "Semiconductors",
  },
  {
    label: "Shipbuilding",
    value: "Shipbuilding",
  },
  {
    label: "Sporting Goods",
    value: "Sporting Goods",
  },
  {
    label: "Sports",
    value: "Sports",
  },
  {
    label: "Staffing/Recruiting",
    value: "Staffing/Recruiting",
  },
  {
    label: "Supermarkets",
    value: "Supermarkets",
  },
  {
    label: "Telecommunications",
    value: "Telecommunications",
  },
  {
    label: "Textiles",
    value: "Textiles",
  },
  {
    label: "Think Tanks",
    value: "Think Tanks",
  },
  {
    label: "Tobacco",
    value: "Tobacco",
  },
  {
    label: "Translation/Localization",
    value: "Translation/Localization",
  },
  {
    label: "Transportation",
    value: "Transportation",
  },
  {
    label: "Utilities",
    value: "Utilities",
  },
  {
    label: "Venture Capital/VC",
    value: "Venture Capital/VC",
  },
  {
    label: "Veterinary",
    value: "Veterinary",
  },
  {
    label: "Warehousing",
    value: "Warehousing",
  },
  {
    label: "Wholesale",
    value: "Wholesale",
  },
  {
    label: "Wine/Spirits",
    value: "Wine/Spirits",
  },
  {
    label: "Wireless",
    value: "Wireless",
  },
  {
    label: "Writing/Editing",
    value: "Writing/Editing",
  },
];
