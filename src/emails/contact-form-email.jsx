import {
  Body,
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

const ContactFormEmail = ({ name, email, message }) => (
  <Html>
    <Head />
    <Preview>Envio solicitud contacto</Preview>

    <Body style={main}>
      <Container>
        <Section>
          <Img
            src="https://blog.andersonbarbosa.site/icon-logo.png"
            alt="logo"
            width="90"
            height="90"
            style={logo}
          />
        </Section>

        <Section style={content}>
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
              <Text>A continuación, le muestro su solicitud:</Text>

              <Text style={{ ...messageStyle, marginTop: -5 }}>{message}</Text>

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
  margin: "0 auto",
  marginBottom: "14px",
  borderRadius: "50%",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px",
};

const messageStyle = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};
