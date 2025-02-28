import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-gray-600">Choose the plan that works best for you</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free Tier */}
        <Card>
          <CardHeader>
            <CardTitle>Free Plan</CardTitle>
            <CardDescription>Perfect for getting started</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-6">$0</div>
            <ul className="space-y-2">
              <li className="flex items-center">✓ Basic features</li>
              <li className="flex items-center">✓ Limited usage</li>
              <li className="flex items-center">✓ Community support</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Get Started</Button>
          </CardFooter>
        </Card>

        {/* Premium Tier */}
        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle>Premium Plan</CardTitle>
            <CardDescription>Best value for enthusiasts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-3xl font-bold">$1/month</div>
              <div className="text-sm text-gray-500">or $10/year (save 17%)</div>
            </div>
            <ul className="space-y-2 mt-6">
              <li className="flex items-center">✓ All Free features</li>
              <li className="flex items-center">✓ Unlimited usage</li>
              <li className="flex items-center">✓ Priority support</li>
              <li className="flex items-center">✓ Advanced features</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="default">Subscribe Now</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
