import React from "react";
import taxWiseLogo from "../assets/images/TaxWise-logo3.png";

const TaxWise = () => {
  return (
    <section id="#taxwise">
      {/* Header */}
      <div className="md:grid md:grid-cols-5 md:grid-rows-none justify-around items-start mb-8">
        <div className="grid items-start col-span-3">
          <h1 className="head-text">
            <span className="blue-gradient_text font-semibold drop-shadow">
              TaxWise
            </span>
          </h1>
          <h2 className="subhead-text">Simple Investment Tax Tool</h2>
          <div className="mt-5 gap-3 text-slate-500">
            <p className="text-lg">
              Know your tax bill before it's due. Track your investment gains and losses with a simple, clean tool.
            </p>
          </div>
        </div>
        <div className="sm:flex justify-center md:col-span-2">
          <img
            src={taxWiseLogo}
            className="object-contain float-center h-56 md:h-full m-auto"
            alt="TaxWise Logo"
          />
        </div>
      </div>

      {/* App Store Link */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Download TaxWise
              </h3>
              <p className="text-slate-600">
                Available now on the App Store for iOS devices
              </p>
            </div>
            <a
              href="https://apps.apple.com/us/app/taxwise-investment-tax-tool/id6751554700"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-90">Download on the</div>
                <div className="text-sm font-semibold -mt-1">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
          {/* What is TaxWise */}
          <div className="bg-white rounded-xl p-8 mb-8 glassmorphism border border-slate-100">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-lg">💰</span>
              </span>
              What is TaxWise?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              TaxWise is a <strong className="text-slate-800">simple investment tax tool</strong> that helps you enter your transactions and understand their tax implications. See how multiple trades affect your overall tax position and simulate different scenarios before you make decisions.
            </p>
            <p className="text-slate-600 leading-relaxed">
              A straightforward tool for investors who want to avoid tax surprises. Enter your transactions, see cumulative tax effects, and understand how different investment decisions impact your tax bill.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="bg-white rounded-xl p-8 mb-8 glassmorphism border border-slate-100">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-lg">✨</span>
              </span>
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">No Tax Surprises</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Know your tax liability throughout the year, not just at tax time</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Simple Tracking</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Just 3 fields per transaction - no complex data entry</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Tax Awareness</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Understand the difference between short-term and long-term gains</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Scenario Planning</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Test different investment moves and see tax impact before you trade</p>
                </div>
              </div>
            </div>
          </div>

          {/* Perfect For */}
          <div className="bg-white rounded-xl p-8 mb-8 glassmorphism border border-slate-100">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-lg">🎯</span>
              </span>
              Perfect For
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-3 bg-yellow-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                <p className="text-slate-700 font-medium">Casual investors who make occasional stock trades</p>
              </div>
              <div className="flex items-center gap-4 p-3 bg-yellow-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                <p className="text-slate-700 font-medium">People who got surprised by tax bills in previous years</p>
              </div>
              <div className="flex items-center gap-4 p-3 bg-yellow-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                <p className="text-slate-700 font-medium">DIY investors who want to track taxes throughout the year</p>
              </div>
              <div className="flex items-center gap-4 p-3 bg-yellow-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                <p className="text-slate-700 font-medium">Anyone who prefers simple tools over complex tax software</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-xl p-8 mb-8 glassmorphism border border-slate-100">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-lg">🚀</span>
              </span>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <span>📱</span> Cross-Platform
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">Built with React Native for iOS and Android</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <span>🧮</span> Automatic Calculations
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">Uses 2025 federal tax rates for accurate estimates</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <span>🔒</span> Privacy First
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">All data stays on your device - no cloud storage</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <span>⚡</span> Real-time Updates
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">Instant calculations as you add transactions</p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white rounded-xl p-8 mb-8 glassmorphism border border-slate-100">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 text-lg">⚙️</span>
              </span>
              Built With
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-5 py-3 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold shadow-sm">
                React Native
              </span>
              <span className="px-5 py-3 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold shadow-sm">
                JavaScript
              </span>
              <span className="px-5 py-3 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold shadow-sm">
                Expo
              </span>
              <span className="px-5 py-3 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold shadow-sm">
                AsyncStorage
              </span>
            </div>
          </div>

          {/* Privacy Policy */}
          <div id="privacy-policy" className="bg-white rounded-xl p-8 glassmorphism border border-slate-100">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                <span className="text-slate-600 text-lg">🔒</span>
              </span>
              Privacy Policy
            </h2>
            <div className="space-y-6 text-slate-600">
              <div>
                <p className="text-sm text-slate-500 mb-4">
                  <strong>Effective Date:</strong> January 1, 2025
                </p>
                <p className="leading-relaxed">
                  TaxWise is committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our mobile application.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Information We Collect</h3>
                <p className="leading-relaxed mb-3">
                  TaxWise is designed with privacy in mind. We collect minimal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Investment transaction data you manually enter (stock names, amounts, dates)</li>
                  <li>Tax rate preferences you configure in settings</li>
                  <li>Basic app usage analytics (crashes, performance metrics) through standard mobile app frameworks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">How We Store Your Data</h3>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                  <p className="font-medium text-green-800">🔒 Your financial data stays on your device</p>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Local Storage Only:</strong> All your transaction data is stored locally on your device using AsyncStorage</li>
                  <li><strong>No Cloud Backup:</strong> We do not upload, sync, or store your financial information on our servers</li>
                  <li><strong>No Account Required:</strong> TaxWise works without creating an account or providing personal information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Information We Do NOT Collect</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Financial account information (bank accounts, brokerage accounts)</li>
                  <li>Social Security Numbers or Tax ID numbers</li>
                  <li>Location data</li>
                  <li>Contact lists or photos</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Third-Party Services</h3>
                <p className="leading-relaxed mb-3">
                  TaxWise may use the following third-party services for app functionality:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Expo/React Native:</strong> Mobile app framework (standard crash reporting and analytics)</li>
                  <li><strong>App Store/Google Play:</strong> Standard app distribution analytics</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  These services may collect standard mobile app usage data as outlined in their respective privacy policies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Data Security</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your data is protected by your device's built-in security features</li>
                  <li>We recommend using device lock screens and biometric authentication</li>
                  <li>If you delete the app, all your data is permanently removed from your device</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Your Rights</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Data Control:</strong> You have complete control over your data since it's stored locally</li>
                  <li><strong>Data Deletion:</strong> Delete all data by uninstalling the app or clearing app data</li>
                  <li><strong>No Data Sharing:</strong> We cannot share your financial data because we don't have access to it</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Important Disclaimers</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Tax Estimates Only:</strong> TaxWise provides estimates for informational purposes only</li>
                    <li><strong>Not Tax Advice:</strong> Consult a qualified tax professional for official tax advice</li>
                    <li><strong>Federal Taxes Only:</strong> State and local taxes are not calculated</li>
                    <li><strong>User Responsibility:</strong> You are responsible for the accuracy of data you enter</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Changes to This Policy</h3>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted in the app and on this page. 
                  Continued use of TaxWise after changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Contact Us</h3>
                <p className="leading-relaxed">
                  If you have questions about this Privacy Policy or TaxWise, please contact us at:
                </p>
                <div className="mt-3 p-4 bg-slate-50 rounded-lg">
                  <p><strong>Email:</strong> brandongautama15@gmail.com</p>
                  <p><strong>Subject:</strong> TaxWise Privacy Policy</p>
                </div>
              </div>

              <div className="border-t pt-4 mt-6">
                <p className="text-sm text-slate-500">
                  This Privacy Policy was last updated on January 1, 2025. TaxWise is developed by Brandon Gautama.
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default TaxWise;
