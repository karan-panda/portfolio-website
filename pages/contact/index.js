// About.js
import React, { useRef, useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment, faPaperPlane, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import dotenv from 'dotenv';
dotenv.config();

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function ContactPage() {
  const form = useRef();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const L = require('leaflet');
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    }
  }, [isClient]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center">
      {/* Left Side - Contact Form */}
      <div className="w-full md:w-1/2 p-4 md:p-12 flex flex-col justify-center min-h-[600px] md:min-h-screen">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-4 md:space-y-6 max-w-lg mx-auto w-full">
          <div className="flex items-center border-b border-gray-300 py-2">
            <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-3" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full outline-none bg-transparent text-gray-700"
              required
            />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full outline-none bg-transparent text-gray-700"
              required
            />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2">
            <FontAwesomeIcon icon={faComment} className="text-gray-500 mr-3" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full outline-none bg-transparent text-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition duration-300 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Send Message
          </button>
        </form>
      </div>

      {/* Right Side - Map */}
      <div className="w-full md:w-1/2 relative h-[400px] md:min-h-screen p-4 md:p-0">
        {isClient && (
          <MapContainer center={[19.21031, 72.86407]} zoom={12} style={{ height: "100%", width: "100%",}}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[19.21031, 72.86407]}>
              <Popup>
                Mumbai, India
              </Popup>
            </Marker>
          </MapContainer>
        )}
        <div className="z-[1000] absolute top-4 left-4 md:right-4 md:left-auto p-4 md:p-6 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg text-white space-y-3 md:space-y-4 w-[90%] md:w-auto md:min-w-[300px]">
          <h3 className="font-bold text-base md:text-lg mb-2 md:mb-4">Contact Information</h3>
          <div className="space-y-2 md:space-y-3 text-sm md:text-base">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faLocationDot} className="text-orange-400 w-4 md:w-5" />
              <p>Thakur Complex, Kandivali (E),<br/>Mumbai 400101</p>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faPhone} className="text-orange-400 w-4 md:w-5" />
              <p>+91 77150 67060</p>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-orange-400 w-4 md:w-5" />
              <p className="break-all">karanpanda1206@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}