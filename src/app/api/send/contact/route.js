export async function POST(request) {
  // Variables
  const res = await request.json();

  // Validate
  if (!res) {
    return Response.error("Invalid data");
  }
  if (!res.captcha) {
    return Response.error("Invalid captcha");
  }

  // Validate Captcha
  const apiCaptcha = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.CAPTCHA_SECRET}&response=${res.captcha}`,
    }
  );
  if (!apiCaptcha.ok) {
    return Response.error("Invalid captcha");
  }

  // Send Email

  return Response.json({ res });
}
