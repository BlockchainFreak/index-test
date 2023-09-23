type PricingPlanProps = {
  title: string;
  price: string;
  features: string[];
}

const PricingPlan = ({ title, price, features }: PricingPlanProps) => (
  <div className="p-4 w-full">
    <div className="h-full border-2 border-blue-200 rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition ease-in-out">
      <div className="p-6">
        <h2 className="title-font font-medium text-3xl text-gray-900">{title}</h2>
        <h3 className="text-lg text-gray-500 mb-4">${price}/mo</h3>
        <ul className="list-disc pl-5">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className="mt-8 bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:scale-105">
          Choose Plan
        </button>
      </div>
    </div>
  </div>
);

const LandingPage = () => {
  const plans = [
    {
      title: 'Basic',
      price: '20',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'Pro',
      price: '50',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    },
    {
      title: 'Enterprise',
      price: '100',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6'],
    },
  ];

  return (
    <main className="container mx-auto h-screen bg-blue-200">
      <section className="grid place-content-center mt-24">
        <h1 className="text-4xl">
          Landing Page
        </h1>
      </section>
      <section className="text-gray-600 body-font">
        <div className="px-5 py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {plans.map((plan, index) => (
              <PricingPlan key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;