export const CONTACT_CONFIG = {
  phone: "918617484725", // Official WhatsApp number
  whatsappMessage: (item: string, location: string) => 
    `Hi SS Constructions & Traders! I'm interested in ${item} in ${location}. Please provide a quote.`,
  generalMessage: (location: string) => 
    `Hi SS Constructions & Traders! I'm interested in your services in ${location}.`,
};

export const openWhatsApp = (item: string, location: string) => {
  const message = CONTACT_CONFIG.whatsappMessage(item, location);
  const url = `https://wa.me/${CONTACT_CONFIG.phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
