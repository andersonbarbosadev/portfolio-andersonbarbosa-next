import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://localhost:3000";

const ContactFormEmail = ({ name, email, message }) => (
  <Html>
    <Head />
    <Preview>Envio solicitud contacto</Preview>
    <Body style={main}>
      <Container>
        <Section>
          <Img
            src={`${baseUrl}/png/placeholder.png`}
            alt="logo"
            width="90"
            height="40"
          />
        </Section>

        <Section style={content}>
          {/* <Row>
              <Img
                style={image}
                width={620}
                src={`${baseUrl}/static/yelp-header.png`}
              />
            </Row> */}

          <Row style={{ ...boxInfos, paddingBottom: "0" }}>
            <Column>
              <Heading
                style={{
                  fontSize: 32,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Hola {name},
              </Heading>
              <Heading
                as="h6"
                style={{
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                He recibido su mensaje con éxito. En el transcurso del día me
                comunicaré con usted.
              </Heading>
              <Text>A continuación, le muestro los datos de su solicitud:</Text>

              <Text style={paragraph}>
                <b>Correo: </b>
                {email}
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>Nombre: </b>
                {name}
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>Mensaje: </b>
                {message}
              </Text>

              <Text style={{ ...paragraph, marginTop: -5 }}>
                Muchas gracias por tomarse el tiempo de contactar conmigo,
                espero podamos trabajar juntos.
              </Text>
            </Column>
          </Row>
        </Section>

        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "rgb(0,0,0, 0.7)",
          }}
        >
          © 2024 | Derechos Reservados, Colombia | www.andersonbarbosa.site
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};
