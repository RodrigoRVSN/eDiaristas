import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@material-ui/core";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "@styles/pages/index.style";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={"Preencha seu endereço e veja todos os profissionais"}
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
          />

          <Typography color={"error"}>CEP inválido</Typography>

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "14rem" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={"Rodrigo Victor"}
              picture={"https://github.com/RodrigoRVSN.png"}
              rating={3}
              description={"Boituva"}
            />
            <UserInformation
              name={"Rodrigo Victor"}
              picture={"https://github.com/RodrigoRVSN.png"}
              rating={3}
              description={"Boituva"}
            />
            <UserInformation
              name={"Rodrigo Victor"}
              picture={"https://github.com/RodrigoRVSN.png"}
              rating={3}
              description={"Boituva"}
            />
            <UserInformation
              name={"Rodrigo Victor"}
              picture={"https://github.com/RodrigoRVSN.png"}
              rating={3}
              description={"Boituva"}
            />
            <UserInformation
              name={"Rodrigo Victor"}
              picture={"https://github.com/RodrigoRVSN.png"}
              rating={3}
              description={"Boituva"}
            />
            <UserInformation
              name={"Gabrielly Victor"}
              picture={
                "https://scontent.fsod1-2.fna.fbcdn.net/v/t31.18172-8/10575298_697817510292305_3358077747317723361_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=GN4ec5aXpvcAX97IowM&_nc_ht=scontent.fsod1-2.fna&oh=6bbc47e7ccd12dedeb8bd51842bead4f&oe=60E98385"
              }
              rating={0}
              description={"Boituva"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
}
