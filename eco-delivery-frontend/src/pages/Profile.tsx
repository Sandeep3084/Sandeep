import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Gift, Award, ShoppingBag, MapPin, Phone, Mail } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockEcoRewards } from '../data/mockData';

export default function Profile() {
  const { state, dispatch } = useApp();
  const [selectedReward, setSelectedReward] = useState<string | null>(null);

  const handleRedeemReward = (rewardId: string) => {
    const reward = mockEcoRewards.find(r => r.id === rewardId);
    if (!reward) return;

    if (state.user.ecoPoints >= reward.pointsRequired) {
      dispatch({ type: 'REDEEM_ECO_POINTS', payload: reward.pointsRequired });
      setSelectedReward(rewardId);
      alert(`Successfully redeemed ${reward.name}!`);
    } else {
      alert('Not enough eco points to redeem this reward.');
    }
  };

  const getRewardIcon = (type: string) => {
    switch (type) {
      case 'discount':
        return <Award className="h-5 w-5 text-blue-600" />;
      case 'free-shipping':
        return <ShoppingBag className="h-5 w-5 text-green-600" />;
      case 'cashback':
        return <Gift className="h-5 w-5 text-purple-600" />;
      default:
        return <Gift className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Information */}
        <div className="lg:col-span-1">
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-eco-100 rounded-full flex items-center justify-center">
                  <span className="text-eco-600 font-semibold text-lg">
                    {state.user.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{state.user.name}</h3>
                  <p className="text-sm text-gray-600">{state.user.email}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{state.user.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{state.user.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{state.user.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Eco Points and Stats */}
        <div className="lg:col-span-2">
          <div className="card mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Eco Points & Sustainability</h2>
            
            {/* Eco Points Display */}
            <div className="bg-gradient-to-r from-eco-500 to-eco-600 rounded-lg p-6 text-white mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{state.user.ecoPoints}</h3>
                  <p className="text-eco-100">Total Eco Points</p>
                </div>
                <Leaf className="h-12 w-12 text-eco-200" />
              </div>
            </div>

            {/* Points Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">50</div>
                <div className="text-sm text-green-700">Eco-Friendly Deliveries</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">25</div>
                <div className="text-sm text-blue-700">Balanced Routes</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-600">0</div>
                <div className="text-sm text-gray-700">Express Deliveries</div>
              </div>
            </div>
          </div>

          {/* Available Rewards */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Available Rewards</h2>
            <p className="text-gray-600 mb-6">
              Redeem your eco points for exclusive rewards and discounts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockEcoRewards.map((reward) => {
                const canRedeem = state.user.ecoPoints >= reward.pointsRequired;
                const isSelected = selectedReward === reward.id;

                return (
                  <div
                    key={reward.id}
                    className={`border-2 rounded-lg p-4 ${
                      isSelected
                        ? 'border-green-500 bg-green-50'
                        : canRedeem
                        ? 'border-gray-200 bg-white hover:border-eco-300'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        {getRewardIcon(reward.type)}
                        <h3 className="font-semibold text-gray-900">{reward.name}</h3>
                      </div>
                      <span className="text-sm font-medium text-eco-600">
                        {reward.pointsRequired} pts
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">{reward.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {reward.type === 'discount' && `${reward.discount}% off`}
                        {reward.type === 'free-shipping' && 'Free shipping'}
                        {reward.type === 'cashback' && `$${reward.discount} back`}
                      </span>

                      <button
                        onClick={() => handleRedeemReward(reward.id)}
                        disabled={!canRedeem}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          canRedeem
                            ? 'bg-eco-600 text-white hover:bg-eco-700'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {isSelected ? 'Redeemed' : 'Redeem'}
                      </button>
                    </div>

                    {!canRedeem && (
                      <div className="mt-2 text-xs text-red-600">
                        Need {reward.pointsRequired - state.user.ecoPoints} more points
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/"
              className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-eco-300 hover:bg-eco-50 transition-colors"
            >
              <ShoppingBag className="h-6 w-6 text-eco-600" />
              <div>
                <h3 className="font-medium text-gray-900">Continue Shopping</h3>
                <p className="text-sm text-gray-600">Browse more eco-friendly products</p>
              </div>
            </Link>

            <Link
              to="/cart"
              className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-eco-300 hover:bg-eco-50 transition-colors"
            >
              <ShoppingBag className="h-6 w-6 text-eco-600" />
              <div>
                <h3 className="font-medium text-gray-900">View Cart</h3>
                <p className="text-sm text-gray-600">Check your shopping cart</p>
              </div>
            </Link>

            <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <Leaf className="h-6 w-6 text-gray-400" />
              <div>
                <h3 className="font-medium text-gray-900">Earn More Points</h3>
                <p className="text-sm text-gray-600">Choose eco-friendly delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}