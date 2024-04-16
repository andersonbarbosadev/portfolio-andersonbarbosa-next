export const fallbackLng = "en";
export const languages = ["en", "es"];
export const defaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(lng = "es", ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
