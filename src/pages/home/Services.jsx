import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-3xl">Service</h2>
      <h1 className="text-5xl">Our Service Area</h1>
      <p>
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which do not look even slightly believable.
      </p>
      <div>
        <h2>Services : {services.length}</h2>

        <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
