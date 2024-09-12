"use client";
import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react";

import Link from "next/link";
import plane from "../../../../public/plane.jpg";
import Image from "next/image";

const Navbar: React.FC = () => {
  const navLink = [
    { Link: "/", Content: "Home" },
    { Link: "/about", Content: "About" },
    { Link: "/contact", Content: "Contact" },
    { Link: "/cart", Content: "Cart" },
    { Link: "/login", Content: "Login" },
  ];
  return (
    <Flex border={"1px"} alignItems={"center"} justifyContent={"space-between"}>
      <Box>
        <Link href={"/"}>
          <Image src={plane} alt="plane" width={100} height={100} />
        </Link>
      </Box>
      <Box>
        <UnorderedList display={"flex"} listStyleType={"none"} gap={5} px={5}>
          <ListItem>
            {navLink.map((item) => (
              <Link
                href={item.Link}
                style={{ padding: "1rem" }}
                key={item.Content}
              >
                {item.Content}
              </Link>
            ))}
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default Navbar;
