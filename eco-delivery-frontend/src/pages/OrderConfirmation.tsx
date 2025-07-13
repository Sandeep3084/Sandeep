import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Leaf, ArrowRight, Home } from 'lucide-react';

export default function OrderConfirmation() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Order Confirmed!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your order. We'll send you a confirmation email with tracking details.
        </p>

        {/* Order Details */}
        <div className="card text-left mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Order Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Order Number</span>
              <span className="font-medium">#ECO-2024-001</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Order Date</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Delivery</span>
              <span className="font-medium">2-3 business days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Method</span>
              <span className="font-medium text-eco-600">Eco-Friendly Route</span>
            </div>
          </div>
        </div>

        {/* Eco Points Earned */}
        <div className="card bg-eco-50 border-eco-200 mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Leaf className="h-6 w-6 text-eco-600" />
            <h3 className="text-lg font-semibold text-eco-800">
              Eco Points Earned!
            </h3>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-eco-600 mb-2">+50</div>
            <p className="text-eco-700">
              You've earned 50 eco points for choosing sustainable delivery!
            </p>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="card bg-green-50 border-green-200 mb-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4 text-center">
            Environmental Impact
          </h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">0.5kg</div>
              <div className="text-sm text-green-700">CO₂ Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">85%</div>
              <div className="text-sm text-green-700">Less Carbon</div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-eco-100 rounded-full flex items-center justify-center">
                <span className="text-eco-600 text-sm font-medium">1</span>
              </div>
              <span className="text-gray-700">You'll receive an email confirmation shortly</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-eco-100 rounded-full flex items-center justify-center">
                <span className="text-eco-600 text-sm font-medium">2</span>
              </div>
              <span className="text-gray-700">Track your order in your profile</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-eco-100 rounded-full flex items-center justify-center">
                <span className="text-eco-600 text-sm font-medium">3</span>
              </div>
              <span className="text-gray-700">Redeem your eco points for rewards</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-4">
          <Link
            to="/profile"
            className="w-full btn-primary flex items-center justify-center space-x-2"
          >
            <span>View Profile & Rewards</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          
          <Link
            to="/"
            className="w-full btn-secondary flex items-center justify-center space-x-2"
          >
            <Home className="h-4 w-4" />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
}