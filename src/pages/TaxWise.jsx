import taxWiseLogo from "../assets/images/TaxWise-logo3.png";

const sectionClass = "border-t border-hairline py-10";
const headingClass = "text-lg font-semibold tracking-tight text-ink";
const listClass = "mt-3 list-disc space-y-2 pl-5 text-ink-muted marker:text-ink-faint";

const benefits = [
  ["No Tax Surprises", "Know your tax liability throughout the year, not just at tax time"],
  ["Simple Tracking", "Just 3 fields per transaction - no complex data entry"],
  ["Tax Awareness", "Understand the difference between short-term and long-term gains"],
  ["Scenario Planning", "Test different investment moves and see tax impact before you trade"],
];

const audience = [
  "Casual investors who make occasional stock trades",
  "People who got surprised by tax bills in previous years",
  "DIY investors who want to track taxes throughout the year",
  "Anyone who prefers simple tools over complex tax software",
];

const features = [
  ["Cross-Platform", "Built with React Native for iOS and Android"],
  ["Automatic Calculations", "Uses 2025 federal tax rates for accurate estimates"],
  ["Privacy First", "All data stays on your device - no cloud storage"],
  ["Real-time Updates", "Instant calculations as you add transactions"],
];

const stack = ["React Native", "JavaScript", "Expo", "AsyncStorage"];

const TitledGrid = ({ items }) => (
  <dl className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2">
    {items.map(([title, text]) => (
      <div key={title}>
        <dt className="font-medium text-ink">{title}</dt>
        <dd className="mt-1 text-sm leading-relaxed text-ink-muted">{text}</dd>
      </div>
    ))}
  </dl>
);

const TaxWise = () => {
  return (
    <section id="taxwise" className="mx-auto max-w-[720px]">
      {/* Header */}
      <div className="flex items-center gap-5 pb-10">
        <img
          src={taxWiseLogo}
          className="h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-2xl object-contain"
          alt="TaxWise Logo"
        />
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">TaxWise</h1>
          <h2 className="mt-1 text-lg text-ink">Simple Investment Tax Tool</h2>
        </div>
      </div>
      <p className="max-w-prose text-base leading-relaxed text-ink-muted">
        Know your tax bill before it's due. Track your investment gains and losses with a simple, clean tool.
      </p>

      {/* App Store Link */}
      <div className="mt-8 flex flex-col gap-4 rounded-xl border border-hairline bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-medium text-ink">Download TaxWise</h3>
          <p className="mt-1 text-sm text-ink-muted">
            Available now on the App Store for iOS devices
          </p>
        </div>
        <a
          href="https://apps.apple.com/us/app/taxwise-investment-tax-tool/id6751554700"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-3 rounded-lg bg-ink px-5 py-2.5 text-white transition hover:bg-ink/85 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div className="text-left">
            <div className="text-[11px] opacity-80">Download on the</div>
            <div className="text-sm font-semibold -mt-0.5">App Store</div>
          </div>
        </a>
      </div>

      {/* What is TaxWise */}
      <div className={`mt-10 ${sectionClass}`}>
        <h2 className={headingClass}>What is TaxWise?</h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          TaxWise is a <strong className="font-medium text-ink">simple investment tax tool</strong> that helps you enter your transactions and understand their tax implications. See how multiple trades affect your overall tax position and simulate different scenarios before you make decisions.
        </p>
        <p className="mt-3 leading-relaxed text-ink-muted">
          A straightforward tool for investors who want to avoid tax surprises. Enter your transactions, see cumulative tax effects, and understand how different investment decisions impact your tax bill.
        </p>
      </div>

      {/* Key Benefits */}
      <div className={sectionClass}>
        <h2 className={headingClass}>Key Benefits</h2>
        <TitledGrid items={benefits} />
      </div>

      {/* Perfect For */}
      <div className={sectionClass}>
        <h2 className={headingClass}>Perfect For</h2>
        <ul className={listClass}>
          {audience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Features */}
      <div className={sectionClass}>
        <h2 className={headingClass}>Key Features</h2>
        <TitledGrid items={features} />
      </div>

      {/* Tech Stack */}
      <div className={sectionClass}>
        <h2 className={headingClass}>Built With</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-md border border-hairline bg-white px-2.5 py-1 font-mono text-xs text-ink-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Privacy Policy */}
      <div id="privacy-policy" className={sectionClass}>
        <h2 className={headingClass}>Privacy Policy</h2>
        <div className="mt-4 space-y-8 leading-relaxed text-ink-muted">
          <div>
            <p className="font-mono text-xs text-ink-faint">
              <strong className="font-medium">Effective Date:</strong> January 1, 2025
            </p>
            <p className="mt-3">
              TaxWise is committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our mobile application.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-ink">Information We Collect</h3>
            <p className="mt-2">
              TaxWise is designed with privacy in mind. We collect minimal information:
            </p>
            <ul className={listClass}>
              <li>Investment transaction data you manually enter (stock names, amounts, dates)</li>
              <li>Tax rate preferences you configure in settings</li>
              <li>Basic app usage analytics (crashes, performance metrics) through standard mobile app frameworks</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-ink">How We Store Your Data</h3>
            <p className="mt-3 border-l-2 border-accent pl-4 font-medium text-ink">
              Your financial data stays on your device
            </p>
            <ul className={listClass}>
              <li><strong className="font-medium text-ink">Local Storage Only:</strong> All your transaction data is stored locally on your device using AsyncStorage</li>
              <li><strong className="font-medium text-ink">No Cloud Backup:</strong> We do not upload, sync, or store your financial information on our servers</li>
              <li><strong className="font-medium text-ink">No Account Required:</strong> TaxWise works without creating an account or providing personal information</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-ink">Information We Do NOT Collect</h3>
            <ul className={listClass}>
              <li>Personal identification information (name, email, phone number)</li>
              <li>Financial account information (bank accounts, brokerage accounts)</li>
              <li>Social Security Numbers or Tax ID numbers</li>
              <li>Location data</li>
              <li>Contact lists or photos</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-ink">Third-Party Services</h3>
            <p className="mt-2">
              TaxWise may use the following third-party services for app functionality:
            </p>
            <ul className={listClass}>
              <li><strong className="font-medium text-ink">Expo/React Native:</strong> Mobile app framework (standard crash reporting and analytics)</li>
              <li><strong className="font-medium text-ink">App Store/Google Play:</strong> Standard app distribution analytics</li>
            </ul>
            <p className="mt-3">
              These services may collect standard mobile app usage data as outlined in their respective privacy policies.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-ink">Data Security</h3>
            <ul className={listClass}>
              <li>Your data is protected by your device's built-in security features</li>
              <li>We recommend using device lock screens and biometric authentication</li>
              <li>If you delete the app, all your data is permanently removed from your device</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-ink">Your Rights</h3>
            <ul className={listClass}>
              <li><strong className="font-medium text-ink">Data Control:</strong> You have complete control over your data since it's stored locally</li>
              <li><strong className="font-medium text-ink">Data Deletion:</strong> Delete all data by uninstalling the app or clearing app data</li>
              <li><strong className="font-medium text-ink">No Data Sharing:</strong> We cannot share your financial data because we don't have access to it</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-ink">Important Disclaimers</h3>
            <div className="mt-3 rounded-lg border border-hairline bg-white p-4">
              <ul className="list-disc space-y-2 pl-5 marker:text-ink-faint">
                <li><strong className="font-medium text-ink">Tax Estimates Only:</strong> TaxWise provides estimates for informational purposes only</li>
                <li><strong className="font-medium text-ink">Not Tax Advice:</strong> Consult a qualified tax professional for official tax advice</li>
                <li><strong className="font-medium text-ink">Federal Taxes Only:</strong> State and local taxes are not calculated</li>
                <li><strong className="font-medium text-ink">User Responsibility:</strong> You are responsible for the accuracy of data you enter</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-ink">Changes to This Policy</h3>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. Any changes will be posted in the app and on this page.
              Continued use of TaxWise after changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-ink">Contact Us</h3>
            <p className="mt-2">
              If you have questions about this Privacy Policy or TaxWise, please contact us at:
            </p>
            <div className="mt-3 rounded-lg border border-hairline bg-white p-4 text-sm">
              <p><strong className="font-medium text-ink">Email:</strong> brandongautama15@gmail.com</p>
              <p><strong className="font-medium text-ink">Subject:</strong> TaxWise Privacy Policy</p>
            </div>
          </div>

          <div className="border-t border-hairline pt-4">
            <p className="text-sm text-ink-faint">
              This Privacy Policy was last updated on January 1, 2025. TaxWise is developed by Brandon Gautama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxWise;
