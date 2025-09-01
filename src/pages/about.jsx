import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MessageCircle,
  MapPin,
  Phone,
  Building,
  User,
  Warehouse,
  Clock,
  Award,
  Shield,
  Truck,
  Heart,
} from "lucide-react";

export default function AboutPage() {
  const handleEmailClick = () => {
    window.location.href = "mailto:ssatrader121@gmail.com";
  };

  const handleWhatsAppClick = () => {
    window.location.href =
      "https://wa.me/923317500543?text=Hello%20SSA%20Traders";
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Office Address",
      value: "Jakhra Market Stop#4, Nooriabad",
      color: "text-blue-600",
    },
    {
      icon: Building,
      label: "Head Office",
      value:
        "Toor Baba Road, Street#26, Block C, Punjabi Chowk, Shershah, Karachi",
      color: "text-purple-600",
    },
    {
      icon: Warehouse,
      label: "Godown",
      value: "M1-1016",
      color: "text-yellow-600",
    },
    {
      icon: Mail,
      label: "Email",
      value: "ssatrader121@gmail.com",
      color: "text-green-600",
    },
    {
      icon: User,
      label: "Contact Person",
      value: "Sharjeel Sajjad",
      color: "text-indigo-600",
    },
    {
      icon: Phone,
      label: "Mobile",
      value: "0331-7500543 / 0344-2491946",
      color: "text-red-600",
    },
  ];

  const services = [
    {
      icon: Award,
      title: "Quality Products",
      description: "Premium used weaving looms & sizing equipment",
    },
    {
      icon: Shield,
      title: "Trusted Service",
      description: "Reliable sale & purchase of textile machinery",
    },
    {
      icon: Truck,
      title: "Complete Solutions",
      description: "New & used spare parts – electrical & mechanical",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Building className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SSA TRADERS
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 font-medium">
            Textile Trading Excellence Since Years
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {}
          <div className="lg:col-span-2">
            <Card className="h-full shadow-xl border-0 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
                <CardTitle className="text-3xl font-bold flex items-center gap-3">
                  <Heart className="w-8 h-8" />
                  About Our Company
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Building className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Textile Trading Specialists
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-blue-600">
                          SSA TRADERS
                        </span>{" "}
                        is your trusted partner in the textile industry,
                        specializing in{" "}
                        <span className="font-semibold text-gray-900">
                          all types of used weaving looms & sizing equipment
                        </span>{" "}
                        with comprehensive{" "}
                        <span className="font-semibold text-gray-900">
                          sale & purchase services
                        </span>
                        .
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Complete Spare Parts Solutions
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        We provide comprehensive solutions with{" "}
                        <span className="font-semibold text-gray-900">
                          new & used spare parts – both electrical & mechanical
                        </span>{" "}
                        to keep your textile operations running smoothly.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Our Services
            </h2>
            {services.map((service, index) => (
              <Card
                key={index}
                className="shadow-lg border-0 rounded-xl hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {}
        <Card className="shadow-xl border-0 rounded-2xl overflow-hidden mb-8">
          <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8">
            <CardTitle className="text-3xl font-bold text-center">
              Get In Touch
            </CardTitle>
            <p className="text-gray-300 text-center mt-2">
              Ready to serve you with excellence
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div
                    className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}
                  >
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {info.label}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed break-words">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Button
            onClick={handleEmailClick}
            className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Mail className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
            Send Email
            <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </Button>

          <Button
            onClick={handleWhatsAppClick}
            className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
            WhatsApp Chat
            <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </Button>
        </div>

        {}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Years of Experience</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Award className="w-5 h-5 text-yellow-600" />
              <span className="font-medium">Quality Assured</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="font-medium">Trusted Partner</span>
            </div>
          </div>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your reliable partner in textile machinery and spare parts. We're
            committed to providing exceptional service and quality products to
            help your business thrive.
          </p>
        </div>
      </div>
    </div>
  );
}
