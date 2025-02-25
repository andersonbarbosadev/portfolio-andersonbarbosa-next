/**
 * Validate Captcha
 * @param {string} captcha Code to validate
 * @returns {Promise<object>} Result of validation
 */
export const validateCaptcha = async (captcha) => {
  // Validations
  if (!captcha) return { success: false, error: "Captcha is required" }

  // Validate Captcha
  const captchaApi = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${process.env.CAPTCHA_SECRET}&response=${captcha}`,
  })

  if (!captchaApi.ok) {
    return { success: false, error: "Invalid captcha" }
  }

  return { success: true }
}
