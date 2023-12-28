import { Facebook, Twitter, Instagram, Gavel } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-mostaza text-[#684320] p-8 mt-6 bottom-0 w-full " >
      <div className="container mx-auto flex flex-col md:flex-row lg:flex-row justify-between items-center  ">
        {/* Sección 2: Contáctanos */}
        <div className="mb-8 md:mb-0 lg:mb-0">
          <h3 className="text-2xl font-semibold ">
            <Link to={"/app/contact"} className="hover:text-primary">
              Contáctanos
            </Link>
          </h3>


        </div>

        {/* Sección 3: Redes Sociales */}
        <div className="mb-8 md:mb-0 lg:mb-0 flex">

          <ul className="flex space-x-4 text-3xl gap-7  ">
            <li>
              <a href="#" className="hover:text-primary">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                <Instagram />
              </a>
            </li>
          </ul>
        </div>

        {/* Sección 1: Derechos Reservados */}
        <div className="flex flex-col items-center mt-8 text-xl">

          <p className="text-xl mb-2">&copy; 2023 Tu Tienda Online. Todos los derechos reservados.</p>
          <Gavel />
        </div>
      </div>
    </footer>
  );
};

































// // src/components/Footer.js
// import { Facebook, Twitter, Instagram, MailOutline, Phone, Gavel } from "@mui/icons-material";
// import { Link } from "react-router-dom";

// export const Footer = () => {
//   return (
//     <footer className="bg-[#f1c31cfd] text-[#684320]  p-8 mt-6">
//       <div className="container mx-auto">
//         <div className="flex flex-col md:flex-row lg:flex-row justify-evenly items-center">
//           {/* Sección 2: Contáctanos */}
//           <div className="mb-8 md:mb-0 lg:mb-0">
//             <h3 className="text-2xl font-semibold mb-4">
//               <Link to={"/app/contact"} className="hover:text-primary">
//                 Contáctanos
//               </Link>
//             </h3>
//             <p className="pb-3">
//               <MailOutline /> Email: info@tutiendaonline.com
//             </p>
//             <p>
//               <Phone /> Teléfono: (123) 456-7890
//             </p>
//           </div>

//           {/* Sección 3: Redes Sociales */}
//           <div className="mb-8 md:mb-0 lg:mb-0">
//             <h3 className="text-2xl font-semibold mb-4">Redes Sociales</h3>
//             <ul className="flex space-x-4">
//               <li>
//                 <a href="#" className="hover:text-primary">
//                   <Facebook />
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary">
//                   <Twitter />
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary">
//                   <Instagram />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Sección 1: Derechos Reservados */}
//         <div className="flex flex-col items-center mt-8">
//           <h3 className="text-2xl  font-semibold mb-4">Derechos Reservados</h3>
//           <p>&copy; 2023 Tu Tienda Online. Todos los derechos reservados.</p>
//           <Gavel />
//         </div>
//       </div>
//     </footer>
//   );
// };
