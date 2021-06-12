import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography, Box } from "@material-ui/core";

const Footer: React.FC = () => {
  return (
    <>
      <FooterStyled>
        <FooterContainer>
          <Box sx={{ maxWidth: "22rem" }}>
            <FooterTitle>Quem</FooterTitle>
            <Typography variant={"body2"} sx={{ marginTop: 2 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores dolorem iste assumenda voluptatem facilis sit hic
              libero ex impedit omnis officiis vitae, laboriosam harum dolores
              illo accusantium a aliquam doloremque.
            </Typography>
          </Box>
          <Box>
            <FooterTitle>Fala tu</FooterTitle>
            <AppList>
              <li>
                <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                  <img src={"/img/logos/app-store.png"} alt={"App Store"} />
                </a>
              </li>
              <li>
                <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                  <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
                </a>
              </li>
            </AppList>
          </Box>
        </FooterContainer>
      </FooterStyled>
    </>
  );
};

export default Footer;
