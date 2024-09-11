"use client";
import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react";

import Link from "next/link";
// import plane from "../../../../public/plane.jpg";

const Navbar: React.FC = () => {
  return (
    <Flex border={"1px"} alignItems={"center"} justifyContent={"space-between"}>
      <Box>
        <Link href={"/"}>
          {/* <Image src={plane} alt="plane" width={100} height={100} /> */}
        </Link>
      </Box>
      <Box>
        <UnorderedList display={"flex"} listStyleType={"none"} gap={5} px={5}>
          <ListItem>
            <Link href={"/"}>Home</Link>
          </ListItem>
          <ListItem>
            <Link href={"/about"}>About</Link>
          </ListItem>
          <ListItem>
            <Link href={"/contact"}>Contact</Link>
          </ListItem>
          <ListItem>
            <Link href={"/cart"}>Cart</Link>
          </ListItem>
          <ListItem>
            <Link href={"/login"}>Login</Link>
          </ListItem>
          <ListItem>
            <Link href={"/en"} locale="en">
              🏴󠁧󠁢󠁥󠁮󠁧󠁿 English
            </Link>
            <Link href={"/fr"} locale="fr">
              🇫🇷 Français
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default Navbar;
