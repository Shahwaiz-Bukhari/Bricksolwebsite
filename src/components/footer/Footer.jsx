// import React from "react";
// import { Link as RouterLink } from "react-router-dom";
// import {
//   Box,
//   Container,
//   Typography,
//   List,
//   ListItem,
//   IconButton,
//   Divider,
//   useTheme,
// } from "@mui/material";
// import { LinkedIn, Instagram, Facebook } from "@mui/icons-material";

// import {
//   servicesData,
//   industriesData,
//   productsData,
// } from "../navbar/dropdown/CombinedCategoryDropdown";

// const Footer = () => {
//   const theme = useTheme();

//   const services = servicesData.sections.map(({ id, title }) => ({
//     id,
//     name: title,
//   }));

//   const industries = industriesData.sections.map(({ id, title }) => ({
//     id,
//     name: title,
//   }));

//   const products = productsData.sections.map(({ id, title }) => ({
//     id,
//     name: title,
//   }));

//   const company = [
//     { name: "Portfolio", to: "/portfolio" },
//     { name: "About Us", to: "/about" },
//   ];

//   const locations = [
//     {
//       country: "KSA",
//       image: "/images/ksa.svg",
//       address:
//         "Building 3, Anas Ibn Malik Rd, As Sahafah District Riyadh 13321 KSA",
//     },
//     {
//       country: "PAK",
//       image: "/images/pak.svg",
//       address: "294 B1, Johartown, Lahore-PK",
//     },
//   ];

//   const socialLinks = [
//     {
//       icon: <LinkedIn />,
//       href: "https://www.linkedin.com/company/bricksol/",
//       name: "LinkedIn",
//     },
//     {
//       icon: <Instagram />,
//       href: "https://www.instagram.com/bricksolofficial",
//       name: "Instagram",
//     },
//     {
//       icon: <Facebook />,
//       href: "https://www.facebook.com/share/17PwpvMznG/",
//       name: "Facebook",
//     },
//   ];

//   const legalLinks = [
//     { name: "Privacy Policy", to: "/" },
//     { name: "Terms & Conditions", to: "/" },
//     { name: "Cookies Policy", to: "/" },
//   ];

//   const handleScrollTop = () => window.scrollTo(0, 0);

//   return (
//     <Box
//       component="footer"
//       sx={{
//         bgcolor: "#28282B",
//         pt: 8,
//         pb: 6,
//         borderTop: 1,
//         borderColor: "divider",
//         px: { xs: 2, md: 4 },
//         maxWidth: "1400px",
//         mx: { xs: 2, md: 4, lg: "auto" },
//         borderRadius: 4,
//         mb: 8,
//       }}
//     >
//       <Container maxWidth="xl">
//         {/* Top Section */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             justifyContent: "space-between",
//             alignItems: { xs: "flex-start", md: "flex-start" },
//             mb: 8,
//             gap: { xs: 4, md: 8 },
//           }}
//         >
//           {/* Logo + Description + Social */}
//           <Box sx={{ maxWidth: { xs: "100%", md: "400px" } }}>
//             <RouterLink
//               to="/"
//               onClick={handleScrollTop}
//               style={{ display: "inline-block", marginBottom: 24 }}
//             >
//               <Box
//                 component="img"
//                 src="/images/logos/bricksol.webp"
//                 alt="Bricksol"
//                 sx={{ height: 60, width: 270, objectFit: "cover" }}
//               />
//             </RouterLink>
//             <Typography
//               variant="body1"
//               sx={{
//                 color: "#96999bff",
//                 lineHeight: 1.6,
//                 mb: 3,
//                 fontSize: "0.95rem",
//               }}
//             >
//               Empowering the visionaries of tomorrow with innovative solutions
//               and cutting-edge technology.
//             </Typography>

//             {/* Status Indicator */}
//             <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
//               <Box
//                 sx={{
//                   width: 8,
//                   height: 8,
//                   borderRadius: "50%",
//                   bgcolor: "#4caf50",
//                 }}
//               />
//               <Typography
//                 variant="body2"
//                 sx={{ color: "whitesmoke", fontSize: "0.85rem" }}
//               >
//                 All systems operational
//               </Typography>
//             </Box>

//             {/* Social Links */}
//             <Box sx={{ display: "flex", gap: 1 }}>
//               {socialLinks.map((social, index) => (
//                 <IconButton
//                   key={index}
//                   component="a"
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   sx={{
//                     color: "#96999bff",
//                     "&:hover": { color: "whitesmoke" },
//                     p: 1,
//                   }}
//                   aria-label={social.name}
//                 >
//                   {social.icon}
//                 </IconButton>
//               ))}
//             </Box>
//           </Box>

//           {/* Contact Info */}
//           <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
//             <Typography
//               variant="h6"
//               sx={{ color: "whitesmoke", fontWeight: 600, mb: 2 }}
//             >
//               Partner with us
//             </Typography>
//             <Box sx={{ mb: 2 }}>
//               <a
//                 href="tel:+923011111226"
//                 style={{
//                   display: "block",
//                   color: "#96999bff",
//                   textDecoration: "none",
//                   fontSize: "0.9rem",
//                   marginBottom: 8,
//                 }}
//               >
//                 +92 301-1111226
//               </a>
//               <a
//                 href="mailto:Info@bricksol.net"
//                 style={{
//                   display: "block",
//                   color: "#96999bff",
//                   textDecoration: "none",
//                   fontSize: "0.9rem",
//                 }}
//               >
//                 Info@bricksol.net
//               </a>
//             </Box>
//           </Box>
//         </Box>

//         {/* Navigation Links */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: {
//               xs: "repeat(2, 1fr)",
//               sm: "repeat(3, 1fr)",
//               md: "repeat(4, 1fr)",
//               lg: "repeat(6, 1fr)",
//             },
//             gap: { xs: 4, md: 6 },
//             mb: 8,
//           }}
//         >
//           {[
//             { title: "Services", links: services.slice(0, 6), basePath: "/services" },
//             { title: "Industries", links: industries.slice(0, 6), basePath: "/industries" },
//             { title: "Products", links: products.slice(0, 6), basePath: "/products" },
//             { title: "Company", links: company, basePath: "/" },
//             {
//               title: "Locations",
//               links: locations.map((loc) => ({
//                 name: loc.country,
//                 to: "#",
//               })),
//               basePath: "#",
//             },
//             {
//               title: "Legal",
//               links: legalLinks.map((link) => ({
//                 name: link.name,
//                 to: link.to,
//               })),
//               basePath: "/",
//             },
//           ].map((col, idx) => (
//             <Box key={idx}>
//               <Typography
//                 variant="subtitle1"
//                 sx={{
//                   mb: 2,
//                   color: "whitesmoke",
//                   fontWeight: 600,
//                   fontSize: "0.95rem",
//                 }}
//               >
//                 {col.title}
//               </Typography>
//               <List sx={{ p: 0 }}>
//                 {col.links.map((item, index) => (
//                   <ListItem key={index} sx={{ px: 0, py: 0.25 }}>
//                     <RouterLink
//                       to={
//                         col.basePath && item.id
//                           ? `${col.basePath}/${item.id}`
//                           : item.to || "/"
//                       }
//                       onClick={handleScrollTop}
//                       style={{ textDecoration: "none" }}
//                     >
//                       <Typography
//                         component="span"
//                         sx={{
//                           position: "relative",
//                           color: "#96999bff",
//                           fontSize: "0.85rem",
//                           lineHeight: 1.6,
//                           display: "inline-block",
//                           "&::after": {
//                             content: '""',
//                             position: "absolute",
//                             left: 0,
//                             bottom: -2,
//                             width: "0%",
//                             height: "2px",
//                             bgcolor: "whitesmoke",
//                             transition: "width 0.3s ease",
//                           },
//                           "&:hover": {
//                             color: "whitesmoke",
//                           },
//                           "&:hover::after": {
//                             width: "100%",
//                           },
//                         }}
//                       >
//                         {item.name}
//                       </Typography>
//                     </RouterLink>

//                   </ListItem>
//                 ))}
//               </List>
//             </Box>
//           ))}
//         </Box>

//         <Divider sx={{ mb: 6, borderColor: "#404040" }} />

//         {/* Location Details */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
//             gap: 8,
//             mb: 6,
//           }}
//         >
//           {locations.map((location, index) => (
//             <Box key={index}>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
//                 <Box
//                   component="img"
//                   src={location.image}
//                   alt={location.country}
//                   sx={{ width: 24, height: 24, objectFit: "contain" }}
//                 />
//                 <Typography
//                   variant="subtitle1"
//                   sx={{ fontWeight: 600, color: "whitesmoke" }}
//                 >
//                   {location.country}
//                 </Typography>
//               </Box>
//               <Typography
//                 variant="body2"
//                 sx={{
//                   color: "#96999bff",
//                   lineHeight: 1.5,
//                   fontSize: "0.85rem",
//                 }}
//               >
//                 {location.address}
//               </Typography>
//             </Box>
//           ))}
//         </Box>

//         {/* Copyright */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             justifyContent: "space-between",
//             alignItems: { xs: "flex-start", md: "center" },
//             gap: 2,
//             pt: 4,
//             borderTop: "1px solid #404040",
//           }}
//         >
//           <Typography
//             variant="body2"
//             sx={{ color: "#96999bff", fontSize: "0.85rem" }}
//           >
//             © 2025 Bricksol Inc.
//           </Typography>

//           <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
//             {legalLinks.map((link, index) => (
//               <RouterLink
//                 key={index}
//                 to={link.to}
//                 onClick={handleScrollTop}
//                 style={{
//                   color: "#96999bff",
//                   textDecoration: "none",
//                   fontSize: "0.85rem",
//                 }}
//               >
//                 {link.name}
//               </RouterLink>
//             ))}
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;





import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  IconButton,
  Divider,
  useTheme,
} from "@mui/material";
import { LinkedIn, Instagram, Facebook } from "@mui/icons-material";
import { SplineScene } from "../ui/splite";

import {
  servicesData,
  industriesData,
  productsData,
} from "../navbar/dropdown/CombinedCategoryDropdown";

const Footer = () => {
  const theme = useTheme();

  const services = servicesData.sections.map(({ id, title }) => ({
    id,
    name: title,
  }));

  const industries = industriesData.sections.map(({ id, title }) => ({
    id,
    name: title,
  }));

  const products = productsData.sections.map(({ id, title }) => ({
    id,
    name: title,
  }));

  const company = [
    { name: "Portfolio", to: "/portfolio" },
    { name: "About Us", to: "/about" },
  ];

  const locations = [
    {
      country: "KSA",
      image: "/images/ksa.svg",
      address:
        "Building 3, Anas Ibn Malik Rd, As Sahafah District Riyadh 13321 KSA",
    },
    {
      country: "PAK",
      image: "/images/pak.svg",
      address: "294 B1, Johartown, Lahore-PK",
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedIn />,
      href: "https://www.linkedin.com/company/bricksol/",
      name: "LinkedIn",
    },
    {
      icon: <Instagram />,
      href: "https://www.instagram.com/bricksolofficial",
      name: "Instagram",
    },
    {
      icon: <Facebook />,
      href: "https://www.facebook.com/share/17PwpvMznG/",
      name: "Facebook",
    },
  ];

  const legalLinks = [
    { name: "Privacy Policy", to: "/" },
    { name: "Terms & Conditions", to: "/" },
    { name: "Cookies Policy", to: "/" },
  ];

  const handleScrollTop = () => window.scrollTo(0, 0);

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        mb: 8,
        maxWidth: "1400px",
        mx: { xs: 2, md: 4, lg: "auto" },
        px: { xs: 2, md: 4 },
        pt: 8,
        pb: 6,
      }}
    >
      {/* 3D Background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.35, // adjust visibility
        }}
      >
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </Box>

      {/* Optional dark overlay for better contrast */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.7))",
        }}
      />

      {/* Footer Content */}
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-start" },
            mb: 8,
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* Logo + Description + Social */}
          <Box sx={{ maxWidth: { xs: "100%", md: "400px" } }}>
            <RouterLink
              to="/"
              onClick={handleScrollTop}
              style={{ display: "inline-block", marginBottom: 24 }}
            >
              <Box
                component="img"
                src="/images/logos/bricksol.webp"
                alt="Bricksol"
                sx={{ height: 60, width: 270, objectFit: "cover" }}
              />
            </RouterLink>
            <Typography
              variant="body1"
              sx={{
                color: "#96999bff",
                lineHeight: 1.6,
                mb: 3,
                fontSize: "0.95rem",
              }}
            >
              Empowering the visionaries of tomorrow with innovative solutions
              and cutting-edge technology.
            </Typography>

            {/* Status Indicator */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "#4caf50",
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "whitesmoke", fontSize: "0.85rem" }}
              >
                All systems operational
              </Typography>
            </Box>

            {/* Social Links */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#96999bff",
                    "&:hover": { color: "whitesmoke" },
                    p: 1,
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Contact Info */}
          <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
            <Typography
              variant="h6"
              sx={{ color: "whitesmoke", fontWeight: 600, mb: 2 }}
            >
              Partner with us
            </Typography>
            <Box sx={{ mb: 2 }}>
              <a
                href="tel:+923011111226"
                style={{
                  display: "block",
                  color: "#96999bff",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  marginBottom: 8,
                }}
              >
                +92 301-1111226
              </a>
              <a
                href="mailto:Info@bricksol.net"
                style={{
                  display: "block",
                  color: "#96999bff",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                Info@bricksol.net
              </a>
            </Box>
          </Box>
        </Box>

        {/* Navigation Links */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(6, 1fr)",
            },
            gap: { xs: 4, md: 6 },
            mb: 8,
          }}
        >
          {[
            { title: "Services", links: services.slice(0, 6), basePath: "/services" },
            { title: "Industries", links: industries.slice(0, 6), basePath: "/industries" },
            { title: "Products", links: products.slice(0, 6), basePath: "/products" },
            { title: "Company", links: company, basePath: "/" },
            {
              title: "Locations",
              links: locations.map((loc) => ({
                name: loc.country,
                to: "#",
              })),
              basePath: "#",
            },
            {
              title: "Legal",
              links: legalLinks.map((link) => ({
                name: link.name,
                to: link.to,
              })),
              basePath: "/",
            },
          ].map((col, idx) => (
            <Box key={idx}>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 2,
                  color: "whitesmoke",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                {col.title}
              </Typography>
              <List sx={{ p: 0 }}>
                {col.links.map((item, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 0.25 }}>
                    <RouterLink
                      to={
                        col.basePath && item.id
                          ? `${col.basePath}/${item.id}`
                          : item.to || "/"
                      }
                      onClick={handleScrollTop}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        component="span"
                        sx={{
                          position: "relative",
                          color: "#96999bff",
                          fontSize: "0.85rem",
                          lineHeight: 1.6,
                          display: "inline-block",
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            bottom: -2,
                            width: "0%",
                            height: "2px",
                            bgcolor: "whitesmoke",
                            transition: "width 0.3s ease",
                          },
                          "&:hover": {
                            color: "whitesmoke",
                          },
                          "&:hover::after": {
                            width: "100%",
                          },
                        }}
                      >
                        {item.name}
                      </Typography>
                    </RouterLink>
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>

        <Divider sx={{ mb: 6, borderColor: "#404040" }} />

        {/* Location Details */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 8,
            mb: 6,
          }}
        >
          {locations.map((location, index) => (
            <Box key={index}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                <Box
                  component="img"
                  src={location.image}
                  alt={location.country}
                  sx={{ width: 24, height: 24, objectFit: "contain" }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, color: "whitesmoke" }}
                >
                  {location.country}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: "#96999bff",
                  lineHeight: 1.5,
                  fontSize: "0.85rem",
                }}
              >
                {location.address}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Copyright */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 2,
            pt: 4,
            borderTop: "1px solid #404040",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#96999bff", fontSize: "0.85rem" }}
          >
            © 2025 Bricksol Inc.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            {legalLinks.map((link, index) => (
              <RouterLink
                key={index}
                to={link.to}
                onClick={handleScrollTop}
                style={{
                  color: "#96999bff",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                }}
              >
                {link.name}
              </RouterLink>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
