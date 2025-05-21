
import { MessageCircle } from 'lucide-react';

const WhatsappButton = () => {
  const phoneNumber = "918599924242"; // International format without +
  const message = "Hello, I'm interested in SVN Bay Parck project. Please provide more information.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsappButton;
