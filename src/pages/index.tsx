import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "@styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
  const {
    cep,
    setCep,
    cepValid,
    searchProfissionals,
    error,
    profissionals,
    searchOk,
    loading,
    remainingProfissionals,
  } = useIndex();

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
            value={cep}
            onChange={(ev) => setCep(ev.target.value)}
          />

          {error && <Typography color={"error"}>{error}</Typography>}

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "14rem" }}
            disabled={!cepValid || loading}
            onClick={() => searchProfissionals(cep)}
          >
            {loading ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementsContainer>

        {searchOk &&
          (profissionals.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {profissionals.map((item, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={item.nome_completo}
                      picture={item.foto_usuario}
                      rating={item.reputacao}
                      description={item.cidade}
                    />
                  );
                })}
              </ProfissionaisContainer>
              <Container sx={{ textAlign: "center" }}>
                {remainingProfissionals > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    e mais {remainingProfissionals}{" "}
                    {remainingProfissionals > 1
                      ? "profissionais próximos"
                      : "profissional próximo"}{" "}
                    deste endereço!
                  </Typography>
                )}
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ marginTop: 5 }}
                >
                  CONTRATAR
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Nenhum profissional foi encontrado no CEP {cep}
            </Typography>
          ))}
      </Container>
    </div>
  );
}
