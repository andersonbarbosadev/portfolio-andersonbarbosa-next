import { Button, Html } from "@react-email/components";

const ContactFormEmail = ({ name, email, message }) => (
  <div>
    <h1>Contact form submission</h1>
    <p>
      From <strong>{name}</strong> at {email}
    </p>
    <h2>Message:</h2>
    <p>{message}</p>
    <Button
      href="https://example.com"
      style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
    >
      Click me
    </Button>
  </div>
);

export default ContactFormEmail;
