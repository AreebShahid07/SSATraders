import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-6 flex items-center justify-center">
      <Card className="w-full max-w-4xl shadow-lg rounded-2xl bg-white">
        <CardHeader className="border-b">
          <CardTitle className="text-2xl font-bold text-center text-indigo-700">
            SSA TRADERS - Policies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="privacy" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-indigo-100 rounded-xl p-1">
              <TabsTrigger
                value="privacy"
                className="data-[state=active]:bg-white data-[state=active]:text-indigo-700 rounded-lg transition"
              >
                Privacy Policy
              </TabsTrigger>
              <TabsTrigger
                value="terms"
                className="data-[state=active]:bg-white data-[state=active]:text-indigo-700 rounded-lg transition"
              >
                Terms of Service
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="privacy"
              className="mt-6 space-y-4 text-gray-700"
            >
              <h2 className="text-xl font-semibold text-indigo-600">
                Privacy Policy
              </h2>
              <p>
                SSA Traders respects your privacy. We collect and use your
                information only to provide our services such as sales,
                purchases, and spare parts support.
              </p>
              <p>
                Your personal details (such as phone number or email) will only
                be used to contact you regarding business inquiries and will not
                be shared with unauthorized third parties.
              </p>
              <p>
                By engaging with SSA Traders, you consent to the collection and
                usage of your information as described in this policy.
              </p>
            </TabsContent>

            <TabsContent value="terms" className="mt-6 space-y-4 text-gray-700">
              <h2 className="text-xl font-semibold text-indigo-600">
                Terms of Service
              </h2>
              <p>
                By using SSA Traders services, you agree to follow our terms and
                conditions.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  All transactions (sale or purchase of used looms, spare parts,
                  electrical & mechanical items) are considered final unless
                  otherwise agreed in writing.
                </li>
                <li>
                  SSA Traders is not responsible for damages caused after the
                  purchase or installation of spare parts.
                </li>
                <li>
                  Prices, availability, and specifications may change without
                  prior notice.
                </li>
              </ul>
              <p>
                If you do not agree with these terms, kindly refrain from using
                our services.
              </p>
            </TabsContent>
          </Tabs>

          <div className="mt-8 border-t pt-6 text-sm text-gray-600 space-y-1">
            <p>
              <strong>Company:</strong> SSA TRADERS
            </p>
            <p>
              <strong>Deals in:</strong> Used Weaving Looms, Sizing, Spare Parts
              (Electrical & Mechanical)
            </p>
            <p>
              <strong>Office Address:</strong> Jakhra Market Stop#4, Nooriabad
            </p>
            <p>
              <strong>Head Office:</strong> Toor Baba Road, Street#26, Block C,
              Punjabi Chowk, Shershah, Karachi
            </p>
            <p>
              <strong>Godown#:</strong> M1-1016
            </p>
            <p>
              <strong>Email:</strong> ssatrader121@gmail.com
            </p>
            <p>
              <strong>Contact:</strong> Sharjeel Sajjad (0331-7500543 /
              0344-2491946)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
