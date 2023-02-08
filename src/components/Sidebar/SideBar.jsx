import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse} from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Admin Details",
    icon: <FaHome />,
  },
  {
    path: "",
    name: "Add page",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "/addpages",
        name: "Add pages ",
        icon: <FaUser />,
      },
      {
        path: "/teams",
        name: "Teams",
        icon: <FaLock />,
      }
    ],
  },
  {
    path: "/Auth",
    name: "Author",
    icon: <MdMessage />,
    exact: true,
    subRoutes: [
      {
        path: "/auth/comingsoonv1",
        name: "Coming soon V1 ",
        icon: <FaUser />,
      },
      
    ],
  },
  {
    path: "/user",
    name: "User",
    icon: <BiAnalyse />,
  }
  
];



const routesanother = [
  {
    path: "/",
    name: "Components",
    icon: <FaHome />,
  },
  {
    path: "/apppage",
    name: "App page",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "/apppage/clients",
        name: "Clients ",
        icon: <FaUser />,
      },
      {
        path: "/apppage/teams",
        name: "Teams",
        icon: <FaLock />,
      },
      {
        path: "/apppage/calendar",
        name: "Calendar",
        icon: <FaMoneyBill />,
      },
    ],
  },
]



const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "50px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section position-fixed">
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
            <div>
              <a href="/" class="text-white"><pre>  looper     </pre>
                
              </a>
            </div>
          </div>

          <section className="routes py-12">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon ">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>


          <section className="routes py-1">
            <h1 class="mx-10 lg:px-3 md:px-3 sm:mx-10  ">Interfaces</h1>
            {routesanother.map((routea, index) => {
              if (routea.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={routea}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }
              return (
                <NavLink
                  to={routea.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon ">{routea.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {routea.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>



        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};
export default SideBar;
