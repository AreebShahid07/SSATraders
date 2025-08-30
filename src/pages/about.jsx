import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200  p-6 flex flex-col items-center">
      <Card className="max-w-2xl w-full shadow-lg border border-blue-500 rounded-2xl mb-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-800">
            About SSA TRADERS
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>
            <span className="font-semibold">Textile Trading</span>
          </p>
          <p>
            <span className="font-semibold">SSA TRADERS</span> deals in{" "}
            <span className="font-semibold">
              all types of used weaving looms & sizing, sale & purchase
            </span>{" "}
            and provides{" "}
            <span className="font-semibold">
              new & used spare parts – electrical & mechanical
            </span>
            .
          </p>
          <p>
            <span className="font-semibold">Office Address:</span> Jakhra Market
            Stop#4, Nooriabad
          </p>
          <p>
            <span className="font-semibold">Head Office:</span> Toor Baba Road,
            Street#26, Block C, Punjabi Chowk, Shershah, Karachi
          </p>
          <p>
            <span className="font-semibold">Godown#:</span> M1-1016
          </p>
          <p>
            <span className="font-semibold">Email:</span> ssatrader121@gmail.com
          </p>
          <p>
            <span className="font-semibold">Contact Person:</span> Sharjeel
            Sajjad
          </p>
          <p>
            <span className="font-semibold">Mobile:</span> 0331-7500543 / 0344-2491946
          </p>
        </CardContent>
      </Card>

      <div className="flex gap-4 w-full max-w-2xl justify-center">
        <Button
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl text-lg font-semibold shadow-md"
          onClick={() => (window.location.href = "mailto:ssatrader121@gmail.com")}
        >
          <Mail className="mr-2 h-6 w-6" />
          Email Us
        </Button>
        <Button
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-6 rounded-xl text-lg font-semibold shadow-md"
          onClick={() =>
            (window.location.href =
              "https://wa.me/923317500543?text=Hello%20SSA%20Traders")
          }
        >
          <MessageCircle className="mr-2 h-6 w-6" />
          WhatsApp Us
        </Button>
      </div>
    </div>
  );
}
