import RotatingDomainText from "./RotatingDomainText";

const HomeBanner = () => {
  return (
    <div className="bg-primary py-24">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-logo-text text-center max-w-2xl mx-auto whitespace-nowrap">
            ethan builds <RotatingDomainText />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
